import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../libs/contextLib";

const StyledDiv = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
`;

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const StyledUsername = styled.p`
  font-size: 50px;
  color: #636363;
  font-weight: 700;
  margin-left: 50px;
`;

const UserInfo = () => {
  const { user, userAvatar } = useAppContext();

  return (
    <StyledDiv>
      <StyledImg src={userAvatar} alt="UserProfile.png"></StyledImg>
      <StyledUsername>{user.displayName}</StyledUsername>
    </StyledDiv>
  );
};

export default UserInfo;
