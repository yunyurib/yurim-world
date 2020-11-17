// import { Button } from "@/components/button/Button";
import React from "react";
import styled from "styled-components";
import { designDetailData, designEventItem,designBannerItem } from "./Design.data";
// import "./Design";
// todo moore버튼 컨포넌트로 만들기!!
export const Design = () => {
  const createDesignDetailItem = designDetailData.map((data, index) => {
    return (
      <li className="liSmall">
        <a href={data.href}>
          <div>
            <img src={data.src} alt={data.title}></img>
          </div>
          <span>{data.title}</span>
          <p>{data.text}</p>
          <button type="button">
            {data.button}
            <span>&rarr;</span>
          </button>
        </a>
      </li>
    );
  });
  const createDesignEventItem = designEventItem.map((data, index) => {
    return (
      <li className="liSmall">
        <a href={data.href}>
          <div>
            <img src={data.src} alt={data.title}></img>
          </div>
          <span>{data.title}</span>
          <p>{data.text}</p>
          <button type="button">
            {data.button}
            <span>&rarr;</span>
          </button>
        </a>
      </li>
    );
  });
  const createDesignBannerItem = designBannerItem.map((data, index) => {
    return (
      <li className="liSmall liM">
        <a href={data.href}>
          <div>
            <img src={data.src} alt={data.title}></img>
          </div>
          <span>{data.title}</span>
          <p>{data.text}</p>
          <button type="button">
            {data.button}
            <span>&rarr;</span>
          </button>
        </a>
      </li>
    );
  });
  return (
    <DesignWrapper>
      <DesignGrid />
      <DesignCont>
        <h2>DESIGN</h2>
        <DesignContClone>
          <h3>Detail page</h3>
          <p>FMJ 근무 시, 의류부터 상세 페이지까지 작업한 디자인입니다.</p>
          <DesignContList>{createDesignDetailItem}</DesignContList>
          <a className="more">
            more
            <Lined className="lined lined_dot_1"></Lined>
            <Lined className="lined lined_dot_2"></Lined>
            <Lined className="lined lined_dot_3"></Lined>
            <Lined className="lined lined_dot_4"></Lined>
            <Lined className="lined lined_dot_5"></Lined>
            <Lined className="lined lined_dot_6"></Lined>
          </a>
        </DesignContClone>
        <DesignContClone>
          <h3>Event</h3>
          <DesignContList>{createDesignEventItem}</DesignContList>
          <a className="more">
            more
            <Lined className="lined lined_dot_1"></Lined>
            <Lined className="lined lined_dot_2"></Lined>
            <Lined className="lined lined_dot_3"></Lined>
            <Lined className="lined lined_dot_4"></Lined>
            <Lined className="lined lined_dot_5"></Lined>
            <Lined className="lined lined_dot_6"></Lined>
          </a>
        </DesignContClone>
        <DesignContClone>
          <h3>Banner</h3>
          <DesignContList>{createDesignBannerItem}</DesignContList>
          <a className="more">
            more
            <Lined className="lined lined_dot_1"></Lined>
            <Lined className="lined lined_dot_2"></Lined>
            <Lined className="lined lined_dot_3"></Lined>
            <Lined className="lined lined_dot_4"></Lined>
            <Lined className="lined lined_dot_5"></Lined>
            <Lined className="lined lined_dot_6"></Lined>
          </a>
        </DesignContClone>
      </DesignCont>
    </DesignWrapper>
  );
};

const DesignWrapper = styled.div`
  width: 100%;
  background-color: #1e1e1e;
`;
const DesignGrid = styled.div`
  top: 0;
  left: 50%;
  position: fixed;
  width: 1px;
  height: 100%;
  background: hsla(0, 0%, 100%, 0.1);
`;
const DesignCont = styled.section`
  z-index: 3;
  background-color: #1e1e1e;
  justify-content: center;
  > h2 {
    font-size: 12em;
    font-family: "Squada One", cursive;
    padding: 2vw 6.25vw 0vw 6.25vw;
  }
`;
const DesignContClone = styled.div`
  position: relative;
  z-index: 3;
  border-top: 1px solid hsla(0, 0%, 100%, 0.1);
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
  & .more {
    width: 8%;
    padding: 1rem;
    font-size: 1rem;
    text-align: center;
    display: block;
    margin: 40px auto;
    border: 1px solid #ccc;
    color: #ccc;
    background-color: #1d1d1d;
    position: relative;
  }
  & .more:hover {
    border: 1px solid #02f194;
    color: #fff;
  }
  & .more:hover .lined {
    opacity: 1;
  }
`;
const Lined = styled.div`
  position: absolute;
  background: #1e1e1e;
  border: 1px solid #02f194;
  width: 6px;
  height: 6px;
  opacity: 0;
  transition: all 0.2s ease-out;
`;
const DesignContList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  >.liM{
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

  > .liSmall > a > span {
    font-size: 1.5rem;
    font-weight: bold;
    display: block;
    padding: 15px 25px 0px;
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
