import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledText = styled.p`
  font-size: 50px;
`;

const AboutDiv = () => {
  return (
    <div>
      <StyledText>About Page!</StyledText>
      <NavLink to="/privacy-policy">
        <StyledText>Our Privacy Policy</StyledText>
      </NavLink>
      <NavLink to="/terms-of-service">
        <StyledText>Terms of Service</StyledText>
      </NavLink>
    </div>
  );
};

export default AboutDiv;
