import React from "react";
import styled from "styled-components";

const StyledNavItem = styled.div`
  margin-left: 30px;
  width: wrap-content;
  position: relative;
  display: inline-block;
`;
const StyledNavLink = styled.a.attrs({
  href: "/",
  onClick: (event) => {
    event.preventDefault();
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

const NavigationItem = ({ className, label }) => (
    <StyledNavItem className = {className}>
      <StyledNavLink>{label}</StyledNavLink>
    </StyledNavItem>
);

export default NavigationItem;