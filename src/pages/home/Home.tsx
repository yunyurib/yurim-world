import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import "./img";

export function Home() {
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
          <div className="gline01"></div>
          <div className="gline02"></div>
          <div className="gline03"></div>
          <div className="gline04"></div>
        </HomeGrid>
        <HomeVisualNav>
          <ul>
            <li className="mousemovi">
              <Link to="/about">
                About
              </Link>
            </li>
            <li>
              <Link to="/develop" className="mousemovi">Develop</Link>
            </li>
            <li>
              <Link to="/design" className="mousemovi">Design</Link>
            </li>
          </ul>
        </HomeVisualNav>
      </HomeVisual>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.main`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 100vh;
  z-index: 15;
`;

const HomeVisual = styled.section`
  height: 500px;
  min-height: 100vh;
  z-index: 3;
  overflow: hidden;
  background-color: #1e1e1e;
`;

// 스크롤 효과
const CollapseBgWrap = styled.div`
  border: 1px solid red;
  position: absolute;
  z-index: -1;
  height: 100%;
  max-height: 100vh;
  left: 0;
  right: 0;
  bottom: 0;
  > span {
    background-color: #1e1e1e;
    position: absolute;
    left: 0;
    right: 0;
    height: calc(10% + 1px);
    overflow: hidden;
    transform-origin: bottom;
  }
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
const HomeVisualNav = styled.nav`
  width: 100%;
  top: 0;
  padding-top: 50px;
  font-size: 15em;
  left: 0;
  position: absolute;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Squada One', cursive;
  text-align: center;
  transition: 1s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  > ul > li {
    transition: 3s;
    transition-timing-function: cubic-bezier(0.215,0.61,0.355,1);
  }
  > ul > li > a {
    transition: 1s;
    transition-timing-function: cubic-bezier(0.215,0.61,0.355,1);
  }
  > ul > li:hover a {
    color: #fff;
  }
  > ul > li:nth-child(2n + 1) {
    transform: translateX(30vw);
  }
  > ul > li:nth-child(2) {
    transform: translateX(-30vw);
  }
  > ul > li:nth-child(1):hover,
  > ul > li:nth-child(3):hover {
    transform: translateX(10vw);
    letter-spacing: 20px;
  }
  > ul > li:nth-child(2):hover {
    transform: translateX(-10vw);
    letter-spacing: 20px;
  }
`;
