import React from "react";
import styled from "styled-components";

export const Develop = () => {
  return (
  <DevelopWrapper>
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
      <DevelopVisual>
        {/* todo : 그리드 넣어주세요*/}
        <DevelopTitle>Develop</DevelopTitle>
      </DevelopVisual>
      <DevelopWork>
        <h3>Work</h3>
        <div>
        </div>
      </DevelopWork>
      <DevelopWeb>
      </DevelopWeb>
    </DevelopWrapper>
  );
};


const DevelopWrapper = styled.main`
  position: relative;
  width: 100%;
  z-index: 15;
`;
const DevelopVisual = styled.section`
  height: 500px;
  min-height: 100vh;
  z-index: 3;
  overflow: hidden;
  background-color: #1e1e1e;
`;
const DevelopTitle = styled.h2`
top: 0;
padding-top: 100px;
font-size: 9em;
left: 0;
position: absolute;
padding-left: 6.6vw;
text-transform: uppercase;
font-family: "Archivo Black",sans-serif;
`;
const DevelopWork = styled.section`
height: 500px;position: relative;
min-height: 100vh;
z-index: 3;
overflow: hidden;
background-color: #000238;
padding: 1vw 6.25vw 0vw 6.25vw;
>h3{
  font-size: 10em;
  color: #000238;
  transform: rotate(90deg);
  position: absolute;
  top: 201px;
  left: -100px;
  text-shadow: 1px 0 #fff, -1px 0 #fff, 0 1px #fff, 0 -1px #fff;
}
>div{
  border:1px solid red;
  width: 100%;
  height: 500px;
  padding-left: 100px;
}
`;

const DevelopWeb = styled.section`
height: 500px;
min-height: 100vh;
z-index: 3;
overflow: hidden;
background-color: #fff;
padding: 1vw 6.25vw 0vw 6.25vw;
`;
