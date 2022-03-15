import React from 'react'
import './WelcomeAdmin.scss'
import logo from '../../../assets/images/movie.png'

export default function WelcomeAdmin() {
    return (
        <div className="containerWelcome">
            <h1>Welcome To Admin</h1>
            <p> BĐXL Movie - Xem phim chất lượng - Là người Việt - Xem của Việt</p>
            <img src={logo} alt="" className='imgAdmin'/>
        </div>
    )
}
