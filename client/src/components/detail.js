import React, { useState, useEffect, useContext } from "react";
import FavoritesContext from '../context/FavoritesContext';
import Api from "../utils/API";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import '../components/listings.css';
import Grid from '@material-ui/core/Grid';


function Details({ details, setDetails }) {
    const { favorites, saveFavorite } = useContext(FavoritesContext);

    console.log('FAVORITES', favorites);

    const [additionalDetails, setAdditionalDetails] = useState();
    const { id } = details;
    // let dataDet = [];
    // if(listingsData && listingsData.status === 200) {
    //     getDetails = listingsData.data.body;
    // }

    useEffect(() => {
        const getDetails = async () => {
            const detailsGet = await Api.getDetails(id);
            console.log('DETAILS FROM DETAIL ENDPOINT', detailsGet);
            if (detailsGet && detailsGet.data && detailsGet.data.data && detailsGet.data.data.body) {
                setAdditionalDetails(detailsGet.data.data.body);
            }
        }
        getDetails();
    }, [id]);

    return (
            
                        <>
                        <Grid className="Grid1" item xs={ 12 } sm={ 5 } md={ 4 } lg={ 3 }>
                            <Card key={ details.id } className="card1">
                                <CardActionArea>
                                    <CardMedia
                                        className="cardMedia"
                                        image={ details.thumbnailUrl } style={ { height: "200px" } }
                                        title={ details.name } />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            { details.name }
                                            </Typography>
                                                {additionalDetails && <Typography variant="body2" color="textSecondary" component="p">
                                                Additional details:
                                                {/* {additionalDetails.amenities} */}
                                                {/* {additionalDetails.propertyDescription.address.fullAddress.map(() => ( */}
                                                <div>
                                                    <h5>Address:{" " + additionalDetails.propertyDescription.address.fullAddress} </h5>
                                                    <p>Price starting from: {" " + additionalDetails.propertyDescription.featuredPrice.currentPrice.formatted}/night</p>
                                                    {/* <p>Price:  {" " + additionalDetails.amenities.}</p> */}
                                                </div>
                                    {/* // ) )} */}
                            </Typography>}
                                        

                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    {
                                        favorites.includes(id)
                                            ? <FavoriteIcon />
                                            : <IconButton 
                                                    aria-label="add to favorites" 
                                                    onClick={() => saveFavorite(details)}
                                                >
                                                    <FavoriteIcon />
                                                    Save as your favorite
                                                </IconButton>
                                    }
                                    
                                </CardActions>
                            </Card>
                            <button onClick={ () => setDetails(null) }>&lt; Back to listings</button>
                        </Grid>

                        <div>

                        </div>

                    </>
    )
}

export default Details;