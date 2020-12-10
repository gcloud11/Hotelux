
import React, { useState, useEffect } from "react"; 
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import Maps from '../components/googleMaps';
import LoginSignup from "../components/LogSign/loginSign";
import Api from "../utils/API";


const Listings = ({ listingsData }) => {
    const [listings, setListings] = useState([]);
    const [cities, setCity] = useState([]);


    useEffect(() => {
        async function getData () {
            //make a function to call from a button click instead of in here into an onclick so they dont render once the page loads and only render on a click
            const location = await Api.cityId({});
            const cityID = location.data.suggestions[0].entities[0].desitnationId
            setCity(location)
            console.log(location)
            
            const data = await Api.listings({});
            setListings(data)
            console.log(data)

            // console.log(data.data.data.body.amenities[0].heading)
        }
        getData();
            //chain raction of events, starting with city ID

    }, []);



    // const LoginSignup = (photo) => {
    //     console.log(photo);
    //     alert('info')
    // };

    console.log("LISTINGS: ", listingsData);

    return (
        <div>
            <h2>Hi!</h2>
            <div>
                <Link to="/insert/your/path/here" className="btn btn-primary">hello</Link>
            </div>

            <ul>


                {/* { listings.map(listing => (
                    <li>
                        <img src={ listing.url } alt={ listing.title } />
                        <Link to={ `/listings/${photo.id}` } className="btn btn-primary">Find out more!</Link>
                        <button onClick={moreInfo}> 
                        I am a button
                        </button>
                    </li>
                )) } */}

            </ul>

        </div>
    )
}



export default Listings;