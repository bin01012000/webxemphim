import React, { useState } from 'react'
import './FormThemCate.scss'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function FormThemCate() {

    toast.configure();    
    const [maloai, setMaLoai] = useState('');
    const [tenloai, setTenLoai] = useState('');


    const insertCate = async () => {
        const r = await axios.get(`${process.env.REACT_APP_API_URL}/existcate?maloai=${maloai}`)
        if (r.data.length === 0) {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/insertcate?maloai=${maloai}&tenloai=${tenloai}`);
            if (res.status === 200) {
                toast.success(' Thêm thành công ', { position: toast.POSITION.TOP_CENTER });
                setTimeout(() => {
                    window.location.href = '/listcateadmin';
                }, 1000)
            }
        } else {
            toast.error(' Mã loại đã tồn tại ', { position: toast.POSITION.TOP_CENTER });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (maloai && tenloai) {
            insertCate();
        } else {
            toast.error(' Vui lòng điền thông tin đầy đủ ', { position: toast.POSITION.TOP_CENTER })
        }
    }

    return (
        <div className='containerFormThemCate'>
            <div className="formTong">
                <form onSubmit={handleSubmit}>
                    <h2> form Thêm cate </h2>
                    <input type="text" className='styleInput' placeholder="mã loại" onChange={(e) => { setMaLoai(e.target.value) }} />
                    <input type="text" className='styleInput' placeholder="tên loại" onChange={(e) => { setTenLoai(e.target.value) }} />
                    <div className="submitStyle">
                        <button>THÊM</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
