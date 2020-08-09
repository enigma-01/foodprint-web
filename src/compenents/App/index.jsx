import React, { useState } from "react";
import NavBar from "../Navbar/index";
import HomeDiv from "../HOME_PAGE/HomeDiv/index.jsx";
import AboutDiv from "../ABOUT_PAGE/AboutDiv/index.jsx";
import MapDiv from "../MAP_PAGE/MapDiv/index.jsx";
import LoginDiv from "../LOGIN_PAGE/LoginForm/index.jsx";
import FormDiv from "../Form/index";
import ContactDiv from "../CONTACT_PAGE/index.jsx";
import PrivacyPolicyDiv from "../PRIVACY_POLICY_PAGE/index.jsx";
import UserDashboardDiv from "../USER_DASHBOARD/index.jsx";

import "./index.css";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { AppContext } from "../../libs/contextLib.js";

const GUEST_USER = { __guest: true, displayName: null };

const App = () => {
  const [user, setUser] = useState(GUEST_USER);

  const logInFunc = (name) => {
    setUser({ __guest: false, displayName: name });
  };

  const logOutFunc = () => {
    setUser(GUEST_USER);
  };

  return (
    <AppContext.Provider value={{ user, logInFunc, logOutFunc }}>
      <Router basename="/">
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={HomeDiv} />
            <Route path="/about" component={AboutDiv} />
            <Route path="/contact" component={ContactDiv} />
            <Route path="/map" component={MapDiv} />
            <Route path="/login" component={LoginDiv} />
            <Route path="/sign-up" component={FormDiv} />
            <Route path="/privacy-policy" component={PrivacyPolicyDiv} />
            <Route path="/dashboard" component={UserDashboardDiv} />
          </Switch>
        </div>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
