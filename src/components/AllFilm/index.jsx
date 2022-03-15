import React, { useEffect, useState } from 'react';
import './AllFilm.scss';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';

const AllFilm = (props) => {

    const { id } = useParams();

    const [data, setData] = useState([]);

    const [text, setText] = useState('');


    useEffect(() => {
        getFilmByCate();
    });

    const getFilmByCate = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/filmbycate?maloai=${id}`);
        if (res.status === 200) {
            console.log(res.data);
            setData(res.data);
            setText(data[0].tenloai);
        }
    }

    return (
        <div className='containerAllFilm'>
            <div className='nameCate'><span className='text'> danh sách: phim {text}</span></div>
            <div className='contentAllFilm'>
                <div className='listAll'>
                    {data && data.map((item, id) => {
                        return (
                            <>
                                <NavLink to={`/detail/${item.maphim}`} className='film'>                                    
                                    <img src={item.poster} alt="bogia" className='imgListShow' />
                                    <p>{item.tenphim}</p>
                                </NavLink>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default AllFilm;