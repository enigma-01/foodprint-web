import React from "react";
import styled from "styled-components";

const StyledHeaderTextDiv = styled.div`
  &.title {
    font-size: 90px;
    font-weight: 700;
    margin-top: 30px;
    color: #f9b506;
    text-align: center;
  }

  &.subtitle {
    font-size: 35px;
    color: #f9b506;
    text-align: center;
    margin-top: 60px;
  }

  &.update {
    font-size: 20px;
    color: #dcdcdc;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

const StyledTextDiv = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 300;
  color: #696969;
  text-align: center;

  &.last{
      margin-bottom:50px;
  }

`;

const StyledDiv = styled.div`
  width: 800px;
  margin: auto;
`;

const TOSContent = () => {
  return (
    <StyledDiv>
      <StyledHeaderTextDiv className="title">
        Terms of Service
      </StyledHeaderTextDiv>
      <StyledHeaderTextDiv className="update">
        Last updated: August 5, 2020
      </StyledHeaderTextDiv>
      <StyledTextDiv>
        Welcome to Foodprint! Please note that many functions of the application
        require an active internet connection, either through Wi-Fi or provided
        by your mobile network provider. These Terms of Service govern your use
        of Foodprint and inform you about the Foodprint application. By creating
        a Foodprint account and using the application, you agree to these terms.
      </StyledTextDiv>
      <StyledHeaderTextDiv className="subtitle">Your Stuff</StyledHeaderTextDiv>
      <StyledTextDiv>
        The photos that you take belong entirely to you. These Terms of Service
        don’t allow us to use your content except for the purposes of improving
        the application. However, we have the right to review and delete content
        that violates the law. Otherwise, we have no obligation to review your
        photos.
      </StyledTextDiv>
      <StyledHeaderTextDiv className="subtitle">
        What You Can’t Do
      </StyledHeaderTextDiv>
      <StyledTextDiv>
        You can’t take any photos that showcase illegal content or violate these
        Terms of Service. If you do, we have the right to remove the content or
        delete your Foodprint account.
      </StyledTextDiv>
      <StyledHeaderTextDiv className="subtitle">Additional</StyledHeaderTextDiv>
      <StyledTextDiv className="last">
        This application uses the Places API as part of the application, thus by
        using the application you are complying with Google’s Terms of Service.
        If you have any questions or additional feedback, please do not hesitate
        to contact me at philips.xu1@gmail.com.
      </StyledTextDiv>
    </StyledDiv>
  );
};

export default TOSContent;
