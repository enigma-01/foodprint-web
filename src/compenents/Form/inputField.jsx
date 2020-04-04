import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    width: 489px;
    height: 50px;
    border: 2px solid #F6B26B;
    border-radius: 25px;

    ::placeholder{
        font-size: 30px;
        font-weight:100;
        text-color:#ffffe3;
        line-height: 50px;
        padding-left: 20px;
    }

    :focus{
        outline-color:#fbc575;
    }
`

function InputField( {type, name, placeholder }){
    return (
        <StyledInput></StyledInput>
    )
};

export default InputField;