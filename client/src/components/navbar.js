import React from "react";
import '../components/navbar.css';
// import logo from '../images/Logo.png';

function Navbar() {
    return (
        <>
 
            <div className="w3-bar w3-white w3-large main-nav">
                <a href="#" className="w3-bar-item w3-button w3-pink w3-mobile"><i className="fa fa-bed w3-margin-right"></i>Logo</a>
                <a href="#rooms" className="w3-bar-item w3-button w3-mobile">Rooms</a>
                <a href="#about" className="w3-bar-item w3-button w3-mobile">About</a>
                <a href="#contact" className="w3-bar-item w3-button w3-mobile">Contact</a>
                <a href="#contact" className="w3-bar-item w3-button w3-right w3-light-grey w3-mobile">Book Now</a>
            </div>
        
        </>
    )
}

export default Navbar;