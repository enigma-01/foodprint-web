import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import SettingsNavbar from "./navbar.jsx";
import ChangeUsernamePage from "./CHANGE_USERNAME/index.jsx";
import ChangePasswordPage from "./CHANGE_PASSWORD/index.jsx";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const UserSettingsPage = () => {
  return (
    <StyledDiv>
      <SettingsNavbar />
      <Route path="/settings/change-username" component={ChangeUsernamePage} />
      <Route path="/settings/change-password" component={ChangePasswordPage} />
      <div style={{width:"211px"}}></div>
    </StyledDiv>
  );
};

export default UserSettingsPage;
