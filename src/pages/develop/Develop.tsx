import React, { useState } from "react";
import styled from "styled-components";
import { DevelopWorkData, DevelopWebData } from "./Develop.data";
import { Morebutton } from "../../components/morebutton/Morebutton";

export function Develop() {
  const [developWebItemlLine, setdevelopWebItemlLine] = useState<number>(1);
  const developWebItemLineCountEvent = () => {
    const count = developWebItemlLine + 1;
    setdevelopWebItemlLine(count);
  };

  const scrollTop = () => {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: 0,
    });
  }
  const createDevelopWorkItem = DevelopWorkData.map((data, index) => {
    return (
      <li className="liSmall">
        <a href={data.href} target="blank">
          <div className="liImg">
            <img src={data.src} alt={data.title}></img>
          </div>
          <p className="title">
            {data.title} <span className="year">[2018-2019]</span>
          </p>
          <p>{data.text}</p>
          <div className="liButton">
            Explore<span>&rarr;</span>
          </div>
        </a>
      </li>
    );
  });
  const createDevelopWebItem = DevelopWebData
    .filter((data, index) => index <= developWebItemlLine * 1 - 1)
    .map((data, index) => {
      return (
        <DevelopWebItem>
          <div className="DevelopWebCloneleft">
            <img src={data.src} alt={data.title}></img>
          </div>
          <div className="DevelopWebCloneright">
            <h4>{data.title}</h4>
            <div className="DevelopWebItem__text">
              <span className="DevelopWebItem__text__title">제작기간</span>
              <p>{data.period}</p>
            </div>
            <div className="DevelopWebItem__text">
              <span className="DevelopWebItem__text__title">키워드</span>
              <p>{data.hashtags}</p>
            </div>
            <div className="DevelopWebItem__text">
              <span className="DevelopWebItem__text__title">컬러</span>
              <span className={data.color}></span>
              <span className={data.color}></span>
            </div>
            <div className="DevelopWebItem__text">
              <span className="DevelopWebItem__text__title">기획의도</span>
              <p>{data.project}</p>
            </div>
            <a
              className="liButton"
              href={data.renewalhref}
              target="blank"
              title={data.title}
            >
              Renewal<span>&rarr;</span>
            </a>
            <a
              className="liButton"
              href={data.originalhref}
              target="blank"
              title={data.title}
            >
              Original<span>&rarr;</span>
            </a>
          </div>
          <ScrollTopButton type="button" onClick={scrollTop}>Top</ScrollTopButton>
        </DevelopWebItem>
      );
    });
  return (
    <DevelopWrapper>
      <DevelopGrid />
      <h2>Develop</h2>
      {/* DevelopWork */}
      <DevelopBox>
        <h3>Work</h3>
        <p>
          FMJ 근무 시, 4의사이트를 단독 관리를 하였습니다.
          <br />
          chopiee사이트는 백지상태부터 로고, 런칭 후관리까지 단독총괄로
          작업하였습니다.
        </p>
        <DevelopWorkLisr>{createDevelopWorkItem}</DevelopWorkLisr>
      </DevelopBox>
      <DevelopBox>
        <h3>Web</h3>
        <p>리뉴얼 등등</p>
        <DevelopWebLisr>{createDevelopWebItem}
          <Morebutton btnEvent={developWebItemLineCountEvent} />
        </DevelopWebLisr>
      </DevelopBox>
    </DevelopWrapper>
  );
}
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
  > .btn {
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
    -webkit-transition: 0.5s;
    transition: 0.5s;
    opacity: 0.6;
  }
  .btn.right {
    right: 6.25vw;
    left: auto;
    background-position: -120px 0;
  }
