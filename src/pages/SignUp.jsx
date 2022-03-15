import React, { useEffect, useState } from 'react';
import SignUp from '../components/SignUp';
import Navbar from "../components/Navbar/index";
import axios from 'axios';
function SignIn() {
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
                <SignUp></SignUp>
            </div>
            <div className='rightHome'>&nbsp;</div>
        </div>
    );
}

export default SignIn;