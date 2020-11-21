// import { Button } from "@/components/button/Button";
import React, { useState } from "react";
import styled from "styled-components";
import {
  designDetailData,
  designEventItem,
  designBannerItem, designActivityItem
} from "./Design.data";
import { Morebutton } from "../../components/morebutton/Morebutton";



export function Design() {
  const [designDetailLine, setDesignDetailLine] = useState<number>(1);
  const designDetailItemLineCountEvent = () => {
    const count = designDetailLine + 1;
    setDesignDetailLine(count);
  };
  const [designEventlLine, setDesignEventlLine] = useState<number>(1);
  const designDetailItemLineEventEvent = () => {
    const count = designEventlLine + 1;
    setDesignEventlLine(count);
  };
  const [designBannerlLine, setDesignBannerlLine] = useState<number>(1);
  const designDetailItemLineBannerEvent = () => {
    const count = designBannerlLine + 1;
    setDesignBannerlLine(count);
  };

  const scrollTop = () => {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: 0,
    });
  }

  const createDesignDetailItem = designDetailData
    .filter((data, index) => index <= designDetailLine * 4 - 1)
    .map((data, index) => {
      return (
        <li className="liSmall" key={index}>
          <a href={data.href} target="blank" className="liLink">
            <div className="liImg">
              <img src={data.src} alt={data.title} />
            </div>
            <span>{data.title}</span>
            <p>{data.text}</p>
            <div className="liButton">
              {data.button}
              <span>&rarr;</span>
            </div>
          </a>
        </li>
      );
    });
  const createDesignEventItem = designEventItem
    .filter((data, index) => index <= designEventlLine * 4 - 1)
    .map((data, index) => {
      return (
        <li className="liSmall">
          <a href={data.href} target="blank" className="liLink">
            <div className="liImg">
              <img src={data.src} alt={data.title}></img>
            </div>
            <span>{data.title}</span>
            <p>{data.text}</p>
            <div className="liButton">
              {data.button}
              <span>&rarr;</span>
            </div>
          </a>
        </li>
      );
    });
  const createDesignBannerItem = designBannerItem
    .filter((data, index) => index <= designBannerlLine * 4 - 1)
    .map((data, index) => {
      return (
        <li className="liSmall liM">
          <a href={data.href} target="blank" className="liLink">
            <div className="liImg">
              <img src={data.src} alt={data.title}></img>
            </div>
            <span>{data.title}</span>
            <p>{data.text}</p>
            <div className="liButton">
              {data.button}
              <span>&rarr;</span>
            </div>
          </a>
        </li>
      );
    });
  const createDesignActivityItem = designActivityItem.map((data, index) => {
    return (
      <li className="liSmall liActivity">
        <a href={data.href} target="blank" className="liLink">
          <p className="liDetailText">{data.detailtext}</p>
          <div className="liActivityliImg">
            <img src={data.src} alt={data.title}></img>
          </div>
          <span>{data.title}</span>
          <p>{data.titletext}</p>
          <div className="liButton">
            {data.button}
            <span>&rarr;</span>
          </div>
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
          <p>의류,러쉬,악세사리 상세 페이지</p>
          <DesignContList>{createDesignDetailItem}</DesignContList>
          <Morebutton btnEvent={designDetailItemLineCountEvent} />
        </DesignContClone>
        <DesignContClone>
          <h3>Event</h3>
          <p>이달의 혜택, 이벤트 디자인</p>
          <DesignContList>{createDesignEventItem}</DesignContList>
          <Morebutton btnEvent={designDetailItemLineEventEvent} />
        </DesignContClone>
        <DesignContClone>
          <h3>Banner</h3>
          <p>브랜드별 배너, SNS, 네이버광고</p>
          <DesignContList>{createDesignBannerItem}</DesignContList>
          <Morebutton btnEvent={designDetailItemLineBannerEvent} />
        </DesignContClone>
        <DesignContClone>
          <h3>Individual activity</h3>
          <p>저는 이런 개인 활동을 하고 있습니다.</p>
          <DesignContList>{createDesignActivityItem}</DesignContList>
          {/* more */}
        </DesignContClone>
      </DesignCont>
      <ScrollTopButton type="button" onClick={scrollTop}>Top</ScrollTopButton>
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
`;

const DesignContList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;  
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
  > .liSmall >.liLink:hover > .liButton > span {
    transform: translateY(2px) translateX(10px);
  }
  > .liSmall >.liLink {
    display: block;
  }
  > .liSmall >.liLink > .liImg {
    display: block;
    width: 100%;
    height: 14rem;
    overflow: hidden;
    object-fit: cover;
  }

  > .liSmall >.liLink > span {
    font-size: 1.5rem;
    font-weight: bold;
    display: block;
    padding: 15px 25px 0px;
  }
  > .liSmall >.liLink > p {
    font-size: 1rem;
    padding: 0px 25px 15px 25px;
  }
  > .liSmall:hover img {
    filter: none !important;
    -webkit-filter: grayscale(0%) !important;
  }
  > .liSmall >.liLink img {
    width: 100%;
    filter: gray;
    -webkit-filter: grayscale(100%);
  }
  > .liSmall >.liLink > .liButton {
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
  > .liSmall >.liLink > .liButton > span {
    display: inline-block;
    padding-left: 10px;
    transform: translateY(2px);
    transition: 0.5s;
  }
  // liActivity
  & .liDetailText{
    display: none;
    height: 300px;
    box-sizing: border-box;
    text-align: justify;
  }
  & .liActivity:hover .liDetailText{
    display:block;
    padding: 25px 25px 0px 25px;
  }
  & .liActivity:hover .liActivityliImg,& .liActivity:hover span,& .liActivity:hover p{
    display: none;
  }
  & .liActivityliImg {
    display: block;
    width: 100%;
    height: 14rem;
    overflow: hidden;
    object-fit: cover;
  }
  & .liActivityliImg>img{
    filter: none !important;
    -webkit-filter: grayscale(0%)  !important; }
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