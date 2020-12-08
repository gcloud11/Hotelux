import React, { useEffect } from "react";
import axios from 'axios';
import './home.css';
import Pic1 from "../images/Hotel1.jpg";
import Card from '../components/grid';
import Head from "../components/head";
import Listings from '../components/listings';
import GoogleApiWrapper from '../components/googleMaps';
import Api from  "../utils/API";



function Home() {

    console.log('API KEY', process.env.REACT_APP_API_KEY);

    // EXAMPLE OF CLIENT (react) TALKING TO SERVER (node/express)
    useEffect(() => {
        // Api.listings()
        // console.log(Api.listings())
        axios.get('/api/user/example').then((response) => {
            console.log("RESPONSE FROM SERVER", response.data);
        });
    }, []);

    return (
        <>
            <img className="w3-image"  src={Pic1} alt="Apartments" style={{ 'min-width' : '1000px' }} width="1600" height="1000"/>
            <Head />
            <Card />
            <Listings />
            {/* <GoogleApiWrapper /> */}
        </>
    )
}

export default Home;