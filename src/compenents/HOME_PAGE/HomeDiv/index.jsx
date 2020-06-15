import React from "react";
import styled, { keyframes } from "styled-components";
import Background from "../../../images/newBackground.png";
import HeaderImg from "../../../images/homepage-header-image.png";

import HeaderDiv from "../Header/index.jsx";

const BackgroundDiv = styled.div`
  height: auto;
  width: 100%;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const HomeDiv = () => {
  return <HeaderDiv />;
};

export default HomeDiv;
