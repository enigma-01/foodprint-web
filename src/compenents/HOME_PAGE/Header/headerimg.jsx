import React from "react";
import styled from "styled-components";
import { Spring, animated } from "react-spring/renderprops";
import HeaderImg from "../../../images/other-header-img.png";
import GetStartedBtn from "../HomeDiv/button.jsx";

const StyledImgDiv = styled.div`
  display: flex;
`;

const HeaderImageDiv = () => {
  return (
    <StyledImgDiv>
      <GetStartedBtn label="Get Started"></GetStartedBtn>
      <Spring
        native
        from={{ marginLeft: "100%" }}
        to={{ marginLeft: "27%" }}
        config={{ delay: 1000 }}
      >
        {(props) => (
          <animated.div style={props}>
            <img alt="Burger and phone with a map" src={HeaderImg}></img>
          </animated.div>
        )}
      </Spring>
    </StyledImgDiv>
  );
};

export default HeaderImageDiv;
