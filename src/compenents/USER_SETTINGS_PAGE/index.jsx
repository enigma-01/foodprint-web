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
      <ul>
        <li>
          <NavLink to="/change-username">Change Username</NavLink>
        </li>
        <li>
          <NavLink to="/change-password">Change Password</NavLink>
        </li>
      </ul>
    </StyledDiv>
  );
};

export default UserSettingsPage;
