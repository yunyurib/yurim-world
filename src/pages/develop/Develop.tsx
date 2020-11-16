import React from "react";
import styled from "styled-components";
import {developData} from "./Develop.data";

export const Develop = () => {
  const createDevelopWorkList = developData.map((data, index) =>{
    return(
      <DevelopWorkItem href={data.href}>
        <div className="ItemDate">
          <span>{data.year}</span>
          <p>{data.title}</p>
        </div>
        <p className="ItemImg">
          <img src={data.src} alt={data.title} />
        </p>
      </DevelopWorkItem>
    )
  });
  return (
    <DevelopWrapper>
      <DevelopGrid />
      <h2>Develop</h2>
      {/* DevelopWork */}
      <DevelopBox>
        <h3>Work</h3>
        <p>
          F&J 근무 시, 4의사이트를 단독 관리를 하였습니다.
          <br />
          web관련해서는 사이트리뉴얼, 오류수정, 유지/보수/관리를 하였고,
          <br />
          chopiee사이트는 백지상태부터 런칭 후관리까지 단독총괄로
          작업하였습니다.
        </p>
        <DevelopWorkLisr>
          {createDevelopWorkList}
        </DevelopWorkLisr>
      </DevelopBox>
      <DevelopBox>
        <h3>Web</h3>
        <p>
          리뉴얼 등등
        </p>
        <button className="btn left is-hidden" id="labSliderBtnLeft"></button>
          <button className="btn right" id="labSliderBtnRight"></button>
        <DevelopWebLisr>
            <li>
              <div>
                <div className="image-wrap">

                </div>
                <div className="text-wrap">

                </div>
              </div>
            </li>
            <li></li>
            <li></li>
            <li></li>
        </DevelopWebLisr>
      </DevelopBox>
    </DevelopWrapper>
  );
};
const DevelopWrapper = styled.main`
  position: relative;
  width: 100%;
  z-index: 15;
  background-color: #1e1e1e;
  > h2 {
    text-transform: uppercase;
    font-size: 12em;
    font-family: "Squada One", cursive;
    padding: 2vw 6.25vw 0vw 6.25vw;
  }
`;

const DevelopGrid = styled.div`
  top: 0;
  left: 50%;
  margin: 0 auto;
  width: 1px;
  position: absolute;
  display: inline;
  height: 5300px;
  background: hsla(0, 0%, 100%, 0.1);
`;
const DevelopBox = styled.section`
  position: relative;
  z-index: 3;
  border-top: 1px solid hsla(0, 0%, 100%, 0.1);
  overflow: hidden;
  padding: 1vw 6.25vw 0vw 6.25vw;
  transform: translateY(-60px);
  > h3 {
    font-size: 3em;
    color: #bbb;
    border-bottom: 1px solid #02f194;
    display: inline-block;
  }
  > p {
    font-size: 1.5em;
    padding-top: 20px;
  }
  >.btn{
    content: " ";
      position: absolute;
      width: 120px;
      height: 240px;
      top: 50%;
      left: 6.25vw;
      -webkit-transform: translateY(-50%) scale(1);
      transform: translateY(-50%) scale(1);
      background-color: #3e4044;
      background-position: 0 0;
      z-index: 100;
      -webkit-transition: .5s;
      transition: .5s;
      opacity: .6;
  }
  .btn.right {
    right: 6.25vw;
    left: auto;
    background-position: -120px 0;
  }
  
`;
const DevelopWorkLisr = styled.div`
  width: 100%;
  display: flex;
  padding: 30px 0 0 0;
  justify-content: space-between;
`;

const DevelopWorkItem = styled.a`
  position: relative;
  display: block;
  width: 22%;
  box-sizing: border-box;
  color:#bbb;
  margin-bottom: 50px;
  transition: all 0.5s ease-out;
  &:hover img {
    transform: translate3d(0, 0, 0) scale(1.1);
    filter: none;
  }
  &:hover .ItemImg {
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.158);
    transform: translate(0px, -10px);
  }
  > .ItemDate {
    padding-bottom: 20px;
    display: block;
    width: 100%;
    line-height: 30px;
    font-size: 2em;
    font-weight: bold;
  }
  > .ItemDate > span {
    border-bottom: 1px solid #bbb;
    font-size: 0.5em;
    font-weight: normal;
  }
  > .ItemImg {
    width: 100%;
    height: 15vw;
    position: relative;
    overflow: hidden;
    transition: all 0.5s ease-out;
  }
  > .ItemImg::before {
    display: block;
    content: "LOADING";
    color: #fff;
    width: 100%;
    height: 20px;
    position: absolute;
    top: 0;
    font-size: 1.6rem;
    letter-spacing: 4px;
    right: 0;
    bottom: 0;
    left: 0;
    font-family: jost-h;
    text-align: center;
    margin: auto;
  }
  & img {
    transition: all 0.8s;
    width: 120%;
    bottom: 0;
    left: 0;
    margin: auto;
    -webkit-filter: grayscale(100%);
    -webkit-filter: gray;
    filter: gray;
  }
`;

const DevelopWebLisr = styled.ul`width: 100%;
display: flex;
padding: 30px 0 0 0;
// flex-wrap: wrap;
justify-content: space-between;
border:1px solid red;
text-align: left;
    height: 60vh;
    margin-left: 10vw;
    overflow: hidden;
    position: relative;
>li{
  width: 100%;
    position: absolute;
    opacity: .15;
    -webkit-transition: 1.5s;
    transition: 1.5s;
    padding: 0 150px;
    border:1px solid blue;
}
>li>div{
  float: left;
  width: 50%;
  padding: 40px;
}
`;
