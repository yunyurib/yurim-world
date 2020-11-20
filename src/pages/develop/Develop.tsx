import React from "react";
import styled from "styled-components";
import {developData} from "./Develop.data";

export const Develop = () => {
  const createDevelopWorkItem = developData.map((data, index) =>{
    return(
      <li className="liSmall">
        <a href={data.href} target="block">
          <div>
            <img src={data.src} alt={data.title}></img>
          </div>
          <p className="title">{data.title} <span className="year">[2018-2019]</span></p>
          <p>{data.text}</p>
          <button type="button">Explore<span>&rarr;</span>
          </button>
        </a>
      </li>
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
          FMJ 근무 시, 4의사이트를 단독 관리를 하였습니다.
          <br />
          chopiee사이트는 백지상태부터 로고, 런칭 후관리까지 단독총괄로
          작업하였습니다.
        </p>
        <DevelopWorkLisr>
          {createDevelopWorkItem}
        </DevelopWorkLisr>
      </DevelopBox>
      <DevelopBox>
        <h3>Web</h3>
        <p>
          리뉴얼 등등
        </p>
        <DevelopWebLisr>
            <li>
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
  > .liSmall > a:hover > button > span {
    transform: translateY(2px) translateX(10px);
  }
  > .liSmall > a {
    display: block;
  }
  > .liSmall > a > div {
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
  > .liSmall > a >.title>.year{
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
  > .liSmall > a > button {
    display: block;
    width: 90%;
    padding: 1rem;
    font-size: 1rem;
    text-align: center;
    margin: 0 auto 15px auto;
    color: #02f194;
    background-color: #1e1e1e;
    border: none;
    border-radius: 0.4rem;
    -webkit-transition: 0.2s;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    cursor: pointer;
  }
  > .liSmall > a > button > span {
    display: inline-block;
    padding-left: 10px;
    transform: translateY(2px);
    transition: 0.5s;
  }
`;

const DevelopWebLisr = styled.ul`width: 100%;
display: flex;
`;
