import React from "react";
import styled from "styled-components";

export const Home = () => {
  return (
    <HomeWrapper>
      <HomeVisual>
        {/* 스크롤 효과 */}
        <CollapseBgWrap>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </CollapseBgWrap>
        <HomeGrid>
          <GridItem className="gline01"></GridItem>
          <GridItem className="gline02"></GridItem>
          <GridItem className="gline03"></GridItem>
          <GridItem className="gline04"></GridItem>
          <GridItem className="gline05"></GridItem>
        </HomeGrid>
      </HomeVisual>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.main`
  position: relative;
  width: 100%;
  // position: relative;
  // width: 100%;
  // height: 100vh;
  // overflow: hidden;
  // z-index: 15;
`;
const HomeVisual = styled.section`
  height: 500px;
  min-height: 100vh;
  z-index: 3;
  overflow: hidden;
  background-color: #001842;
`;

// 스크롤 효과
const CollapseBgWrap = styled.div`
  border: 1px solid red;
`;
const HomeGrid = styled.div`
  top: 0;
  height: 100%;
  width: inherit;
  display: flex;
  justify-content: space-evenly;
  position: relative;
`;
const GridItem = styled.div`
  width: 1px;
  background: hsla(0, 0%, 100%, 0.1);
  transform-origin: top;
  /* transform: scale(0); 가운데로사라짐*/
  transition: transform 2s linear;
  height: 100%;
`;
