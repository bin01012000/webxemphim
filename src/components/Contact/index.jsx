import React, { useState } from 'react';
import './Contact.scss'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';



const Contact = () => {
    toast.configure();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangeContent = (e) => {
        setContent(e.target.value);
    }

    const sendFeedback = async () => {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/feedback?email=${email}&hoten=${name}&noidung=${content}`);
        if (res.status === 200) {
            toast.success(' Gửi phản hồi thành công ', { position: toast.POSITION.TOP_CENTER });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendFeedback();
    }
return (
    <div className='containercontact'>
        <div className='leftcontact'>
            <form onSubmit={handleSubmit}>
                <div className='namemail'>
                    <div className='name'>
                        <p> Họ và tên </p>
                        <input type="text" placeholder=" Tên của bạn " name="hoten" onChange={handleChangeName}/>
                    </div>
                    <div className='mail'>
                        <p> Email </p>
                        <input type="email" placeholder=' Email của bạn ' name="email" onChange={handleChangeEmail}/>
                    </div>
                </div>

                <div className='content'>
                    <p> Nội Dung</p>
                    <textarea placeholder=' Nội dung ' name="noidung" onChange={handleChangeContent}/>
                </div>

                <div className='submit'>
                    <input type='submit' value=" Gửi thông tin " />
                </div>
            </form>
        </div>
        <div className='rightcontact'>
            <h2> Thông tin liên hệ </h2>
            <p><i className="fa fa-map-marker"></i><span className='contactMethod'>180 Cao Lỗ, Phường 4, Quận 8, Tp.HCM</span></p>
            <p><i className="fa fa-envelope"></i><span className='contactMethod'>bin01012000@gmail.com</span></p>
            <p><i className="fa fa-address-book"></i><span className='contactMethod'>(+84) 928396024</span></p>
        </div>
    </div>
);
}

export default Contact;