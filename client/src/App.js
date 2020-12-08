import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import listings from './components/listings';
// import Log from "../src/components/login-sign";



function App() {
  return (
    <Router>
      {/* <Log /> */}
      <Navbar/>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/listings/:id" component={listings} />
          {/* <Route exact path="/user" component={User} /> */}
        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
