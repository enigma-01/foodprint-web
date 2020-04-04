import React from 'react';
import styled from "styled-components";

import Form from "./form";

import InputField from "./inputField";

const StyledFormDiv = styled.div`
    width:690px;
    margin:0 auto;
    height:100vh;
    background-color:#FFFFFF;
`

const StyledHeader = styled.h1`
    font-size:75px;
    font-weight:700;
    text-align:center;
    padding-top:100px;
    padding-bottom:81px;
    margin:0;
    color:#F9B506;
`

function FormDiv(){
    return(
            <StyledFormDiv>
                <StyledHeader>Sign Up</StyledHeader> 
                <Form/>
            </StyledFormDiv>
    );
}

export default FormDiv;