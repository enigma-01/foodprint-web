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

const Content = () => {
  return (
    <StyledDiv>
      <StyledHeaderTextDiv className="title">
        Privacy Policy
      </StyledHeaderTextDiv>
      <StyledHeaderTextDiv className="update">
        Last updated: August 5, 2020
      </StyledHeaderTextDiv>
      <StyledTextDiv>
        Foodprint is an open source application created by Philips Xu. This
        service is provided at no cost and is intended for use "as is". This
        page informs users about the collection, use, and sharing of personal
        and sensitive data.
      </StyledTextDiv>
      <StyledHeaderTextDiv className="subtitle">
        Information Collection and Use
      </StyledHeaderTextDiv>
      <StyledTextDiv>
        For a better experience while using the application, we require certain
        sensitive and personally identifiable information. Your location will be
        used to provide the restaurant search feature and will be retained on
        your device only. The application also requires camera and gallery
        permissions to capture photos. The photos will only be stored by us and
        will only be used to improve the user experience. The disclosed
        information will not be collected by third party services. However, the
        app does use third party services to provide features for the
        application, namely the Google Play services and the Google Maps API. By
        using this application. you agree to Google's Privacy Policy.
      </StyledTextDiv>
      <StyledHeaderTextDiv className="subtitle">
        Changes to the Privacy Policy
      </StyledHeaderTextDiv>
      <StyledTextDiv>
        The Privacy Policy may be updated from time to time. If any changes are
        made, they will be reflected in the 'last updated' section at the top of
        the page.
      </StyledTextDiv>
      <StyledHeaderTextDiv className="subtitle">Contact Us</StyledHeaderTextDiv>
      <StyledTextDiv className="last">
        If you have any questions or concerns about the Privacy Policy, please
        contact me at philips.xu1@gmail.com.
      </StyledTextDiv>
    </StyledDiv>
  );
};

export default Content;
