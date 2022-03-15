import React from 'react';
import SignUp from '../components/SignUp';
import Navbar from "../components/Navbar/index";

function SignIn() {
    return (
        <div className='square'>
            <div className='leftHome'>&nbsp;</div>
            <div className='centerHome'>
                <Navbar/>
                <SignUp></SignUp>
            </div>
            <div className='rightHome'>&nbsp;</div>
        </div>
    );
}

export default SignIn;