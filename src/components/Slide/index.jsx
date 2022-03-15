import React from 'react';
import './Slide.scss'
import Carousel from 'react-elastic-carousel';
import Item from './yourItem';

const Slide = (props) => {

    return (
        <div className='containerslide'>
            <div className='contentslide'>
                <div className='film'>
                    <Carousel className='carousel' itemsToShow={props.numberShow} itemsToScroll={1} enableAutoPlay autoPlaySpeed={10000}>
                        {props.data.map((item, id) => {
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