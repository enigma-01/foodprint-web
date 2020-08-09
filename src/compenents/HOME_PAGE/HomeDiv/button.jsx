import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledButton = styled.button`
  width: 300px;
  height: 100px;
  background-color: #f6b26b;
  color: #fff;
  border-radius: 10px;
  border-color: #f6b26b;
  font-size: 35px;
  font-weight: 700;
  margin-left: 60px;
  margin-top: 300px;

  {
    background-color: #f6b26b;
    border-color: #f6b26b;
    color: #FFFFFF;
    cursor: pointer;
    padding-right:0px;
    transition: background-color 0.25s, color 0.25s, padding 0.25s;
  }

  :hover{
    background-color: #FFFFFF;
    border-color: #f6b26b;
    color: #f6b26b;
    cursor: pointer;
    padding-right:35px;
    transition: background-color 0.25s, color 0.25s, padding 0.25s;
  }

  :hover:after {
    content: ' »';
    margin-left:8px;
    margin-top:-27px;
    position:absolute;
    border-color: #f6b26b;
    color: #f6b26b;
    cursor: pointer;
    font-size:70px;
    transition: background-color 0.25s, color 0.25s, padding 0.25s;
  }
  
  :focus {
    outline-color: #fbc575;
  }

  animation: fadeInBackground 1.5s;

  @keyframes fadeInBackground {
    0% {
      opacity: 0;
    }
    67% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  width: 300px;
  height: 100px;
`

const GetStartedBtn = ({ label }) => (
  <StyledNavLink to = {"sign-up"}>
    <StyledButton><span>Get Started</span></StyledButton>
  </StyledNavLink>
);
export default GetStartedBtn;