/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../components/navbar.css';
import Image3 from "../images/Hotel3.png";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleFavorites = () => {
    window.location.replace("/favorites")
  }

  return (
    <div className="nav">
      <Button className="btn" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <img className="w3-image"  src={Image3} alt="Apartments" style={{ 'min-width' : '5px' }} width="20%" height="10px"/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleFavorites}>My Favorites</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}




// function Navbar() {
//     return (
//         <>
 
//             <div className="w3-bar w3-white w3-large main-nav nav-1">
//                 <a href="#" className="w3-bar-item w3-button w3-black w3-mobile">
//                 <img className="w3-image"  src={Image3} alt="Apartments" style={{ 'min-width' : '5px' }} width="120px" height="10px"/>
//                 </a>
//                 <a href="#rooms" className="w3-bar-item w3-button w3-mobile rooms">Rooms</a>
//                 <a href="#about" className="w3-bar-item w3-button w3-mobile about">About</a>
//                 <a href="#contact" className="w3-bar-item w3-button w3-mobile contact">Contact</a>
//                 <a href="#contact" className="w3-bar-item w3-button w3-right w3-light-grey w3-mobile logout">LogOut</a>
//             </div>
        
//         </>
//     )
// }

// export default Navbar;