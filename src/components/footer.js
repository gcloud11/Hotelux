import React from "react";

function Footer() {
    return (
    <>
        <footer className="w3-padding-32 w3-black w3-center w3-margin-top">
            <h5>Find Us On</h5>
        <div className="w3-xlarge w3-padding-16">
            <i className="fab fa-facebook w3-hover-opacity"></i>
            <i className="fab fa-instagram w3-hover-opacity"></i>
            <i className="fab fa-snapchat w3-hover-opacity"></i>
            <i className="fab fa-pinterest-p w3-hover-opacity"></i>
            <i className="fab fa-twitter w3-hover-opacity"></i>
            <i className="fab fa-linkedin w3-hover-opacity"></i>
        </div>
        <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" className="w3-hover-text-green">w3.css</a></p>
        </footer>
    </>
    )
}

export default Footer;