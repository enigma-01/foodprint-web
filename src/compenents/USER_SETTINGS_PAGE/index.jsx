import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
`;

const UserSettingsPage = () => {
  return (
    <StyledDiv>
      <NavLink to="/change-username">Change Username</NavLink>
      <NavLink to="/change-password">Change Password</NavLink>
    </StyledDiv>
  );
};

export default UserSettingsPage;
