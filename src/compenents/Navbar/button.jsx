import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    width: 126px;
    height: 62px;
    background-color: #F6B26B;
    color: #fff;
    border-radius:10px;
    border-color:#F6B26B;
    font-size:20px;
    font-weight:700;
    margin-left:50px;

    :hover{
        background-color: #f6a56b;
        cursor: pointer;
    }
    
    .leftBtn{
        margin-left:200px;
    }
`;

function NavButton( {label} ){
    return(
        <StyledButton>
            {label}
        </StyledButton>
    );
}

export default NavButton;