import React, { useEffect, useState } from 'react';
import './Slide.scss'
import Carousel from 'react-elastic-carousel';
import Item from './yourItem';
import axios from 'axios';

const Slide = (props) => {

    const [data, setData] = useState([]);


    useEffect(() => {
        getRandFilm();
    }, []);

    const getRandFilm = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/randfilm`);
        if (res.status === 200) {
            console.log(res.data);
            setData(res.data);            
        }
    };

    return (
        <div className='containerslide'>
            <div className='contentslide'>
                <div className='film'>
                    <Carousel className='carousel' itemsToShow={props.numberShow} itemsToScroll={1} enableAutoPlay autoPlaySpeed={10000}>
                        {data.map((item, id) => {
                            return (
                                <Item key={id} padding={props.padding} link={`/detail/${item.maphim}`} item={item.poster} />
                            );
                        })}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Slide