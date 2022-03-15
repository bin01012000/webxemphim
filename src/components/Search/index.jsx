import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Search.scss'

const Search = () => {

    const [data, setData] = useState([]);

    const [kw, setKw] = useState('');

    const [ml, setMl] = useState('');



    useEffect(() => {
        getAllCategory();
    }, []);

    const getAllCategory = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/allcategory`);
        if (res.status === 200) {
            console.log(res.data);
            setData(res.data);
        }
    };


    const takeMaLoai = (e) => {
        setMl(e.target.value);
    }

    const handleChange = (e) => {
        setKw(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(kw);
        console.log(ml);
        window.location.href = `/search/${kw}/${ml}`;
    }

    return (
        <div className='containersearch'>
            <form onSubmit={handleSubmit}>
                <div className='leftsearch'>
                    <div className='categorySearch'>
                        <select defaultValue='0' onChange={takeMaLoai}>
                            <option> Tất cả phim </option>
                            {data && data.map((item, id) => {
                                return (
                                    <option key={id} value={item.maloai}> {item.tenloai} </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <div className='rightsearch'>

                    <input type="text" placeholder="Nhập từ khóa..." onChange={handleChange} />
                    <button type="submit"><i className="fa fa-search"></i></button>

                </div>
            </form>
        </div>
    );
}

export default Search;