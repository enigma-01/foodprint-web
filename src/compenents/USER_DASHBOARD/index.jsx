import React from "react";
import styled from "styled-components";
import UserOverviewDiv from "./OVERVIEW/index.jsx";
import { Route } from "react-router-dom";
import SettingsNavbar from "./navbar.jsx";

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
`;

const UserDashboardDiv = () => {
  return (
    <StyledDiv>
      <SettingsNavbar/>
      <UserOverviewDiv/>
    </StyledDiv>
    
  );
};

export default UserDashboardDiv;
