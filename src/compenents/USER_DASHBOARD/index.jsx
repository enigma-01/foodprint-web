import React from "react";
import styled from "styled-components";
import UserOverviewDiv from "./OVERVIEW/index.jsx";
import { Route } from "react-router-dom";
import SettingsNavbar from "./navbar.jsx";
import ChangeUsernamePage from "./CHANGE_USERNAME/index.jsx";
import ChangePasswordPage from "./CHANGE_PASSWORD/index.jsx";

const StyledDiv = styled.div`
  display:flex;
  justify-content:space-between;
`;

const UserDashboardDiv = () => {
  return (
    <StyledDiv>
      <SettingsNavbar/>
      <Route exact path="/dashboard" component={UserOverviewDiv} />
      <Route path="/dashboard/change-username" component={ChangeUsernamePage} />
      <Route path="/dashboard/change-password" component={ChangePasswordPage} />
      <div style={{width:"220px"}}></div>
    </StyledDiv>
  );
};

export default UserDashboardDiv;
