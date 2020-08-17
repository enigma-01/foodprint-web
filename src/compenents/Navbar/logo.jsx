import React from "react";
import styled from "styled-components";
import logo from "../../images/Logo.png";
import { NavLink } from "react-router-dom";

const StyledLogo = styled(NavLink).attrs({
  onClick: (event) => {
    //event.preventDefault();
  },
})`
  width: 240px;
  margin-left: 15px;

  :hover {
    opacity: 0.8;
    transition: opacity 0.3s;
  }
`;

const NavbarLogo = () => (
  <StyledLogo to="/">
    <img className="mainLogo" src={logo} alt="Foodprint Logo" />
  </StyledLogo>
);

export default NavbarLogo;
