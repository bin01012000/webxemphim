import React from 'react';
import './Footer.scss'
import logo from '../../assets/images/movie.png'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Footer = () => {

    const [data, setData] = useState([]);

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

    return (<>
        <div className='containerfooter'>
            <div className='leftfooter'> &nbsp;
                <img src={logo} alt="" className='imgLogo' />
            </div>
            <div className='rightfooter'>&nbsp;
                <div className='category'>
                    <ul> Danh mục
                        {data && data.map((item, id) => {
                            return (
                                <li key={id}><Link to={`/viewall/${item.maloai}`} className='cateFooter'> Phim {item.tenloai} </Link></li>
                            );
                        })}                        
                    </ul>
                </div>
                <div className='page'>
                    <p> Trang </p>
                </div>
                <div className='contact'>
                    <p> Liên hệ </p>
                </div>
            </div>
        </div>
        <div className='copyright'>
            © Copyright 2022 Developer by BinDier.  All Rights Reserved.
        </div>
    </>
    );
}

export default Footer;