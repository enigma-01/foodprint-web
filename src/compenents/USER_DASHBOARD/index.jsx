import React from "react";
import styled from "styled-components";
import UserSummary from "./userSummary.jsx";
import UserInfo from "./userInfo.jsx";
import SpendingChart from "./userSpending.jsx";

import { useAppContext } from "../../libs/contextLib";

const StyledDiv = styled.div`
  width: 100%;
`;

const UserDashboardDiv = () => {
  return (
    <StyledDiv>
      <UserInfo></UserInfo>
      <UserSummary></UserSummary>
      <SpendingChart></SpendingChart>
    </StyledDiv>
  );
};

export default UserDashboardDiv;
