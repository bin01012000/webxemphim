import React, { useState } from 'react';
import './SignUp.scss'
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';



export default function SignUp() {


    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    

    const postUser = async() => {
        const r = await axios.get(`${process.env.REACT_APP_API_URL}/existuser?taikhoan=${user}&email=${email}`)
        if (r.data.length === 0) {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/mailer?taikhoan=${user}&matkhau=${password}&email=${email}&sdt=${phone}&hoten=${name}`);
            if (res.status === 200) {   
                toast.success(' Vui lòng xác nhận account trong email của bạn ', { position: toast.POSITION.TOP_CENTER });                               
                setTimeout(()=>{
                    window.location.href='/token';
                },2500)       
            }
        }
        else {
            toast.error(' Tài khoản hoặc email đã tồn tại ', { position: toast.POSITION.TOP_CENTER });
        }
    }
    toast.configure();
    const handleChangeUser = (e) => {
        setUser(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePhone = (e) => {
        setPhone(e.target.value);
    }
    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(user && password && email && phone && name){
            if(phone.length === 10 || phone.length === 11){
                postUser();
            }else{
                toast.error(' Số điện thoại không hợp lệ ', { position: toast.POSITION.TOP_CENTER });
            }
        }else{
            toast.error(' Vui lòng điền thông tin ', { position: toast.POSITION.TOP_CENTER });
        } 
    }
    


    return (
        <div className='containerSignUp'>
            <div className='frameSignUp'>
                <div className='formSignUp'>
                    <form onSubmit={handleSubmit}>
                        <h2><span className="entypo-login"><i className="fa fa-sign-in"></i></span> SignUp</h2>
                        <button className="submit"><span className="entypo-lock"><i className="fa fa-lock"></i></span></button>
                        <span className="entypo-user inputUserIcon">
                            <i className="fa fa-user"></i>
                        </span>
                        <input type="text" className="user" placeholder="username" onChange={handleChangeUser}/>
                        <span className="entypo-key inputPassIcon">
                            <i className="fa fa-key"></i>
                        </span>
                        <input type="password" className="pass" placeholder="password" onChange={handleChangePassword}/>
                        <span className="entypo-key inputPassIcon">
                            <i className="fa fa-key"></i>
                        </span>
                        <input type="email" className="pass" placeholder="email" onChange={handleChangeEmail}/>
                        <input type="number" className="pass" placeholder="phone(+84)" onChange={handleChangePhone}/>
                        <input type="text" className="pass" placeholder="name" onChange={handleChangeName}/>
                    </form>
                    <p>You had account ? <NavLink to="/signin" className="inToUp"> Login here </NavLink></p>
                </div>
            </div>
        </div>
    )
}
