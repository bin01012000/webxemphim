import React from 'react';
import './ContentFilm.scss'

const ContentFilm = (props) => {
    return (
        <div className='containerContent'>
            <div className='noiDung'>
                <p className='title'> Nội Dung Chính </p>
                <p className='contentDetail'>{props.content}</p>
            </div>
        </div>
    );
}

export default ContentFilm;