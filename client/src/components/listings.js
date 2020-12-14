
import React, { useState, useEffect, useContext } from "react";
import FavoritesContext from '../context/FavoritesContext';
// import Maps from '../components/googleMaps';
import LoginSignup from "../components/LogSign/loginSign";
import Api from "../utils/API";
import '../components/listings.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import Details from '../components/detail';



const Listings = ({ listingsData, additionalDetails }) => {
    const { favorites, saveFavorite } = useContext(FavoritesContext);
    console.log('listings', listingsData);
    const [detail, setDetail] = useState(null);
    // const [hotel, setHotel] = useState({})   
    console.log(listingsData, "listing")
    // const handleSave = hotel => {
    //     const newHotels = {}
    //     newHotels.name = hotel.name
    //     newHotels.address = hotel.address.streetAddress
    //     newHotels.city = hotel.address.locality
    //     newHotels.state = hotel.address.region
    //     newHotels.price = hotel.ratePlan.price.exactCurrent
    //     newHotels.image = hotel.thumbnailUrl
    //     Api.saveHotels(newHotels).then(results => {
    //         console.log(results)
    //     })
    // }

    let listings = [];
    if (listingsData && listingsData.status === 200) {
        listings = listingsData.data.data.body.searchResults.results;
    }

    return (
        <div>

            { detail ? (

                <Details details={ detail } setDetails={ setDetail } />

            ) : (
                <Grid 
                    className="Grid1" container spacing={3} >
                    {listings.map((listing) => (
                            <Grid 
                            className="Grid1" item xs={ 12 } sm={ 4 } md={ 4 } lg={ 3 }>
                            <div key={ listing.id }>
                                <Card key={ listing.id } className="card1" style={{position: 'relative'}}>
                                    <CardActionArea >
                                        <CardMedia
                                            className="cardMedia"
                                            image={ listing.thumbnailUrl } style={ { height: "200px" } }
                                            title={ listing.name } />
                                        <CardContent >
                                            <Typography gutterBottom variant="h5" component="h2">
                                                { listing.name }
                                            </Typography>
                                            <p> Near: {" " + listing.neighbourhood}</p>
                                            <Typography variant="body2" color="textSecondary" component="p"></Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions className="cardActions" style={{position: 'absolute', bottom: "40px"}}>
                                        {
                                        favorites.includes(listing.id)
                                            ? <FavoriteIcon  paddingRight={10}/>

                                            : <IconButton
                                                paddingRight={10}
                                                aria-label="add to favorites"
                                                onClick={ () => saveFavorite(listing) }>
                                            <FavoriteIcon />
                                            </IconButton>
                                        }
                                        <button className="w3-button w3-dark-grey fav-button" onClick={ () => setDetail(listing) }> More Details</button>
                                    </CardActions>
                                </Card>
                            </div>
                        </Grid>
                    )) }
                </Grid>

            ) }
        </div>
    )
}



export default Listings;








