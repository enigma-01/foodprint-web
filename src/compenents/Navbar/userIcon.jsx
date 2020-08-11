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

  display: flex;
  align-items: center;
  justify-content: space-between;

  :focus {
    outline-color: #fbc575;
  }

  :hover {
    background-color: #f6a56b;
    cursor: pointer;
    transition: background-color 0.3s;
  }

`;

const StyledUsername = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-right: 11px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 11px;
`;

const UserIcon = ({ label }) => {
  const { userAvatar } = useAppContext();

  return (
    <StyledNavLink to="/dashboard">
      <StyledDiv>
        <StyledImg src={userAvatar}></StyledImg>
        <StyledUsername>{label}</StyledUsername>
      </StyledDiv>
    </StyledNavLink>
  );
};

export default UserIcon;
