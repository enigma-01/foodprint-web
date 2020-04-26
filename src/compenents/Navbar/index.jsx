import React from "react";
import styled from "styled-components";

import NavbarLogo from "./logo";
import NavigationItem from "./navItem";
import NavButton from "./button";

const StyledNavBar = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  height: 100px;
  min-width: 851px;

  border-style: none none solid none;
  border-color: #f6b26b;

  background-color: #fff;

  .navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
  }

  .user-access {
    margin-right: 30px;
  }

  .active {
  }
`;

const NavBar = () => (
  <StyledNavBar>
    <div className="navigation">
      <NavbarLogo></NavbarLogo>
      <NavigationItem label="About"></NavigationItem>
      <NavigationItem label="Contact"></NavigationItem>
    </div>
    <div className="user-access">
      <NavButton label="Log In"></NavButton>
      <NavButton label="Sign Up"></NavButton>
    </div>
  </StyledNavBar>
);
export default NavBar;
