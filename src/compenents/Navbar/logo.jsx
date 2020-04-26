import React from "react";
import styled from "styled-components";
import logo from "../../images/Logo.png";

const StyledLogo = styled.a.attrs({
  href: "/",
  onClick: (event) => {
    event.preventDefault();
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
  <StyledLogo>
    <img className="mainLogo" src={logo} alt="Foodprint Logo" />
  </StyledLogo>
);

export default NavbarLogo;
