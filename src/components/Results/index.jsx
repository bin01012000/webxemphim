import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './Results.scss'

export default function Results() {

    const { kw, id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        getRSSearch();
        console.log(id);
        console.log(data + 'aa');
    }, [])

    const getRSSearch = async () => {
        if (!id) {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/search?kw=${kw}&maloai=`);
            if (res.status === 200) {
                console.log(res.data);
                setData(res.data);
            }
            
        }else{
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/search?kw=${kw}&maloai=${id}`);
            if (res.status === 200) {
                console.log(res.data);
                setData(res.data);
            }
        }
    }

    return (
        <div className='containerResults'>
            <div className='nameCate'><span className='text'> kết quả tìm kiếm: {kw}</span></div>
            <div className='contentResults'>
                <div className='listResults'>
                    {data.length ? data.map((item, id) => {
                        return (
                            <>
                                <NavLink key={id} to={`/detail/${item.maphim}`} className='film'>
                                    <img src={item.poster} alt="bogia" className='imgListShow' />
                                    <p>{item.tenphim}</p>
                                </NavLink>
                            </>
                        );
                    }) : <p className='textRS'> Không có kết quả tìm thấy </p>}
                </div>
            </div>
        </div>
    )
}
