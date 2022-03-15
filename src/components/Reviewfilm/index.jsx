/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './Reviewfilm.scss'
import RatingIcon from '../StarRating/RatingIcon'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios';
import ContentFilm from '../ContentFilm';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reviewfilm = () => {

    toast.configure();

    const [rating, setRating] = useState(0);
    const { id } = useParams();
    const [data, setData] = useState([]);
    const acc = localStorage.getItem('User');
    const [content,setContent] = useState('');
    

    useEffect(() => {
        getFilm();
    },[data, getFilm])

    async function getFilm() {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/filmcate?maphim=${id}`);
        if (res.status === 200) {
            console.log(res.data);
            setData(res.data);
            setRating(res.data[0].rating);
            setContent(res.data[0].mota);
        }
    }
    const [hoverRating, setHoverRating] = React.useState(0);
    const onMouseEnter = (index) => {
        setHoverRating(index);
    };
    const onMouseLeave = () => {
        setHoverRating(0);
    };
    const onSaveRating = (props) => {
        setRating(props.a);
    };

    const insertToFav = async () => {
        const r = await axios.get(`${process.env.REACT_APP_API_URL}/existfav?taikhoan=${acc}&maphim=${id}`)
        if (r.data.length === 0) {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/insertfav?taikhoan=${acc}&maphim=${id}`);
            if (res.status === 200) {
                toast.success(' Đã thêm vào yêu thích ', { position: toast.POSITION.TOP_CENTER });
            }
        }
        else {
            toast.error(' Đã có trong yêu thích ', { position: toast.POSITION.TOP_CENTER });
        }

    }

    const addToFav = () => {
        if (!localStorage.getItem('User')) {
            toast.error(' Vui lòng đăng nhập ', { position: toast.POSITION.TOP_CENTER });
        } else {
            insertToFav();
        }
    }



    return (
        <>
            <div className='containerReview'>

                {data && data.map((item, id) => {
                    return (
                        <>
                            <div className='leftReview'>
                                <img src={item.poster} alt="" className='imgReview' />
                                <p>{item.mota.slice(0,150) + `...`}</p>
                            </div>
                            <div className='centerReview'>&nbsp;</div>
                            <div className='rightReview'>
                                <p className='title'>{item.tenphim}</p>
                                <p><div className='star'>
                                    <div className="box flex">
                                        {[1, 2, 3, 4, 5].map((index) => {
                                            return (
                                                <RatingIcon
                                                    index={index}
                                                    rating={rating}
                                                    hoverRating={hoverRating}
                                                    onMouseEnter={onMouseEnter}
                                                    onMouseLeave={onMouseLeave}
                                                    onSaveRating={onSaveRating} />
                                            )
                                        })}
                                    </div></div> <i className="fa fa-tag"></i> Phim {item.tenloai} </p><br /><br />
                                <NavLink to={`/play/${item.maphim}`} className='playVideo'><button type='submit' className='playVideo'> Xem phim <i class='fas fa-play'></i></button></NavLink>&nbsp;&nbsp;&nbsp;
                                <button type='submit' className='addToFav' onClick={addToFav}> Yêu thích <i class='fa fa-heart'></i></button>
                                <div className='groupInfo'>
                                    <p className='nameInfo'> Thời lượng : <span className='info'>{item.thoiluong} phút</span> </p>
                                    <p className='nameInfo'> Số tập : <span className='info'>{item.tap}</span> </p>
                                    <p className='nameInfo'> Thể loại : <span className='info'>Phim {item.tenloai}</span> </p>
                                    <p className='nameInfo'> Đạo diễn : <span className='info'>{item.daodien}</span> </p>
                                    <p className='nameInfo'> Diễn viên : <span className='info'>{item.dienvien}</span> </p>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
            <ContentFilm content={content} />
        </>
    );
}

export default Reviewfilm;