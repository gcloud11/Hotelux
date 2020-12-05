import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";


function App() {
  return (
    <Router>
      {/* <Login /> */}
      <Navbar/>
      <Home/>
      {/* <Route exact path="/" component={Home}/> */}
      <Footer/>
    </Router>
  );
}

export default App;
