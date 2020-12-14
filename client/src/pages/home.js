import React, { useEffect, useState } from "react";
import axios from 'axios';
import './home.css';
import Pic1 from "../images/Hotel1.jpg";
import Head from "../components/head";
import Listings from '../components/listings';
import Api from  "../utils/API";
import Cards from "../components/card";

function Home() {
 
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [adults, setAdults] = useState(1);
    const [listingsData, setListingsData] = useState([]);
    const [city, setCity] = useState("");
    const [cityId, setCityId] = useState("");



    async function refreshData(e) {
        e.preventDefault();
        const location = await Api.cityId(city);
        const destinationId = location.data.suggestions[0].entities[0].destinationId
        console.log('DESTINATION:', destinationId);
        const data = await Api.listings(destinationId, checkIn, checkOut, adults);
        setListingsData(data);
        const inputs = {id: new Date().getTime().toString(), checkIn, checkOut, adults, city}
            console.log (inputs)
        
    };
    
    // async function DetailsPage () {
    //     const detailsGet = await Api.getDetails(cityId, checkIn, checkOut, adults)
    //     console.log(detailsGet)
    // }


    return (
        <>
            <img className="w3-image"  src={Pic1} alt="Apartments" style={{ 'min-width' : '1000px' }} width="3000" height="1000"/>
            <Head {...{checkIn,setCheckIn,checkOut,setCheckOut,adults,setAdults,city,setCity,refreshData}} />
            <Listings {...{checkIn,checkOut,adults,listingsData}} />
            <Cards {...{checkIn,checkOut,adults,listingsData}}/>
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