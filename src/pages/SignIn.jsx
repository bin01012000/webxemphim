import React from 'react';
import { useParams } from 'react-router-dom';
import Login from '../components/Login';
import Navbar from "../components/Navbar/index";

function SignIn(props) {

    const {id} = useParams();

    return (
        <div className='square'>
            <div className='leftHome'>&nbsp;</div>
            <div className='centerHome'>
                <Navbar></Navbar>
                <Login requestSign={props.requestSign} sucSignUp={id}></Login>
            </div>
            <div className='rightHome'>&nbsp;</div>
        </div>
    );
}

export default SignIn;