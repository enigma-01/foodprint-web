import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledDiv = styled.div`
    width:wrap;
`

const StyledList = styled.ul`
    list-style-type: none;
    padding:0;
    margin:0;
`

const StyledListItem = styled.li`
    margin:20px;
    margin-bottom:40px;
`   

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color:#f6b26b;
    width: 200px;
    background-color: #FFFFFF;
    padding:20px;

    :hover {
        background-color: #f6b26b;
        color:#ffffff;
    }

    :active {
        color
    }
`

const SettingsNavbar = () => {
    return (
        <StyledDiv>
            <StyledList>
                <StyledListItem>
                    <StyledNavLink to="/change-username">Change Username</StyledNavLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledNavLink to="/change-password">Change Password</StyledNavLink>
                </StyledListItem>
            </StyledList>
        </StyledDiv>
    )
}

export default SettingsNavbar;