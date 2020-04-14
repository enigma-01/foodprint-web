import React from "react";
import styled from "styled-components";

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
    background-color: #FFFFFF;
    border-color:#f6b26b;
    color:#f6b26b;
    cursor: pointer;
    transition: background-color 0.25s, color 0.25s;
  }

  :focus {
    outline-color: #fbc575;
  }
`;

const NavButton = ({ label }) => (
  <StyledButton>{label}</StyledButton>
);

export default NavButton;