
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Maps from '../components/googleMaps';


const Listings = () => {
    const [photos, setPhotos] = useState([]);

    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/photos').then ( res => {
            const photos = res.data;
            console.log(photos)
            setPhotos(photos);
        } );
    }, [] );

    const moreInfo = (photo) => {
        console.log(photo);
        alert('info')
    };

    return (
        <Router>
        <Route path="/" component={Maps}> 

        </Route>
            <div>
                <h2>Hi!</h2>
                <ul>
                    {photos.map(photo => (

                    <li>
                        <img src={photo.url} alt={photo.title} />
                        <button onClick={moreInfo}> 
                        I am a button
                        </button>
                    </li>
                    ))}

                </ul>
            </div>
        </Router>

    )
}



export default Listings;