`;
const DevelopWorkLisr = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 50px;
  > .liM {
    width: 31.5% !important;
  }
  > .liSmall {
    width: 23%;
    background-color: #fff;
    border-radius: 0.4rem;
    overflow: hidden;
    box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
    cursor: pointer;
    -webkit-transition: 0.2s;
    transition: 0.5s;
    margin-top: 50px;
  }
  > .liSmall:hover {
    box-shadow: 0 3rem 4rem rgba(0, 0, 0, 4);
    transform: translateY(-5px);
  }
  > .liSmall > a:hover > .liButton > span {
    transform: translateY(2px) translateX(10px);
  }
  > .liSmall > a {
    display: block;
  }
  > .liSmall > a > .liImg {
    display: block;
    width: 100%;
    height: 14rem;
    overflow: hidden;
    object-fit: cover;
  }
  > .liSmall > a > .title {
    font-size: 1.5rem;
    font-weight: bold;
    display: block;
    padding: 15px 25px 0px;
  }
  > .liSmall > a > .title > .year {
    font-size: 1rem;
  }
  > .liSmall > a > p {
    font-size: 1rem;
    padding: 0px 25px 15px 25px;
  }
  > .liSmall:hover img {
    -webkit-filter: grayscale(0%);
  }
  > .liSmall > a img {
    width: 100%;
    filter: gray;
    -webkit-filter: grayscale(100%);
  }
  > .liSmall > a > .liButton {
    display: block;
    padding: 1rem;
    font-size: 1rem;
    text-align: center;
    margin: 0 20px 15px 20px;
    color: #02f194;
    background-color: #1e1e1e;
    border: none;
    border-radius: 0.4rem;
    -webkit-transition: 0.2s;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    cursor: pointer;
  }
  > .liSmall > a > .liButton > span {
    display: inline-block;
    padding-left: 10px;
    transform: translateY(2px);
    transition: 0.5s;
  }
`;

const DevelopWebLisr = styled.ul``;
const DevelopWebItem = styled.li`
  width: 100%;
  display: flex;
  color: #bbb;
  margin-bottom: 50px;
  > div {
    width: 50%;
    margin-top: 2.25vw;
  }
  > .DevelopWebCloneleft {
    overflow: hidden;
    border-radius: 0.4rem;
    width: 35%;
    background-color: white;
  }
  > .DevelopWebCloneleft > img {
    width: 100%;
    padding: 2vw;
    box-sizing: border-box;
  }
  > .DevelopWebCloneright {
    padding: 2vw 4vw;
    background-color: #1e1e1e;
  }
  > .DevelopWebCloneright > h4 {
    height: 55px;
    text-transform: uppercase;
    font-size: 9em;
    font-family: "Squada One",cursive;
    -webkit-transform: translateY(-50px);
    -ms-transform: translateY(-50px);
    transform: translateY(-90px);
  }
  & .DevelopWebItem__text {
    padding: 10px 0px;
  }
  & .DevelopWebItem__text > p {
    color: #e1e1e1;
    font-size: 1rem;
    font-weight: lighter;
    text-align: justify;
  }
  & .DevelopWebItem__text__title {
    font-size: 1.2rem;
    line-height: 40px;
    transform: translateY(-3px);
    display: inline-block;
    font-weight: bold;
    color: #676767;
  }
  & .color {
    width: 20px;
    height: 20px;
    margin-left: 10px;
    display: inline-block;
  }
  & .dd {
    background-color: red;
  }
  & .liButton {
    display: inline-block;
    padding: 1rem 6em;
    font-size: 1rem;
    text-align: center;
    margin: 30px 5px;
    color: #02f194;
    background-color: #1e1e1e;
    border: none;
    border: 1px solid #02f194;
    border-radius: 0.4rem;
    transition: 0.2s;
    cursor: pointer;
  }
`;

const ScrollTopButton = styled.button`
width: 50px;
position: fixed;
right: 10px;
height: 50px;
background-color: #1d1d1d;
border-radius: 50%;
text-align: center;
bottom: 10px;
font-weight: bold;
color: #02f093;
border: 1px solid #02f093;
z-index: 999999;
outline: none;
`;