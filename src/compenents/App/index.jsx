import React from "react";
import NavBar from "../Navbar/index";
import HomeDiv from "../HOME_PAGE/HomeDiv/index.jsx";
import AboutDiv from "../ABOUT_PAGE/AboutDiv/index.jsx";
import MapDiv from "../MAP_PAGE/MapDiv/index.jsx";
import LoginDiv from "../LOGIN_PAGE/LoginForm/index.jsx";
import FormDiv from "../Form/index";
import ContactDiv from "../CONTACT_PAGE/index.jsx";
import "./index.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomeDiv} />
          <Route path="/about" component={AboutDiv} />
          <Route path="/contact" component={ContactDiv} />
          <Route path="/map" component={MapDiv} />
          <Route path="/login" component={LoginDiv} />
          <Route path="/sign-up" component={FormDiv} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
