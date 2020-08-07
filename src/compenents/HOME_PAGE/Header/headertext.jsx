import React from "react";
import styled from "styled-components";
import { Spring, animated } from "react-spring/renderprops";

const StyledHeaderTextDiv = styled.div`
  font-size: 90px;
  font-weight: 700;
  margin-left: 50px;
  margin-top: 30px;
  color: #f9b506;
`;

const StyledTextDiv = styled.div`
  font-size: 35px;
  font-weight: 300;
  margin-left: 50px;
  margin-top: 20px;
  color: #f9b506;
  padding-left:5px;
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
          <StyledHeaderTextDiv>Foodprint</StyledHeaderTextDiv>
          <StyledTextDiv>Your Map. Your Way.</StyledTextDiv>
        </animated.div>
      )}
    </Spring>
  );
};

export default HeaderText;
