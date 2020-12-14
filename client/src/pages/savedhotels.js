import React, { Component } from 'react'
// import { Container } from "../components/container/container";
import Navbar from "../components/navbar";
// import Header from "../components/header/header";
import API from '../utils/API';
import SavedList from "../components/Saved/saved-list";

class savedPage extends Component {

    state = {
        savedHotels: []
    }

    componentDidMount = () => {
        this.getHotels()
    }

    // deleteGoogleBook = currentBook => {
    //     API.deleteBook( currentBook.id )
    //     .then(res => {
    //         console.log("You deleted this listing", res);
    //         this.getBooks();
    //     })
    //     .catch(err => {
    //         console.log("This is the error", err);
    //     })
    // }

    getHotels = () => {
        API.savedHotels()
        .then(res => {
            this.setState({
                savedHotels: res.data
            })
            console.log("This is the res from getHotels", res);
        })
        .catch(err => {
            console.log("This is the error", err);
        })
    }


    render() {
        return (
            <div>
                <Navbar />
                {/* <Container fluid> */}
                {/* <Header /> */}
                {this.state.savedHotels.length ? (
                    <SavedList 
                    hotelState={this.state.savedHotels}
                    >
                    </SavedList>
                ) : (
                    <h5>No results to display. </h5>
                )}
                {/* </Container> */}
            </div>
        )
    }
}

export default savedPage;
