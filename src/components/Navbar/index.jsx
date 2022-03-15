import React, { useEffect, useState } from 'react';
import './Navbar.scss'
import logo from '../../assets/images/movie.png'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Avatar from 'react-avatar';
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";


const Navbar = (props) => {

  const [data, setData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const logout = () => {
    localStorage.removeItem('User');
    window.location.href = '/';
  }


  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

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


  return (
    <div className='containernavbar'>
      <div className='leftnavbar'>
        <div className='logo'>
          <NavLink to="/"><img src={logo} alt="" className='imgLogo' /></NavLink>
        </div>
      </div>
      <div className='centernavbar'>
        <NavLink to="/" className='content' activeclassname='active'> Trang chủ </NavLink>
        {data && data.map((item, id) => {
          return (
            <NavLink key={id} to={`/viewall/${item.maloai}`} className='content' activeclassname='active'> {item.tenloai} </NavLink>
          );
        })}
      </div>
      <div className='rightnavbar'>

        {!localStorage.getItem('User') ? <> <NavLink to="/signin" className='signin'> Đăng nhập </NavLink>
        <NavLink to="/signup" className='signin'> Đăng ký </NavLink> </>
          : <>
            <Button aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}>
              <Avatar googleId="118096717852922241760" size="40" round={true} />
            </Button>
            <Menu
              keepMounted
              anchorEl={anchorEl}
              onClose={handleClose}
              open={Boolean(anchorEl)}
            >
              <MenuItem><NavLink to="/favfilm" className='signout'> Mục yêu thích </NavLink></MenuItem>
              <MenuItem onClick={handleClose}><button className='signout' onClick={logout}> Đăng xuất </button></MenuItem>
            </Menu>
          </>
        }
      </div>

    </div>
  );
}
export default Navbar