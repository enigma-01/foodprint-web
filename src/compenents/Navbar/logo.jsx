import React from "react";
import styled from "styled-components";
import logo from "../../images/Logo.png";

const StyledLogo = styled.a.attrs({
    href: "/", 
    onClick: event => {
        event.preventDefault();
    }
})`
    display: flex;
    width: 261px;
    flex-wrap: wrap;
    padding-left: 15px;
    padding-right: 80px;

    > img{
        margin: auto;
    }

    :hover {
        opacity: 0.8;
    }
`;

function NavbarLogo() {
    return (
        <StyledLogo>
            <img className = "mainLogo" src = {logo} alt = "Foodprint Logo"/>
        </StyledLogo>
    );
};

export default NavbarLogo;