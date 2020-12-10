import React, { useEffect, useState } from "react";
import axios from 'axios';
import './home.css';
import Pic1 from "../images/Hotel1.jpg";
// import Card from '../components/grid';
import Head from "../components/head";
import Listings from '../components/listings';
import GoogleApiWrapper from '../components/googleMaps';
import Api from  "../utils/API";

function Home() {

    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [adults, setAdults] = useState(1);
    const [listingsData, setListingsData] = useState();
    const [cityId, setCityId] = useState("");

    // const [kids, setKids] = useState(0);

    // console.log('API KEY', process.env.REACT_APP_API_KEY);

    async function refreshData(e) {
        e.preventDefault();
        const data = await Api.listings(cityId, checkIn, checkOut, adults);
        setListingsData(data);
    };

    // EXAMPLE OF CLIENT (react) TALKING TO SERVER (node/express)
    useEffect(() => {
        // axios.get('/api/user/example').then((response) => {
        //     console.log("RESPONSE FROM SERVER", response.data);
        // });

        // If you have a default:
        //refreshData();
    }, []);

    return (
        <>
            <img className="w3-image"  src={Pic1} alt="Apartments" style={{ 'min-width' : '1000px' }} width="1600" height="1000"/>
            <Head {...{checkIn,setCheckIn,checkOut,setCheckOut,adults,setAdults,refreshData}} />
            {/* <Card /> */}
            <Listings {...{checkIn,checkOut,adults,listingsData}} />
            {/* <GoogleApiWrapper /> */}
        </>
    )
}

export default Home;