import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex column;
`;

const StyledHeader = styled.h1`
  font-size: 45px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #f9b506;
`;

const LandingPage = () => {

    return (
        <StyledDiv>
            <StyledHeader>Settings</StyledHeader>
            <p>Settings landing page</p>
        </StyledDiv>
    )
}

export default LandingPage;