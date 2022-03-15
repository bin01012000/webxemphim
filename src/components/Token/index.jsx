import React from 'react'
import { NavLink } from 'react-router-dom'
import './Token.scss'

export default function Token() {
    return (
        <div className='containerToken'>
            <div className='frameToken'>
                <div className='formToken'>
                    <h2><span className="entypo-login"><i className="fa fa-sign-in"></i></span> Verifying Your Email Address</h2>
                    <p><i class="fa fa-envelope"></i></p>
                    <p>Vui lòng kiểm tra email của bạn và xác nhận</p>
                    <p>Go to your Gmail, please <a target='_blank' href='https://mail.google.com/' className="goToMail" rel="noreferrer"> click here </a> </p>
                    <NavLink to='/signin' className="submit"><button className="submit">LOGIN</button> </NavLink>

                </div>
            </div>
        </div>
    )
}
