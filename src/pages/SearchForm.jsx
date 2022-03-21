import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar/index";
import Search from '../components/Search/index';
import Contact from '../components/Contact/index';
import Footer from '../components/Footer/index';
import Results from '../components/Results';
import axios from 'axios';

function SearchForm() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllCate();
  }, []) //Thực hiện 1 lần duy nhất

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
        <Results></Results>
        <Contact></Contact>
        <Footer data={data}></Footer>
      </div>
      <div className='rightHome'>&nbsp;</div>
    </div>
  );
}

export default SearchForm;