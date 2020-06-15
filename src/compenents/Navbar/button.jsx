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

const NavButton = ({ label }) => (
  <NavLink to={`/${label === "Login" ? "login" : "sign-up"}`}>
    <StyledButton>{label}</StyledButton>
  </NavLink>
    
);
export default NavButton;
