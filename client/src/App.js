import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Detail from './pages/detail';



function App() {
  return (
    <Router>
      {/* <Login /> */}
      <Navbar/>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={Detail} />
          {/* <Route exact path="/user" component={User} /> */}
        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
