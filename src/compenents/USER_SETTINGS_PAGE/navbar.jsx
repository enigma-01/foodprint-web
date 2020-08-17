import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledDiv = styled.div`
  width: wrap;
  overflow: hidden;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const StyledListItem = styled.li`
  margin: 20px;
  margin-bottom: 40px;
  margin-left: 0px;
  width:200px;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color:#f6b26b;
    width: 200px;
    background-color: #FFFFFF;
    padding:20px;

    :hover {
        background-color: #f6b26b;
        color:#ffffff;
    }
`;

const SettingsNavbar = () => {
  return (
    <StyledDiv>
      <StyledList>
        <StyledListItem>
          <StyledNavLink activeStyle={{backgroundColor:"#f6b26b", color:"#FFFFFF"}} to="/settings/change-username">
            Change Username
          </StyledNavLink>
        </StyledListItem>
        <StyledListItem>
          <StyledNavLink activeStyle={{backgroundColor:"#f6b26b", color:"#FFFFFF"}} to="/settings/change-password">
            Change Password
          </StyledNavLink>
        </StyledListItem>
      </StyledList>
    </StyledDiv>
  );
};

export default SettingsNavbar;
