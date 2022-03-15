import React from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import FavoFilm from '../components/FavoFIlm';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function FavFilm() {
  return (
    <div className='square'>
            <div className='leftHome'>&nbsp;</div>
            <div className='centerHome'>
                <Navbar></Navbar>
                <Search></Search>
                <FavoFilm></FavoFilm>
                <Contact></Contact>
                <Footer></Footer>
            </div>
            <div className='rightHome'>&nbsp;</div>
        </div>
  )
}
