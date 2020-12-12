
import React, { useState, useEffect } from "react"; 
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


  
const Listings = ({ listingsData }) => {
    console.log('listings', listingsData);
    const [detail, setDetail] = useState(null);
    const [hotel, setHotel] = useState({})   
    console.log(listingsData, "listing")
    const handleSave = hotel => {
        const newHotels = {}
        newHotels.name = hotel.name
        newHotels.address = hotel.address.streetAddress
        newHotels.city = hotel.address.locality
        newHotels.state = hotel.address.region
        newHotels.price = hotel.ratePlan.price.exactCurrent
        newHotels.image = hotel.thumbnailUrl
        Api.saveHotels(newHotels).then(results => {
            console.log(results)
        })
    }

    let listings = [];
    if(listingsData && listingsData.status === 200) {
        listings = listingsData.data.data.body.searchResults.results;
    }

    return (
        <div>
            {/* <h2>Hi!</h2> */}
            {/* <div> 
                <Link to="/insert/your/path/here" className="btn btn-primary">hello</Link> 
            </div> */}
            { detail ? (
                <div>
                    <h2>{detail.name}</h2>
                    <button onClick={() => setDetail(null)}>&lt; Back to listings</button>
                </div>
            ) : (
                <Grid className="Grid1" item xs={12} sm={5} md={4} lg={3}> 
                    {listings.map((listing) => (
                        <div key={listing.id}>
                        <Card key={listing.id} className="card1">
                             <CardActionArea>
                                 <CardMedia
                                    className="cardMedia"  
                                    image={listing.thumbnailUrl} style={{height: "200px"}}
                                    title={listing.name}/>
                                 <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {listing.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        
                                    </Typography>
                                 </CardContent>
                             </CardActionArea>
                             <CardActions>
                                 <IconButton aria-label="add to favorites" onClick={() => handleSave(listing)}>
                                    <FavoriteIcon />
                                 </IconButton>
                                 <Button size="small" color="primary" onClick={() => setDetail(listing)}>
                                    More Details
                                 </Button>
                             </CardActions>
                         </Card>
                            {/* <img src={listing.thumbnailUrl} alt={listing.name} />
                            <b>{listing.name}</b>
                            <button onClick={() => setDetail(listing)}>View Detail</button> */}
                        </div>   
                    ))}
                </Grid>

            )}

        </div>
    )
}



export default Listings;








