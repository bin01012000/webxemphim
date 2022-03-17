import React, { Fragment, useEffect, useState } from 'react';
import './AllFilm.scss';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';

const AllFilm = (props) => {

    const { id } = useParams();

    const [data, setData] = useState([]);

    const [text, setText] = useState('');



    useEffect(() => {
        const getFilmByCate = async () => {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/filmbycate?maloai=${id}`);
            if (res.status === 200) {
                console.log(res.data);
                setData(res.data);
                setText(res.data[0].tenloai);
            }
        }
        getFilmByCate();
        
    }, [id]);



    return (
        <div className='containerAllFilm'>
            <div className='nameCate'><span className='text'> danh sách: phim {text}</span></div>
            <div className='contentAllFilm'>
                <div className='listAll'>
                    {data && data.map((item, id) => {
                        return (
                            <Fragment key={id}>
                                <NavLink to={`/detail/${item.maphim}`} className='film'>
                                    <img src={item.poster} alt="bogia" className='imgListShow' />
                                    <p>{item.tenphim}</p>
                                </NavLink>
                            </Fragment>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default AllFilm;