
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route} from 'react-router-dom'


const Listings = () => {
    const [photos, setPhotos] = useState([]);

    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/photos').then ( res => {
            const photos = res.data;
            console.log(photos)
            setPhotos(photos);
        } );
    }, [] );

    return (
        <div>
            <h2>Hi!</h2>
            <ul>
                {photos.map(photo => (

                <li>
                     <img src={photo.url} alt={photo.title} />
                </li>

                ))}
            </ul>
        </div>
    )
}



export default Listings;