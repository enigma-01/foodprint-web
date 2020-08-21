import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledDiv = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #4E4F50;
`;

const StyledNavLink = styled(NavLink)`
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
`

const FooterDiv = () => {
  return (
    <StyledDiv>
      <StyledNavLink to="/privacy-policy">Privacy Policy</StyledNavLink>
      <StyledNavLink to="/terms-of-service">Terms of Service</StyledNavLink>
    </StyledDiv>
  )
};

export default FooterDiv;
