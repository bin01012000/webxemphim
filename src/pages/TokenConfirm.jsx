import React, { useEffect, useState } from 'react';
import Token from '../components/Token';
import Navbar from '../components/Navbar';
import axios from 'axios';
function TokenConfirm() {
    const [data, setData] = useState([]);
    

    useEffect(() => {
        getAllCate();
        
    }, [])

    const getAllCate = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/allcategory`);
        if (res.status === 200) {
            console.log(res.data);
            setData(res.data);
        }
    }
    return (
        <div className='square'>
            <div className='leftHome'>&nbsp;</div>
            <div className='centerHome'>
                <Navbar data={data}/>
                <Token/>
            </div>
            <div className='rightHome'>&nbsp;</div>
        </div>
    );
}

export default TokenConfirm;