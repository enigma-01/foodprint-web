import React from 'react';
import styled from "styled-components";
import NavigationItem from "../Navbar/navItem";

// OLD - WILL IMPLEMENT LATER
import InputField from "./inputField";

// The Input Form & Submit Buttons

const StyledForm = styled.form`
    width: 690px;
    display: flex;
    flex-direction: column;
    align-items: center;

    :focus{
        outline:none;
    }
`
const StyledInput = styled.input`
    width: 489px;
    height: 40px;
    border: 2px solid #F6B26B;
    border-radius: 30px;
    margin-bottom:42px;
    padding-left:20px;
    font-size:30px;
    text-color:#F6B26B;

    &::placeholder{
        color: #B0B0B0;
        line-height: 30px;
        font-weight:300;
        font-size: 30px;
        padding-top:20px;
    }

    :focus{
        outline:none;
    }
`
const StyledButton = styled.button`
    width: 305px;
    height: 62px;
    background-color: #F6B26B;
    color: #fff;
    border-radius:31px;
    border-color:#F6B26B;
    font-size:25px;
    font-weight:700;
    margin-top:52px;

    :hover{
        background-color: #f6a56b;
        cursor: pointer;
    }

    :focus{
        outline-color:#fbc575;
        
    }
`
const StyledText = styled.p`
    font-size:20px;
    color: #636363;
    font-weight:500;
    padding-top:44px;
`

// This doesn't work for some reason - Does not let me override the parent component's style 
const AltSignIn = styled(NavigationItem)`
    text-decoration: underline;
    padding-left: none;
    padding-top: 5px;
`

function Form(){
    return(
        <div className = "container">
            <StyledForm>
                <StyledInput type="text" name="username" placeholder = "Username"/>
                <StyledInput type="text" name="email" placeholder = "Email"/>
                <StyledInput type="password" name="password" placeholder = "Password"/>
                <StyledButton type="submit">Create Account</StyledButton>
                <StyledText>Already have an account?</StyledText>
                <AltSignIn label="Sign In"></AltSignIn>
            </StyledForm>
        </div>
    );
}

export default Form;