import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/user" component={User} /> */}
        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
