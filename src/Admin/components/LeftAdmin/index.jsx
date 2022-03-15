import React from 'react'
import { NavLink } from 'react-router-dom';
import './LeftAdmin.scss'

export default function LeftAdmin() {

    const signOutAdmin = () => {
        localStorage.removeItem('Admin');
        window.location.href = '/admin';
    }

    return (
        <div className='containerLeftAdmin'>
            <div className="maintext"><NavLink to='/homeadmin' className='text'>
                <span className='text'>Admin</span>
                <p>Welcome to admin</p>
                <img src="https://thumbs.dreamstime.com/b/admin-sign-laptop-icon-stock-vector-166205404.jpg" alt="" />
                </NavLink>
            </div>
            <div id="mainnav">
                <ul>
                    <li> Phim
                        <ul class="sub-menu">
                            <NavLink to='/listfilmadmin' className='liLink'> <li> Danh sách </li></NavLink>
                            <NavLink to='/themphimadmin' className='liLink'> <li> Thêm </li></NavLink> 
                        </ul>
                    </li>
                    <li> Thể loại phim
                        <ul class="sub-menu">
                             <NavLink to='/listcateadmin' className='liLink'> <li> Danh sách </li></NavLink> 
                             <NavLink to='/themcateadmin' className='liLink'> <li> Thêm </li></NavLink> 
                        </ul>
                    </li>
                    <div className="boxSignOut">
                        <p onClick={signOutAdmin} className='txtSignOut'>Đăng Xuất</p>
                    </div>
                </ul>
            </div>
        </div>
    )
}
