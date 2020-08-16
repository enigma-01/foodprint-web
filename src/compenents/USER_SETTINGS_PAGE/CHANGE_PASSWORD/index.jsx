import React from "react";
import styled from "styled-components";
import ChangePasswordForm from "./form.jsx";
import HeaderDiv from "./header.jsx";

const StyledDiv = styled.div`
  display: flex column;
`

const ChangePasswordPage = () => {

  return (
    <StyledDiv>
      <HeaderDiv/>
      <ChangePasswordForm/>
    </StyledDiv>  
  )
}

export default ChangePasswordPage;