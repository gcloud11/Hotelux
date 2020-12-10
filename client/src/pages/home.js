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
    const [listingsData, setListingsData] = useState([]);
    const [cityId, setCityId] = useState("");
  
    async function cityName () {
        //make a function to call from a button click instead of in here into an onclick so they dont render once the page loads and only render on a click
        const location = await Api.cityId();
        const cityID = location.data.suggestions[0].entities[0].desitnationId
        setCityId(location)
        console.log(location)
        
        // console.log(data.data.data.body.amenities[0].heading)
    }
    cityName();
    

    async function refreshData(e) {
        e.preventDefault();
        const data = await Api.listings(cityId, checkIn, checkOut, adults);
        setListingsData(data);
    };


    async function listingsAll () {

        const data = await Api.listings();
        setListingsData(data)
        console.log(data)
    }



    return (
        <>
            <img className="w3-image"  src={Pic1} alt="Apartments" style={{ 'min-width' : '1000px' }} width="1600" height="1000"/>
            <Head {...{checkIn,setCheckIn,checkOut,setCheckOut,adults,setAdults,refreshData}} />
            {/* <Card /> */}
            <Listings {...{checkIn,checkOut,adults,listingsData}} />
            {/* <GoogleApiWrapper /> */}
        </>
    )



    // EXAMPLE OF CLIENT (react) TALKING TO SERVER (node/express)
    // useEffect(() => {
        // axios.get('/api/user/example').then((response) => {
        //     console.log("RESPONSE FROM SERVER", response.data);
        // });

        // If you have a default:
        //refreshData();
    // }, []);

}

export default Home;