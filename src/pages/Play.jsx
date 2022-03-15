import React from 'react';
import Navbar from "../components/Navbar/index";
import Search from '../components/Search/index';
import Slide from '../components/Slide/index';
import Contact from '../components/Contact/index';
import Footer from '../components/Footer/index';
import PlayFilm from '../components/PlayFilm';
import WannaSee from '../components/WannaSee';

function Play() {
    return (
        <div className='square'>
            <div className='leftHome'>&nbsp;</div>
            <div className='centerHome'>
                <Navbar></Navbar>
                <Search></Search>
                <PlayFilm></PlayFilm>                
                <WannaSee></WannaSee>
                <Slide numberShow={3}></Slide>
                <Contact></Contact>
                <Footer></Footer>
            </div>
            <div className='rightHome'>&nbsp;</div>
        </div>
    );
}

export default Play;