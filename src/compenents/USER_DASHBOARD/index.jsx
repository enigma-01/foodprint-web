import React from "react";
import styled from "styled-components";
import UserSummary from "./userSummary.jsx";

import { useAppContext } from "../../libs/contextLib";

const StyledDiv = styled.div`
  width: 100%;
`;

const UserDashboardDiv = () => {
  const { user } = useAppContext();

  return (
    <StyledDiv>
      <UserSummary></UserSummary>
    </StyledDiv>
  );
};

export default UserDashboardDiv;
