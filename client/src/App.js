import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import listings from './components/listings';
import Login from './pages/login';
import fire from './config/fire';
import { Component } from 'react';

// import Log from "../src/components/login-sign";



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:{},
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render(){
    return (
      <div>


      <Router>
        {/* <Log /> */}
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/listings/:id" component={listings} />
            {/* login route */}
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/user" component={User} /> */}
          </Switch>
        <Footer/>
        {/* if user exists go to home otherwise login */}
        {this.state.user ? (<Redirect to= '/' />) : (<Redirect to= '/login' />)}
      </Router>

      </div>
    );
  }
  
}

export default App;
