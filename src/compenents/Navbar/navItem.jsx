import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavItem = styled.div`
  margin-left: 30px;
  width: wrap-content;
  position: relative;
  display: inline-block;
`;
const StyledNavLink = styled(NavLink).attrs({
  onClick: (event) => {
    //event.preventDefault();
  },
})`
  color: #f6b26b;
  margin: 5px;
  padding: 5px;
  text-decoration: none;
  width: wrap-content;
  font-size: 20px;
  font-weight: 500;
  

  :hover {
    opacity: 0.6;
    transition: opacity 0.3s;
  }
`;

const checkLabel = (label) => {
  if (label === "Sign In") {
    return "login";
  } else if (label === "Sign Up") {
    return "sign-up";
  } else if (label === "Map") {
    return "map";
  } else return label;
};

const NavigationItem = ({ className, label }) => (
  <StyledNavItem className={className}>
    <StyledNavLink to={`/${checkLabel(label)}`}>
      {label[0].toUpperCase() + label.slice(1)}
    </StyledNavLink>
  </StyledNavItem>
);

export default NavigationItem;
