import React from "react";
import styled from "styled-components";
import UserSummary from "./userSummary.jsx";
import UserInfo from "./userInfo.jsx";
import SpendingChart from "./userSpending.jsx";

import { useAppContext } from "../../libs/contextLib";

const StyledDiv = styled.div`
  width: 100%;
  display:flex;
`;

const UserInfoDiv = styled.div`
  
`;

const StyledGraphDiv = styled.div`
  margin-left:50px;
`

const UserDashboardDiv = () => {
  const { user, placeData } = useAppContext();

  return (
    <StyledDiv>
      <UserInfoDiv>
        <UserInfo></UserInfo>
        <UserSummary></UserSummary>
      </UserInfoDiv>
      <SpendingChart/>
    </StyledDiv>
  );
};

export default UserDashboardDiv;
