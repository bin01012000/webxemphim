import React, { useState } from 'react';
import './Search.scss'

const Search = (props) => {


    const [kw, setKw] = useState('');

    const [ml, setMl] = useState('');


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
                            <option value=''> Tất cả phim </option>
                            {props.data && props.data.map((item, id) => {
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