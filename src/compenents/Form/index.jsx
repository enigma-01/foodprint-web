import React from "react";
import styled from "styled-components";

import FinalForm from "./form";

import InputField from "./inputField";

// Fix this too
const StyledFormDiv = styled.div`
  height: 780px;
  width: 690px;
  margin: 0 auto;
  background-color: #ffffff;
`;

const StyledHeader = styled.h1`
  font-size: 75px;
  text-align: center;
  padding-top: 75px;
  padding-bottom: 75px;
  margin: 0;
  color: #f9b506;
`;

const FormDiv = () => (
    <StyledFormDiv>
      <StyledHeader>Sign Up</StyledHeader>
      <FinalForm />
    </StyledFormDiv>
);

export default FormDiv;