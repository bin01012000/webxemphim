import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar/index";
import Search from '../components/Search/index';
import Slide from '../components/Slide/index';
import Listfilmshow from '../components/Listfilmshow/index';
import Contact from '../components/Contact/index';
import Footer from '../components/Footer/index';
import './Home.scss'
import axios from 'axios';

function Home(props) {

    const [data, setData] = useState([]);
    const [dataslide,setDataSlide]= useState([]);

    useEffect(() => {
        getAllCate();
        getRandFilm();
    }, [])

    const getAllCate = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/allcategory`); //Tất cả danh mục
        if (res.status === 200) {
            console.log(res.data);
            setData(res.data);
        }
    }

    const getRandFilm = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/randfilm`); //Random
        if (res.status === 200) {
            console.log(res.data);
            setDataSlide(res.data);            
        }
    };


    return (
        <div className='square'>
            <div className='leftHome'>&nbsp;</div>
            <div className='centerHome'>
                <Navbar data={data}></Navbar>
                <Search data={data}></Search>
                <Slide numberShow={3} padding='10px' data={dataslide}></Slide>
                {data && data.map((item, id) => {
                    return (
                        <div  key={id}>
                            <Listfilmshow id={item.maloai} txt={item.tenloai}></Listfilmshow>
                        </div>
                    );
                })}
                <Contact></Contact>
                <Footer data={data}></Footer>
            </div>
            <div className='rightHome'>&nbsp;</div>
        </div>
    );
}

export default Home;