import React from "react";
import styled from "styled-components";
import { Spring, animated } from "react-spring/renderprops";
import HeaderImg from "../../../images/other-header-img.png";

const StyledImgDiv = styled.div`
  display: flex;
`;

const HeaderImageDiv = () => {
  return (
    <StyledImgDiv>
      <Spring
        native
        from={{ marginLeft: "100%" }}
        to={{ marginLeft: "45%" }}
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
