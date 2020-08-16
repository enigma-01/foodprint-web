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

const StyledText = styled.p`
  font-size: 20px;
  color: #636363;
  font-weight: 500;
`;

const HeaderDiv = () => {
  return (
    <HeaderContainer>
      <CenteredDiv>
        <StyledHeader>Change Password</StyledHeader>
        <StyledText>
          In order to protect your account, make sure your password is:
        </StyledText>
        <ul>
          <li>At least 6 characters</li>
          <li>Does not contain your username</li>
        </ul>
      </CenteredDiv>
    </HeaderContainer>
  );
};

export default HeaderDiv;
