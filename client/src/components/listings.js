
import React, { useState, useEffect } from "react"; 
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import Maps from '../components/googleMaps';
import LoginSignup from "../components/LogSign/loginSign";
import Api from "../utils/API";


const Listings = ({ listingsData }) => {
    console.log('listings', listingsData);
    const [detail, setDetail] = useState(null);

    let listings = [];
    if(listingsData && listingsData.status === 200) {
        listings = listingsData.data.data.body.searchResults.results;
    }

    return (
        <div>
            <h2>Hi!</h2>
            <div>
                <Link to="/insert/your/path/here" className="btn btn-primary">hello</Link>
            </div>
            { detail ? (
                <div>
                    <h2>{detail.name}</h2>
                    <button onClick={() => setDetail(null)}>&lt; Back to listings</button>
                </div>
            ) : (
                <ul>
                    {listings.map(listing => (
                    <li>
                        <img src={listing.thumbnailUrl} alt={listing.name} />
                        <b>{listing.name}</b>
                        <button onClick={() => setDetail(listing)}>View Detail</button>
                        {/*<Link to={ `/listings/${photo.id}` } className="btn btn-primary">Find out more!</Link>
                        <button onClick={moreInfo}> 
                        I am a button
                </button> */}
                    </li>))}
                </ul>
            )}
        </div>
    )
}



export default Listings;