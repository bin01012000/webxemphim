import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../FormThemCate/FormThemCate.scss'

export default function FormEditCate() {

    toast.configure();  
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [tenloai,setTenLoai] = useState('');

    useEffect(() => {
        getCate();
    }, [])

    const getCate = async () => {
        const res = await axios.get(`http://localhost:5000/category?maloai=${id}`);
        if (res.status === 200) {
            console.log(res.data);
            setData(res.data);
        }
    }

    const updateCate = async() =>{
        const res = await axios.post(`http://localhost:5000/updatecate?maloai=${id}&tenloai=${tenloai}`);
        if (res.status === 200) {
            console.log(res.data);
            toast.success(' Cập nhật thành công ', { position: toast.POSITION.TOP_CENTER })
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(tenloai){
            updateCate();
        }else{
            toast.error(' Vui lòng điền thông tin đầy đủ ', { position: toast.POSITION.TOP_CENTER })
        }
    }

    return (
        <div className='containerFormThemCate'>
            <div className="formTong">
                <form onSubmit={handleSubmit}>
                    <h2> form edit cate </h2>
                    {data && data.map((item, id) => {
                        return (<div key={id}>
                            <input type="text" className='styleInput' value={item.maloai} disabled />
                            <input type="text" className='styleInput' defaultValue={item.tenloai} onChange={(e)=>setTenLoai(e.target.value)}/>
                            <div className="submitStyle">
                                <button>CẬP NHẬT</button>
                            </div>
                            </div>
                        );
                    })}

                </form>
            </div>
        </div>
    )
}
