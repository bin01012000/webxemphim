/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './FavoFilm.scss';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

const FavoFilm = (props) => {

    const acc = localStorage.getItem('User');

    const [data, setData] = useState([]);


    useEffect(() => {
        getFilmByCate();    
    }, [data]);

    const getFilmByCate = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/allfav?taikhoan=${acc}`);
        if (res.status === 200) {
            console.log(res.data);
            setData(res.data);
        }
    }

    const removeFromFav = (id) => {
        confirmAlert({
            title: 'Xóa',
            message: 'Bạn có muốn xóa khỏi mục yêu thích không ?',
            buttons: [
                {
                    label: 'Có',
                    onClick: () => {
                        const res = axios.post(`${process.env.REACT_APP_API_URL}/deletefav?taikhoan=${acc}&maphim=${id}`);
                        if (res.status === 200) {
                            console.log(res.data);

                        }
                    }
                },
                {
                    label: 'Không',
                    onClick: () => {

                    }
                }
            ]
        })
    }

    return (
        <div className='containerFavoFilm'>
            <div className='nameCate'><span className='text'> danh sách phim yêu thích</span></div>
            <div className='contentFavoFilm'>
                <div className='listAll'>
                    {data && data.map((item, id) => {
                        return (<>

                            <div key={id} className='film'>
                                <NavLink to={`/detail/${item.maphim}`}><img src={item.poster} alt={item.tenphim} className='imgListShow' /></NavLink>
                                <NavLink to={`/detail/${item.maphim}`} className='txtFilmName'><p>{item.tenphim}</p></NavLink>
                                <button className='removeFav' onClick={()=>removeFromFav(item.maphim)}>&#215;</button>
                            </div>

                        </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default FavoFilm;