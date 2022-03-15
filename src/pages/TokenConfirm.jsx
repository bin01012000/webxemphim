import React from 'react';
import Token from '../components/Token';
import Navbar from '../components/Navbar';

function TokenConfirm() {
    return (
        <div className='square'>
            <div className='leftHome'>&nbsp;</div>
            <div className='centerHome'>
                <Navbar/>
                <Token/>
            </div>
            <div className='rightHome'>&nbsp;</div>
        </div>
    );
}

export default TokenConfirm;