import React, { useEffect, useState } from 'react';
import "./LoginToAdmin.scss"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginToAdmin(props) {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const isRequest = props.requestSign;
    
    useEffect(() => {
        if (isRequest === 'true') {
            toast.error(' Vui lòng đăng nhập ', { position: toast.POSITION.TOP_CENTER })
        }
    }, [isRequest])

    toast.configure();
    const handleChangeUser = (e) => {
        setUser(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user && password) {
            if(user === 'admin' && password === '123123'){
                localStorage.setItem('Admin', user);
                window.location.href = `/homeadmin`;
            }else{
                toast.error(' Sai thông tin đăng nhập ', { position: toast.POSITION.TOP_CENTER });   
            }
        }else{
            toast.error(' Vui lòng điền thông tin ', { position: toast.POSITION.TOP_CENTER });   
        }
    }
    return (
        <div className='containerLoginAdmin'>
            <div className='frameLoginAdmin'>
                <div className='formLoginAdmin'>
                    <form onSubmit={handleSubmit}>
                        <h2><span className="entypo-login"><i className="fa fa-sign-in"></i></span> Admin</h2>
                        <button className="submit"><span className="entypo-lock"><i className="fa fa-lock"></i></span></button>
                        <span className="entypo-user inputUserIcon">
                            <i className="fa fa-user"></i>
                        </span>
                        <input type="text" className="user" placeholder="username" onChange={handleChangeUser}/>
                        <span className="entypo-key inputPassIcon">
                            <i className="fa fa-key"></i>
                        </span>
                        <input type="password" className="pass" placeholder="password" onChange={handleChangePassword}/>
                    </form>
                </div>
            </div>
        </div>
    )
}
