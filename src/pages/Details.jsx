import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar/index";
import Search from '../components/Search/index';
import Slide from '../components/Slide/index';
import Contact from '../components/Contact/index';
import Footer from '../components/Footer/index';
import Reviewfilm from '../components/Reviewfilm';
import WannaSee from '../components/WannaSee';
import axios from 'axios';

function Details() {
    const [data, setData] = useState([]);
    const [dataslide,setDataSlide]= useState([]);
    useEffect(() => {
        getAllCate();
        getRandFilm();
    }, [])

    const getAllCate = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/allcategory`);
        if (res.status === 200) {
            console.log(res.data);
            setData(res.data);
        }
    }
    const getRandFilm = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/randfilm`);
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
                <Reviewfilm></Reviewfilm>
                <WannaSee></WannaSee>
                <Slide numberShow={3} data={dataslide}></Slide>
                <Contact></Contact>
                <Footer data={data}></Footer>
            </div>
            <div className='rightHome'>&nbsp;</div>
        </div>
    );
}

export default Details;