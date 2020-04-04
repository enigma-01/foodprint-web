import React from 'react';
//import logo from "../../images/Logo.png";
import styled from "styled-components";

import NavbarLogo from "./logo";
import NavigationItem from "./navItem";
import NavButton from "./button";


const StyledNavBar = styled.div`

    align-items: center;
    display: flex;
    flex-flow: row nowrap;

    width: 100vw;
    height: 100px;

    border-style: none none solid none;
    border-color: #F6B26B;
    padding: 0px;

    background-color: #fff;
`;

function NavBar(){
    return (
        <StyledNavBar>
                <NavbarLogo></NavbarLogo>
                <NavigationItem label="About"></NavigationItem>
                <NavigationItem label="Contact"></NavigationItem>

                
                <NavButton className = "leftBtn" label="Log In"></NavButton>

                
                <NavButton label="Sign Up"></NavButton>
        </StyledNavBar>
    );
}

export default NavBar;