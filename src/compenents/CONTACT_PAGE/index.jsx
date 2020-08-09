import React from "react";
import styled from "styled-components";
import Background from "../../images/contact-page-background.jpg";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const BackgroundDiv = styled.div`
  height: 800px;
  width: 100%;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 100%;
  z-index: 1;
  overflow: hidden;

  animation: fadeInBackground 1.5s;

  @keyframes fadeInBackground {
    0% {
      opacity: 0;
    }
    67% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const BlackDiv = styled.div`
  height: 800px;
  width: 100%;
  background-color: #000000;
`;
const StyledHeader = styled.h1`
  font-size: 55px;
  font-weight: 300;
  text-align: center;
  margin-left: -150px;
  color: #ffffff;
  position: absolute;
  top: 20%;
  left: 50%;
  z-index: 2;

  animation: fadeInText 1s;

  @keyframes fadeInText {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const StyledInfoDiv = styled.div`
  height: 1400px;
  width: 100%;
  background-color: #ffffff;
  z-index: 2;
  top: 89%;
  position: absolute;
  display: flex column;
  padding-top: 120px;
`;

const StyledInfoText = styled.p`
  margin-left: 170px;

  &.title {
    font-size: 30px;
    font-weight: 700;
    color: #f6b26b;
    margin-top: 30px;
    margin-bottom: 0px;
  }

  &.content {
    font-size: 18px;
    margin-left: 200px;
    margin-top: 5px;
    margin-bottom: 100px;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

const MainContainer = styled.div`
  overflow: hidden;
`;

const ContactDiv = () => {
  return (
    <ParallaxProvider>
      <MainContainer>
        <StyledHeader>Contact Us</StyledHeader>
        <BlackDiv>
          <Parallax y={["-500px", "400px"]}>
            <BackgroundDiv></BackgroundDiv>
          </Parallax>
        </BlackDiv>

        <StyledInfoDiv>
          <StyledInfoText className="title">
            Have a question, comment, or concern?{" "}
          </StyledInfoText>
          <StyledInfoText className="content">
            Feel free to email us at{" "}
            <StyledLink href="mailto:kevinpierce08@gmail.com">
              kevinpierce08@gmail.com
            </StyledLink>
          </StyledInfoText>
          <StyledInfoText className="title">
            Need help with Foodprint Mobile?
          </StyledInfoText>
          <StyledInfoText className="content">
            Contact support at{" "}
            <StyledLink href="mailto:info@foodprint.com">
            philips.xu1@gmail.com
            </StyledLink>
          </StyledInfoText>
        </StyledInfoDiv>
      </MainContainer>
    </ParallaxProvider>
  );
};

export default ContactDiv;
