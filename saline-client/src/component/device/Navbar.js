import React from 'react';
import './Navbar.css';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import Link
// import { useNavigate} from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import { useLocation } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';



import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { ArrowLeft } from 'react-bootstrap-icons';



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const logoStyle = {
  textDecoration: "none", // Remove underline
  color: "white",
  float:'right',
  marginLeft:'7px',
  display: 'block',
  fontSize: "18px"
// Use the default text color
};

const backButtonStyle = {
  textDecoration: 'none',
  marginRight: '5px', // Adjust the spacing as needed
  fontSize: '18px',
// Adjust the font size
  fontWeight: 'bold',
  textDecoration:'none',
  color: 'white', // Adjust the color
};



const Navbar = () => {
  // const location = useLocation
  const { pathname } = useLocation();
  


// const Navbar = () => {
  return (
    <nav className="navbar">
        {/* <Link to="/Device" className='logo' style={logoStyle}>SALINE</Link> */}
        <ul className="navbar-list">
        <li className='navbar-item'>
        <Link to='/device'>
        {pathname.includes('/status') && (
                <div>
                   {/* <ImArrowLeft style={{color:"white",width:"5vh",height:"2.5vh"}}/> */}
                <i class="fa fa-arrow-left fa-lg" aria-hidden="true" style={{color:"white",marginLeft:"2.5rem"}}></i>
                {/* <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'white', marginLeft: '2.5rem' }} /> */}
                </div>
              )}
            </Link>
          <Link to="/device"></Link>
          </li>
        <li className="navbar-item">
          <Link to="/Device" className="logo" style={logoStyle}>
            SALINE
          </Link>
        </li>
        </ul>
      
      
      <ul className="navbar-list">
      <ListItemAvatar>
       <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp"  />
      </StyledBadge>
      </ListItemAvatar>
        <li className="navbar-item"><a href="/add-device">ADD DEVICE</a></li>
        <li className="navbar-item"><a href="/about">ABOUT</a></li>
        {/* <li className="navbar-item"><a href="/logout">LOGOUT</a></li> */}
        {/* <Button onClick={logoutUser}  style={{ textDecoration: "none" }} variant="Text" >
                <LogoutIcon />LOGOUT
              </Button> */}
        <li className="navbar-item">
          <Link to="/logout" style={{ textDecoration: 'none' }}>
            <LogoutIcon />LOGOUT
          </Link>
        </li>
      </ul>
    </nav>

  );
}

export default Navbar;


