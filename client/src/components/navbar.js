import React from "react";
import './navbar.css';
import logo from '../images/Logo.png';

function Navbar() {
    return (
        <>
        <header>
            <div className="w3-bar w3-black w3-large main-nav">
                <a href="#" className="w3-bar-item w3-button w3-black w3-mobile"> <img className="logo" src={logo} /> 
                </a>
                </div>
            
        </header>
        </>
    )
}

export default Navbar;