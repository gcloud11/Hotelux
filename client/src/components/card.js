import React, {Component} from "react";
import Listings from "../components/listings";
import "../components/listings.css";


class Cards extends Component{

    render() {
        return (
            <div className="container-fluid d-flex justify-content-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Listings />
                    </div>
                    <div className="col-md-4">
                        <Listings />
                    </div>    
                    <div className="col-md-4">
                        <Listings />
                    </div>
                </div>

            </div>
        )
    }
}


export default Cards;