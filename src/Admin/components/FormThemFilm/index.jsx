import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./FormThemFilm.scss"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FormThemFilm() {
    toast.configure();
    const [data, setData] = useState([]);    

    const [maphim, setMaPhim] = useState('');
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

    useEffect(() => {
        getAllCategory();
    }, []);

    const getAllCategory = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/allcategory`);
        if (res.status === 200) {
            console.log(res.data);
            setData(res.data);
        }
    };

    const takeMaLoai = (e) => {
        setMaLoai(e.target.value);
    }


    const uploadFile = async () => {
        const r = await axios.get(`${process.env.REACT_APP_API_URL}/existfilm?maphim=${maphim}`)
        if (r.data.length === 0) {
            const d = new FormData();
            d.append('file', poster);
            d.append('file', video);
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/upload?maphim=${maphim}&tenphim=${tenphim}&thoiluong=${thoiluong}&daodien=${daodien}&dienvien=${dienvien}&tap=${tap}&mota=${mota}&poster=${poster}&rating=${rating}&video=${video}&maloai=${maloai}`, d);
            if (res.status === 200) {
                toast.success(' Thêm thành công ', { position: toast.POSITION.TOP_CENTER });
                setTimeout(() => {
                    window.location.href = '/listfilmadmin';
                }, 1000)
            }
        }
        else {
            toast.error(' Mã phim đã tồn tại ', { position: toast.POSITION.TOP_CENTER });
        }
    }


    const handleSubmit = (e) => {

        e.preventDefault();

        if (maphim && tenphim && poster && video) {
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
                    <div className="form1">
                        <input type="text" className='styleInput' placeholder="mã phim" onChange={(e) => { setMaPhim(e.target.value) }} />
                        <input type="text" className='styleInput' placeholder="tên phim" onChange={(e) => { setTenPhim(e.target.value) }} />
                        <input type="number" className='styleInput' placeholder="thời lượng" onChange={(e) => { setThoiLuong(e.target.value) }} />
                        <input type="text" className='styleInput' placeholder="đạo diễn" onChange={(e) => { setDaoDien(e.target.value) }} />
                        <input type="text" className='styleInput' placeholder="diễn viên" onChange={(e) => { setDienVien(e.target.value) }} />
                        <input type="number" className='styleInput' placeholder="tập" onChange={(e) => { setTap(e.target.value) }} />
                        <input type="number" className='styleInput' placeholder="rating" onChange={(e) => { setRating(e.target.value) }} />
                    </div>
                    <div className="form2">
                        <textarea placeholder="mô tả" onChange={(e) => { setMoTa(e.target.value) }} />
                        <select onChange={takeMaLoai}>
                            {data && data.map((item, id) => {
                                return (
                                    <option key={id} value={item.maloai}> {item.tenloai} </option>
                                );
                            })}
                        </select>
                        <br /><br /><br />
                        <br /><br /><br />
                        <div className="inputFile">
                            <label for="imgUpload_1" class="custom-file-2">
                                <i class="fas fa-cloud-upload-alt"></i>
                            </label>
                            <span id="filesel_2"> {!poster ? 'Choose a image...' : poster.name}  </span>
                            <input type="file" id="imgUpload_1" onChange={(e) => { setPoster(e.target.files[0]) }} />
                        </div>
                        <br /><br /><br />
                        <br /><br /><br />
                        <div className="inputFile">
                            <label for="imgUpload_2" class="custom-file-2">
                                <i class="fas fa-cloud-upload-alt"></i>
                            </label>
                            <span id="filesel_2"> {!video ? 'Choose a video...' : video.name} </span>
                            <input type="file" id="imgUpload_2" onChange={(e) => { setVideo(e.target.files[0]) }} />
                        </div>

                        <div className="submitStyle">
                            <button>THÊM</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
