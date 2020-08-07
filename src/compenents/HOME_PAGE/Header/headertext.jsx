import React from "react";
import styled from "styled-components";
import { Spring, animated } from "react-spring/renderprops";

const StyledTextDiv = styled.div`
  font-size: 90px;
  font-weight: 700;
  margin-left: 50px;
  margin-top: 30px;
  color: #f9b506;
`;

const HeaderText = () => {
  return (
    <Spring
      native
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
      config={{ mass: 1, tension: 120, friction: 26 }}
    >
      {(props) => (
        <animated.div style={props}>
          <StyledTextDiv>Foodprint</StyledTextDiv>
        </animated.div>
      )}
    </Spring>
  );
};

export default HeaderText;
