import React from "react";
import styled from "styled-components";
import HeaderDiv from "./header.jsx";
import ChangeUsernameForm from "./form.jsx";

const StyledDiv = styled.div`
  display: flex column;
`;

const ChangeUsernamePage = () => {
  return (
  <StyledDiv>
    <HeaderDiv/>
    <ChangeUsernameForm/>
  </StyledDiv>
  );
};

export default ChangeUsernamePage;
