/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../components/navbar.css';
import Image3 from "../images/Hotel3.png";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';


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
  const handleLogout = () => {
    window.location.href="/logout"
  }

  return (
    <div className="nav">

        <img className="w3-image"  src={Image3} alt="Apartments" style={{ 'min-width' : '5px' }} width="20%" height="10px"/>
        <button className="w3-button w3-dark-grey nav-button" onClick={handleLogout}> LogOut </button>
        <FavoriteIcon className="favorite-btn"> <IconButton></IconButton> </FavoriteIcon>
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