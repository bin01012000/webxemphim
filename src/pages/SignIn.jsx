import React, { useEffect, useState }  from 'react';
import { useParams } from 'react-router-dom';
import Login from '../components/Login';
import Navbar from "../components/Navbar/index";
import './Home.scss'
import axios from 'axios';

function SignIn(props) {

    const {id} = useParams();
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
                <Navbar data={data}></Navbar>
                <Login requestSign={props.requestSign} sucSignUp={id}></Login>
            </div>
            <div className='rightHome'>&nbsp;</div>
        </div>
    );
}

export default SignIn;