import React, { useState } from "react";
import NavBar from "../Navbar/index";
import HomeDiv from "../HOME_PAGE/HomeDiv/index.jsx";
import AboutDiv from "../ABOUT_PAGE/AboutDiv/index.jsx";
import MapDiv from "../MAP_PAGE/MapDiv/index.jsx";
import LoginDiv from "../LOGIN_PAGE/LoginForm/index.jsx";
import FormDiv from "../Form/index";
import ContactDiv from "../CONTACT_PAGE/index.jsx";
import PrivacyPolicyDiv from "../PRIVACY_POLICY_PAGE/index.jsx";
import TermsOfServiceDiv from "../TERMS_OF_SERVICE_PAGE/index.jsx";
import UserDashboardDiv from "../USER_DASHBOARD/index.jsx";
import LoginLoadingPage from "../LOGIN_PAGE/LoadingPage/index.jsx";

import "./index.css";

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AppContext } from "../../libs/contextLib.js";

const GUEST_USER = {
  __guest: true,
  displayName: null,
  pictures: 0,
  locations: 0,
  favourites: 0,
  foodprint: null,
  placeData: [],
};

const App = () => {
  const [user, setUser] = useState(GUEST_USER);
  const [userAvatar, setUserAvatar] = useState(null);
  const [placeData, setPlaceData] = useState([]);

  const logInFunc = (
    guestState,
    name,
    pictures,
    locations,
    favourites,
    foodprintData
  ) => {
    setUser({
      __guest: guestState,
      displayName: name,
      pictures: pictures,
      locations: locations,
      favourites: favourites,
      foodprint: foodprintData,
    });
  };

  const loadAllPlaceData = (placeData) => {
    setPlaceData(placeData);
  };

  const logOutFunc = () => {
    setUser(GUEST_USER);
  };

  const loadUserAvatar = (avatar) => {
    setUserAvatar(avatar);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        placeData,
        loadAllPlaceData,
        logInFunc,
        logOutFunc,
        userAvatar,
        loadUserAvatar,
      }}
    >
      <Router basename="/">
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomeDiv} />
            <Route exact path="/about" component={AboutDiv} />
            <Route exact path="/contact" component={ContactDiv} />
            <Route
              path="/map"
              render={() =>
                user.__guest ? <Redirect to="/login" /> : <MapDiv />
              }
            />
            <Route
              exact
              path="/login"
              render={() =>
                user.__guest ? <LoginDiv /> : <Redirect to="/loading" />
              }
            />

            <Route
              exact
              path="/sign-up"
              render={() =>
                user.__guest ? <FormDiv /> : <Redirect to="/dashboard" />
              }
            />
            <Route exact path="/privacy-policy" component={PrivacyPolicyDiv} />
            <Route
              exact
              path="/terms-of-service"
              component={TermsOfServiceDiv}
            />
            <Route
              exact
              path="/loading"
              render={() =>
                placeData.length ? (
                  <Redirect to="/dashboard" />
                ) : (
                  <LoginLoadingPage />
                )
              }
            />
            <Route
              path="/dashboard"
              component={UserDashboardDiv} // REVERT LATER
              // render={() =>
              //   user.__guest ? <Redirect to="/login" /> : <UserDashboardDiv />
              // }
            />
          </Switch>
        </div>
      </Router>
    </AppContext.Provider>
  );
};

export default App;

//<Route exact path ="/loading" render={() => user.loadingState ? <Redirect to ="/dashboard"/> : <Redirect to="/login"/>}/>
