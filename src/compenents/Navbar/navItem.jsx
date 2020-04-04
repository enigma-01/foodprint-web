import React from "react";
import styled from "styled-components";

const StyledNavItem = styled.div`
padding-left: 30px;    
width: wrap-content;
    position: relative;
    display: inline-block;
`
const StyledNavLink = styled.a.attrs({
    href: "/", 
    onClick: event => {
        event.preventDefault();
    }
})`
    align-items: center;
    color: #F6B26B;
    display: flex;
    flew-flow: row nowrap;
    padding: 10px;
    text-decoration: none;
    width: wrap-content;
    font-size: 20px;
    font-weight:500;

    :hover{
        opacity:0.6;
    }
`;

function NavigationItem( {label} ){
    return (
    <StyledNavItem>
        <StyledNavLink>
            {label}
        </StyledNavLink>
    </StyledNavItem>
    );
}

export default NavigationItem;