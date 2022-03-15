import React from 'react';
import Navbar from "../components/Navbar/index";
import Search from '../components/Search/index';
import Contact from '../components/Contact/index';
import Footer from '../components/Footer/index';
import AllFilm from '../components/AllFilm';



function ViewAll() {

    return (
        <div className='square'>
            <div className='leftHome'>&nbsp;</div>
            <div className='centerHome'>
                <Navbar></Navbar>
                <Search></Search>
                <AllFilm></AllFilm>
                <Contact></Contact>
                <Footer></Footer>
            </div>
            <div className='rightHome'>&nbsp;</div>
        </div>
    );
}

export default ViewAll;