import React, { useEffect, useState } from 'react';
import './Login.scss'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login(props) {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState(null);
    const isRequest = props.requestSign;
    const isSignUp = props.sucSignUp;
    useEffect(() => {
        if (isRequest === 'true') {
            toast.error(' Vui lòng đăng nhập ', { position: toast.POSITION.TOP_CENTER })
        }

        if(isSignUp === 'asdfghjzxcnb434asdjfhdjsf34342sdfsdf'){
            toast.success(' Đăng ký thành công ', { position: toast.POSITION.TOP_CENTER })
        }
    }, [isRequest,isSignUp])
    toast.configure();
    const getUser = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/userlogin?taikhoan=${user}`);
        if (res.status === 200) {
            if (res.data.length !== 0) {
                console.log(res.data);
                if (res.data[0].matkhau !== password) {
                    toast.error(' Mật khẩu không đúng ', { position: toast.POSITION.TOP_CENTER });
                    return 0;
                }
                setData(res.data);
            } else {
                toast.error(' Tài khoản không đúng ', { position: toast.POSITION.TOP_CENTER });
                return 0;
            }

        }
    }

    const handleChangeUser = (e) => {
        setUser(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user && password) {
            getUser();
            if (data) {
                localStorage.setItem('User', user);
                window.location.href = `/`;
            }
        }else{
            toast.error(' Vui lòng điền thông tin ', { position: toast.POSITION.TOP_CENTER });   
        }
    }

    return (
        <div className='containerLogin'>
            <div className='frameLogin'>
                <div className='formLogin'>
                    <form onSubmit={handleSubmit}>
                        <h2><span className="entypo-login"><i className="fa fa-sign-in"></i></span> Login</h2>
                        <button className="submit"><span className="entypo-lock"><i className="fa fa-lock"></i></span></button>
                        <span className="entypo-user inputUserIcon">
                            <i className="fa fa-user"></i>
                        </span>
                        <input type="text" className="user" placeholder="username" onChange={handleChangeUser} />
                        <span className="entypo-key inputPassIcon">
                            <i className="fa fa-key"></i>
                        </span>
                        <input type="password" className="pass" placeholder="password" onChange={handleChangePassword} />
                    </form>
                    <p>You don't have account ? <NavLink to="/signup" className="inToUp">Create here </NavLink></p>
                </div>
            </div>
        </div>
    )
}
