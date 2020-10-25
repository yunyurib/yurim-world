import React from "react";
import styled from "styled-components";

export const About = () => {
  return (
    <AboutWrapper>
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
      <AboutVisual>
        <HomeGrid>
          <div className="gline01"></div>
          <div className="gline02"></div>
          <div className="gline03"></div>
          <div className="gline04"></div>
        </HomeGrid>
      </AboutVisual>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.main`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 100vh;
  z-index: 15;
`;
const AboutVisual = styled.section`
  height: 500px;
  min-height: 100vh;
  z-index: 3;
  overflow: hidden;
  background-color: #1e1e1e;
`;

const HomeGrid = styled.div`
  top: 0;
  height: 100%;
  width: inherit;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  > div {
    width: 1px;
    background: hsla(0, 0%, 100%, 0.1);
    transform-origin: top;
    /* transform: scale(0); 가운데로사라짐*/
    transition: transform 2s linear;
    height: 100%;
  }
`;
