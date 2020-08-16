import React from "react";
import styled from "styled-components";

const CenteredDiv = styled.div`
  display: flex column;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledHeader = styled.h1`
  font-size: 45px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #f9b506;
`;

const HeaderDiv = () => {
  return (
    <HeaderContainer>
      <CenteredDiv>
        <StyledHeader>Change Username</StyledHeader>
      </CenteredDiv>
    </HeaderContainer>
  );
};

export default HeaderDiv;
