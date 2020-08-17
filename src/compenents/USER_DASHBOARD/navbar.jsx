import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledDiv = styled.div`
  width: wrap;
  overflow: hidden;
  z-index:3;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const StyledListItem = styled.li`
  margin-left: 0px;
  border-bottom:1px solid #f6b26b;
  width: 200px;
`;

const StyledNavLink = styled(NavLink)`
  display:block;
  width:200px;
  text-decoration: none;
  color: #f6b26b;
  background-color: #ffffff;
  padding: 20px;
  font-weight:500;

  :hover {
    background-color: #f6b26b;
    color: #ffffff;
  }
`;

const SettingsNavbar = () => {
  return (
    <StyledDiv>
      <StyledList>
        <StyledListItem>
          <StyledNavLink
            activeStyle={{ backgroundColor: "#f6b26b", color: "#FFFFFF" }}
            exact to="/dashboard"
          >
            Overview
          </StyledNavLink>
        </StyledListItem>
        <StyledListItem>
          <StyledNavLink
            activeStyle={{ backgroundColor: "#f6b26b", color: "#FFFFFF" }}
            to="/dashboard/change-username"
          >
            Change Username
          </StyledNavLink>
        </StyledListItem>
        <StyledListItem>
          <StyledNavLink
            activeStyle={{ backgroundColor: "#f6b26b", color: "#FFFFFF" }}
            to="/dashboard/change-password"
          >
            Change Password
          </StyledNavLink>
        </StyledListItem>
      </StyledList>
    </StyledDiv>
  );
};

export default SettingsNavbar;
