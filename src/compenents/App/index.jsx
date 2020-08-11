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

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AppContext } from "../../libs/contextLib.js";

const GUEST_USER = { __guest: true, displayName: null };

const App = () => {
  const [user, setUser] = useState(GUEST_USER);
  const [userAvatar, setUserAvatar] = useState(null);

  const logInFunc = (name, pictures, locations, favourites) => {
    setUser({
      __guest: false,
      displayName: name,
      pictures: pictures,
      locations: locations,
      favourites: favourites,
    });
  };

  const logOutFunc = () => {
    setUser(GUEST_USER);
  };

  const loadUserAvatar = (avatar) => {
    setUserAvatar(avatar);
  };

  return (
    <AppContext.Provider
      value={{ user, logInFunc, logOutFunc, userAvatar, loadUserAvatar }}
    >
      <Router basename="/">
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomeDiv} />
            <Route exact path="/about" component={AboutDiv} />
            <Route exact path="/contact" component={ContactDiv} />
            <Route path="/map"
              render={() =>
                user.__guest ? <Redirect to="/login" /> : <MapDiv />
              }
            />
            <Route exact path="/login" 
              render={() => 
                user.__guest ? <LoginDiv /> : <Redirect to="/dashboard"/>
              }
            />
            <Route exact path="/sign-up" 
              render={() => 
                user.__guest ? <FormDiv /> : <Redirect to="/dashboard"/>
              }
            />
            <Route exact path="/privacy-policy" component={PrivacyPolicyDiv} />
            <Route exact path="/dashboard"
              render={() =>
                user.__guest ? <Redirect to="/login" /> : <UserDashboardDiv />
              }
            />
          </Switch>
        </div>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
