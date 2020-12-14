import { useState } from 'react';
import './App.css';
import Api from "./utils/API";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import listings from './components/listings';
import FavoritesContext from './context/FavoritesContext';
import Login from "./components/Login"

// import Log from "../src/components/login-sign";



function App() {
  const [favorites, setFavorites] = useState([]);

  const saveFavorite = async (hotel) => {
    const { id, name, address, ratePlan, thumbnailUrl } = hotel;
    setFavorites([...favorites, id]);

    const newHotel = {
      name,
      address: address.streetAddress,
      city: address.locality,
      state: address.region,
      price: ratePlan.price.exactCurrent,
      image: thumbnailUrl
    }

    Api.saveHotels(newHotel).then(results => {
        console.log(results);
    });

  }

  return (
    <FavoritesContext.Provider value={ { favorites, saveFavorite } }>
      <Router>
        {/* <Log /> */ }
        <Navbar />
        <Switch>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/" component={ Home } />
          <Route path="/listings/:id" component={ listings } />
          {/* <Route exact path="/user" component={User} /> */ }
        </Switch>
        <Footer />
      </Router>
    </FavoritesContext.Provider>
  );
}

export default App;
