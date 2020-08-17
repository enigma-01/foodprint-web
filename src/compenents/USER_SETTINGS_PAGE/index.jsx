import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SettingsNavbar from "./navbar.jsx";


const StyledDiv = styled.div`
  display: flex;
`;

const UserSettingsPage = () => {
  return (
    <StyledDiv>
      <SettingsNavbar/>
      
    </StyledDiv>
  );
};

export default UserSettingsPage;
