import React, { useEffect, useState } from 'react';
import './Listfilmshow.scss'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Namecate from '../Namecate';

const Listfilmshow = (props) => {

    const [data, setData] = useState([]);


    useEffect(() => {
        getAllFilm();
    },[]);

    const getAllFilm = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/filmbycategory10?maloai=${props.id}`);
        if (res.status === 200) {
            console.log(res.data);
            setData(res.data);
        }
    }



    return (<>
        <Namecate text={`PHIM ${props.txt}`} id={props.id}/>
        <div className='containerlistfilmshow'>
            <div className='contentlistfilmshow'>
                <div className='filmlist'>
                    {data && data.map((item, id) => {
                        return (
                            <NavLink key={id} to={`/detail/${item.maphim}`} className='film'>                                
                                <img src={item.poster} alt="bogia" className='imgListShow' />
                                <p>{item.tenphim}</p>
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        </div>
        </>
    );
}

export default Listfilmshow;