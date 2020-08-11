import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../../libs/contextLib"; 

const StyledDiv = styled.div`
  width: 126px;
  height: 62px;
  background-color: #f6b26b;
  color: #fff;
  border-radius: 10px;
  border-color: #f6b26b;

  display:flex;
  align-items:center;
  justify-content:space-between;

  :focus {
    outline-color: #fbc575;
  }
`;

const StyledText = styled.p`
  font-size: 20px;
  font-weight: 700;
`

const StyledNavLink = styled(NavLink)`
  text-decoration:none;
`

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const UserIcon = ({ label }) => {

  const { userAvatar } = useAppContext();

  return (
    <StyledNavLink to="/dashboard">
      <StyledDiv>
        <StyledImg src={userAvatar}></StyledImg>
        <StyledText>{label}</StyledText>
      </StyledDiv>
    </StyledNavLink>
  );
};

export default UserIcon;
