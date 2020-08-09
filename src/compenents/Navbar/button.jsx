import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

const StyledButton = styled.button`
  width: 126px;
  height: 62px;
  background-color: #f6b26b;
  color: #fff;
  border-radius: 10px;
  border-color: #f6b26b;
  font-size: 20px;
  font-weight: 700;
  margin-left: 40px;

  {
    background-color: #f6b26b;
    border-color: #f6b26b;
    color: #FFFFFF;
    cursor: pointer;
    transition: background-color 0.25s, color 0.25s;
  }

  :hover {
    background-color: #ffffff;
    border-color: #f6b26b;
    color: #f6b26b;
    cursor: pointer;
    transition: background-color 0.25s, color 0.25s;
  }

  :focus {
    outline-color: #fbc575;
  }
`;

const setLabel = (label) => {
  if (label === "Login")
    return "login";
  else if (label === "Sign Up") 
    return "sign-up";
  else if (label === "Logout")
    return "about";
}

const NavButton = ({ label }) => (
  <NavLink to={`/${setLabel(label)}`}>
    <StyledButton>{label}</StyledButton>
  </NavLink>
);
export default NavButton;
