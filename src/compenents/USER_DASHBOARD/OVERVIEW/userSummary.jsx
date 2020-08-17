import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../../libs/contextLib";

const StyledContainer = styled.div`
  width: 600px;
  height: 100px;
  background-color: #f6b26b;
  margin-top: 40px;
  border-radius: 50px;
  display: flex;
  justify-content: space-around;
  margin-left: 20px;
`;

const SubDiv = styled.div`
  height: 100px;
  width: wrap-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledHeaders = styled.p`
  &.header {
    font-size: 20px;
    color: #636363;
    font-weight: 500;
    margin: 0px;
    margin-bottom: 12px;
  }

  &.content {
    font-size: 25px;
    color: #ffffff;
    font-weight: 700;
    margin: 0px;
  }
`;

const UserSummary = () => {
  const { user } = useAppContext();

  return (
    <StyledContainer>
      <SubDiv>
        <StyledHeaders className="header">Pictures</StyledHeaders>
        <StyledHeaders className="content">{user.pictures}</StyledHeaders>
      </SubDiv>
      <SubDiv>
        <StyledHeaders className="header">Locations</StyledHeaders>
        <StyledHeaders className="content">{user.locations}</StyledHeaders>
      </SubDiv>
      <SubDiv>
        <StyledHeaders className="header">Favourite</StyledHeaders>
        <StyledHeaders className="content">{user.favourites}</StyledHeaders>
      </SubDiv>
    </StyledContainer>
  );
};

export default UserSummary;
