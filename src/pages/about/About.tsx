import React from "react";
import styled from "styled-components";

export const About = () => {
  return (
    <AboutWrapper>
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
      <AboutVisual>
        <AboutGrid/>
        <AboutTitle>About</AboutTitle>
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

const AboutGrid = styled.div`
  top: 0;
  margin: 0 auto;
  width: 1px;
  height: 100%;
  background: hsla(0, 0%, 100%, 0.1);
  position: relative;
`;
const AboutTitle = styled.h2`
top: 0;
padding-top: 100px;
font-size: 9em;
left: 0;
position: absolute;
padding-left: 6.6vw;
text-transform: uppercase;
font-family: "Archivo Black",sans-serif;
`;