import React from 'react';
import { Link } from 'react-router-dom';
import './Namecate.scss'


const Namecate = (props) =>{

    

    return(
        <div className='containernamecate'>
            <div className='leftnamecate'>
                <div className='contentleft'><span className='text'> {props.text} </span></div>
            </div>
            <div className='rightnamecate'>
                <Link to={`/viewall/${props.id}`} className='contentright'> Xem tất cả <i className="fa fa-angle-double-right"></i></Link>
            </div>
        </div>
    );
}

export default Namecate;