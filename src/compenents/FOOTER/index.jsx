import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledDiv = styled.div`
  width: 100vw;
  height: 30px;
  background-color: #4e4f50;
`;

const StyledNavLink = styled(NavLink)`
  color: #f6b26b;
  margin: 5px;
  padding: 5px;
  text-decoration: none;
  width: wrap-content;
  font-size: 20px;
  font-weight: 300;

  :hover {
    opacity: 0.6;
    transition: opacity 0.3s;
  }
`;

const StyledText = styled.p`
  font-size: 12px;
  color: #ffffff;
  font-weight: 300;
  margin: 0 0 0 10px;
`;

const FooterDiv = () => {
  return (
    <div>
      <StyledDiv>
        <StyledNavLink to="/privacy-policy">Privacy Policy</StyledNavLink>
        <StyledNavLink to="/terms-of-service">Terms of Service</StyledNavLink>
      </StyledDiv>
      <StyledDiv>
        <StyledText>©Kevin Pierce. All Rights Reserved.</StyledText>
      </StyledDiv>
    </div>
  );
};

export default FooterDiv;
