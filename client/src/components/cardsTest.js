import React, {Component} from 'react';
import Listing from '../components/listings';

class Cards extends Component {

    render() {
        return (
            <div className="container-fluid d flex justify-content">
                <div className="row">
                    <div className="col-md-3"><Listing /></div>
                    <div className="col-md-3"><Listing /></div>
                    <div className="col-md-3"><Listing /></div>
                    <div className="col-md-3"><Listing /></div>
                </div>
            </div>
        )
    }


}

export default Cards;