import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar/index";
import Search from '../components/Search/index';
import Slide from '../components/Slide/index';
import Listfilmshow from '../components/Listfilmshow/index';
import Contact from '../components/Contact/index';
import Footer from '../components/Footer/index';
import './Home.scss'
import axios from 'axios';

function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getAllCate();
    }, [])

    const getAllCate = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/allcategory`);
        if (res.status === 200) {
            console.log(res.data);
            setData(res.data);
        }
    }

    





    return (
        <div className='square'>
            <div className='leftHome'>&nbsp;</div>
            <div className='centerHome'>
                <Navbar></Navbar>
                <Search></Search>
                <Slide numberShow={3} padding='10px'></Slide>
                {data && data.map((item, id) => {
                    return (
                        <div  key={id}>
                            <Listfilmshow id={item.maloai} txt={item.tenloai}></Listfilmshow>
                        </div>
                    );
                })}
                <Contact></Contact>
                <Footer></Footer>
            </div>
            <div className='rightHome'>&nbsp;</div>
        </div>
    );
}

export default Home;