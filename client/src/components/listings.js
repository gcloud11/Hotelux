
import React, { useState, useEffect } from "react"; 
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Maps from '../components/googleMaps';
import LoginSignup from "../components/LogSign/loginSign";
import Api from "../utils/API";


const Listings = () => {
    const [listings, setListings] = useState([]);
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        async function getData () {
            const data = await Api.listings();
            setListings(data)
            console.log(data)
        }
        getData();
    }, []);

    // const LoginSignup = (photo) => {
    //     console.log(photo);
    //     alert('info')
    // };

    return (
        <div>
            <h2>Hi!</h2>

            <div>
                <Link to="/insert/your/path/here" className="btn btn-primary">hello</Link>
            </div>


            <ul>
                { photos.map(photo => (
                    <li>
                        {console.log('photo', photo) }
                        <img src={ photo.url } alt={ photo.title } />
                        <Link to={ `/detail/${photo.id}` } className="btn btn-primary">Find out more!</Link>
                        {/* <button onClick={moreInfo}> 
                        I am a button
                        </button> */}
                    </li>
                )) }

            </ul>

        </div>
    )
}



export default Listings;