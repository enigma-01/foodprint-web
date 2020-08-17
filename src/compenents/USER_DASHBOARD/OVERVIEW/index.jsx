import React from "react";
import styled from "styled-components";
import UserSummary from "./userSummary";
import UserInfo from "./userInfo.jsx";
import SpendingChart from "./userSpending.jsx";

const StyledDiv = styled.div`
  width: 700px;
  display: flex;
`;

const UserInfoDiv = styled.div``;

const StyledGraphDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 50px;
`;

const UserOverviewDiv = () => {
  return (
    <StyledDiv>
      <UserInfoDiv>
        <UserInfo></UserInfo>
        <UserSummary></UserSummary>
      </UserInfoDiv>
      <StyledGraphDiv>
        <SpendingChart />
      </StyledGraphDiv>
    </StyledDiv>
  );
};

export default UserOverviewDiv;
