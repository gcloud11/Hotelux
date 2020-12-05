import React from "react";
import '../pages/home.css';
import Pic1 from "../images/Apt.jpg";
import Card from '../components/grid';
import Head from "../components/head";
import Listings from '../components/listings';
import GoogleApiWrapper from '../components/googleMaps';


function Home() {

    return (
        <>
            <img className="w3-image"  src={Pic1} alt="Apartments" style={{ 'min-width' : '1000px' }} width="1200" height="2000"/>
            <Head />
            <Card />
            <Listings />
            <GoogleApiWrapper />
        </>
    )
}

export default Home;