import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import SettingsNavbar from "./navbar.jsx";
import ChangeUsernamePage from "./CHANGE_USERNAME/index.jsx";
import ChangePasswordPage from "./CHANGE_PASSWORD/index.jsx";
import LandingPage from "./landing.jsx";

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const UserSettingsPage = () => {
  return (
    <StyledDiv>
      <SettingsNavbar />
      <Route exact path="/dashboard" component={LandingPage} />
      <Route path="/dashboard/change-username" component={ChangeUsernamePage} />
      <Route path="/dashboard/change-password" component={ChangePasswordPage} />
    </StyledDiv>
  );
};

export default UserSettingsPage;
