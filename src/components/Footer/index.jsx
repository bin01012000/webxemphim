import React from 'react';
import './Footer.scss'
import logo from '../../assets/images/movie.png'
import { Link } from 'react-router-dom';


const Footer = (props) => {


    return (<>
        <div className='containerfooter'>
            <div className='leftfooter'> &nbsp;
                <img src={logo} alt="" className='imgLogo' />
            </div>
            <div className='rightfooter'>&nbsp;
                <div className='category'>
                    <ul> Danh mục
                        {props.data && props.data.map((item, id) => {
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