import React from "react";
import styled from "styled-components";
import HeaderText from "../Header/headertext.jsx";
import HeaderImageDiv from "../Header/headerimg.jsx";

const StyledDiv = styled.div`
    height: 1500px;
    width: 100%;
    overflow: hidden;
`

const HeaderDiv = () => {
    return(
        <StyledDiv> 
            <HeaderText />
            <HeaderImageDiv/>
        </StyledDiv>
    )
};

export default HeaderDiv;