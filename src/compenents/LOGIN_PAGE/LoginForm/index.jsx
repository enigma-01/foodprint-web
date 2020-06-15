import React from "react";
import styled from "styled-components";
import LoginForm from "./form.jsx";
import Background from "../../../images/newBackground.png";
import { Spring, animated } from "react-spring/renderprops";

const BackgroundDiv = styled.div`
  height:100vh;
  width:100%;
  background-image:url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 10%;
  position:fixed;
  overflow:hidden;
`

const StyledFormDiv = styled.div`
  height: 780px;
  width: 690px;
  margin: 0 auto;
  background-color: #ffffff;
`;

const StyledHeader = styled.h1`
  font-size: 55px;
  font-weight: 300;
  text-align: center;
  padding-top: 87px;
  padding-bottom: 82px;
  margin: 0;
  color: #f9b506;
`;

const LoginDiv = () => (
  <BackgroundDiv>
      <Spring native from={{ marginTop:-1200}}
              to={{ marginTop:0}}>
                {props => (
                  <animated.div style={props}>
                    <StyledFormDiv>
                        <StyledHeader>Welcome Back,</StyledHeader>
                        <LoginForm />
                    </StyledFormDiv>
                  </animated.div>
                )}
      </Spring>
  </BackgroundDiv>
);

export default LoginDiv;