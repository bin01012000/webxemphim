import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "../FormThemFilm/FormThemFilm.scss"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

export default function FormEditFilm() {
    toast.configure();
    const [data, setData] = useState([]);
    const [datafilm, setDataFilm] = useState([]);
    const [tenphim, setTenPhim] = useState('');
    const [thoiluong, setThoiLuong] = useState('');
    const [daodien, setDaoDien] = useState('');
    const [dienvien, setDienVien] = useState('');
    const [tap, setTap] = useState('');
    const [mota, setMoTa] = useState('');
    const [poster, setPoster] = useState('');
    const [rating, setRating] = useState('');
    const [video, setVideo] = useState('');
    const [maloai, setMaLoai] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const getAllCategory = async () => {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/allcategory?`);
            if (res.status === 200) {
                console.log(res.data);
                setData(res.data);
            }
        };
    
        const getFilm = async () => {
            const r = await axios.get(`${process.env.REACT_APP_API_URL}/film?maphim=${id}`);
            if (r.status === 200) {
                console.log(r.data);
                setDataFilm(r.data);
                setTenPhim(r.data[0].tenphim);
                setThoiLuong(r.data[0].thoiluong);
                setDaoDien(r.data[0].daodien);
                setDienVien(r.data[0].dienvien);
                setTap(r.data[0].tap);
                setMoTa(r.data[0].mota);
                setMaLoai(r.data[0].maloai);
                setRating(r.data[0].rating);
                setPoster(r.data[0].poster);
                setVideo(r.data[0].video);
            }
        }
        getAllCategory();
        getFilm();
    }, [id]);

    

    const takeMaLoai = (e) => {
        setMaLoai(e.target.value);
    }


    const uploadFile = async () => {

        const d = new FormData();
        d.append('file', poster);
        d.append('file', video);
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/uploadupdate?maphim=${id}&tenphim=${tenphim}&thoiluong=${thoiluong}&daodien=${daodien}&dienvien=${dienvien}&tap=${tap}&mota=${mota}&poster=${poster}&rating=${rating}&video=${video}&maloai=${maloai}`, d);
        if (res.status === 200) {
            toast.success(' Cập nhật thành công ', { position: toast.POSITION.TOP_CENTER });
        }

    }


    const handleSubmit = (e) => {

        e.preventDefault();

        if (tenphim) {
            if (rating > 0 && rating <= 5) {
                if (thoiluong > 0) {
                    if (tap > 0) {
                        uploadFile();
                    } else {
                        toast.error(' Tập không hợp lệ ', { position: toast.POSITION.TOP_CENTER })
                    }
                } else {
                    toast.error(' Thời lượng không hợp lệ ', { position: toast.POSITION.TOP_CENTER })
                }
            }
            else {
                toast.error(' Rating không hợp lệ ', { position: toast.POSITION.TOP_CENTER })
            }
        } else {
            toast.error(' Vui lòng điền thông tin đầy đủ ', { position: toast.POSITION.TOP_CENTER })
        }

    }

    return (
        <div className='containerFormThemFilm'>
            <div className="formTong">
                <form onSubmit={handleSubmit}>
                    <h2> form Thêm Phim </h2>
                    {datafilm && datafilm.map((item, id) => {
                        return(
                        <>
                            <div className="form1">
                                <input type="text" className='styleInput' value={item.maphim} disabled />
                                <input type="text" className='styleInput' defaultValue={item.tenphim} onChange={(e) => { setTenPhim(e.target.value) }} />
                                <input type="number" className='styleInput' defaultValue={item.thoiluong} onChange={(e) => { setThoiLuong(e.target.value) }} />
                                <input type="text" className='styleInput' defaultValue={item.daodien} onChange={(e) => { setDaoDien(e.target.value) }} />
                                <input type="text" className='styleInput' defaultValue={item.dienvien} onChange={(e) => { setDienVien(e.target.value) }} />
                                <input type="number" className='styleInput' defaultValue={item.tap} onChange={(e) => { setTap(e.target.value) }} />
                                <input type="number" className='styleInput' defaultValue={item.rating} onChange={(e) => { setRating(e.target.value) }} />
                            </div>
                            <div className="form2">
                                <textarea defaultValue={item.mota} onChange={(e) => { setMoTa(e.target.value) }} />
                                <select onChange={takeMaLoai}>
                                    {data && data.map((item, id) => {
                                        return (
                                            maloai === item.maloai ? <option key={id} value={item.maloai} selected> {item.tenloai} </option> : <option key={id} value={item.maloai}> {item.tenloai} </option>
                                        );
                                    })}
                                </select>
                                <br /><br /><br />
                                <br /><br /><br />
                                <div className="inputFile">
                                    <label for="imgUpload_1" class="custom-file-2">
                                        <i class="fas fa-cloud-upload-alt"></i>
                                    </label>
                                    <span id="filesel_2"> {!poster.name ? poster : poster.name}  </span>
                                    <input type="file" id="imgUpload_1" onChange={(e) => { setPoster(e.target.files[0]) }} />
                                </div>
                                <br /><br /><br />
                                <br /><br /><br />
                                <div className="inputFile">
                                    <label for="imgUpload_2" class="custom-file-2">
                                        <i class="fas fa-cloud-upload-alt"></i>
                                    </label>
                                    <span id="filesel_2"> {!video.name ? video : video.name} </span>
                                    <input type="file" id="imgUpload_2" onChange={(e) => { setVideo(e.target.files[0]) }} />
                                </div>

                                <div className="submitStyle">
                                    <button>CẬP NHẬT</button>
                                </div>
                            </div>
                        </>);
                    })}


                </form>
            </div>
        </div>
    )
}
