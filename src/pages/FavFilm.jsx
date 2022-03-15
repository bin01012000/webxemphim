import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import FavoFilm from '../components/FavoFIlm';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import axios from 'axios';

export default function FavFilm() {
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
        <Navbar data={data}></Navbar>
        <Search data={data}></Search>
        <FavoFilm></FavoFilm>
        <Contact></Contact>
        <Footer data={data}></Footer>
      </div>
      <div className='rightHome'>&nbsp;</div>
    </div>
  )
}
