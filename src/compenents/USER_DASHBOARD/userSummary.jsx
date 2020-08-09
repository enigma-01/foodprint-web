import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    width:400px;
    height:100px;
    background-color: #f6b26b;
    margin-top:40px;
    border-radius: 50px;
    display: flex;
    justify-content:space-around;
`

const UserSummary = () => {

    return (
        <StyledContainer>
            <p>Pictures</p>
            <p>Locations</p>
            <p>Favourites</p>
        </StyledContainer>
    )
}

export default UserSummary;