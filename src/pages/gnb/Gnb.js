import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import mainImg from "../../assets/image/main_logo.svg";

export const Gnb = () => {
  return (
    <GnbWrapper>
      <Headergnb>
        <Headerlogo>
          <img src={mainImg} alt="메인로고" />
        </Headerlogo>
        <Headerlist>
          <Headeritem>
            <Link to="/about">About</Link>
          </Headeritem>
          <Headeritem>
            <Link to="/develop">Develop</Link>
          </Headeritem>
          <Headeritem>
            <Link to="/design">Design</Link>
          </Headeritem>
          <Headeritem>
            <Link to="/contact">Contact</Link>
          </Headeritem>
        </Headerlist>
      </Headergnb>
    </GnbWrapper>
  );
};

const GnbWrapper = styled.header`
  width: 100%;
  z-index: 99;
  position: absolute;
  animation: header 4s cubic-bezier(0.19, 1, 0.22, 1);
  > a {
    float: left;
    width: 25%;
  }
  @keyframes header {
    0% {
      opacity: 0;
      transform: translateY(-200px);
    }
    50% {
      opacity: 0;
      transform: translateY(-100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
const Headergnb = styled.nav`
  max-width: 1280px;
  margin: auto;
  display: flex;
  justify-content: space-around;
`;
const Headerlogo = styled.h1`
  > img {
    width: 140px;
    padding-top: 5px;
  }
`;

const Headerlist = styled.ul`
  justify-content: inherit;
  display: flex;
  align-items: center;
  list-style: none;
  width: 1140px;
  padding-left: 0px;
`;
const Headeritem = styled.li`
  position: relative;
  width: 25%;
  height: 100%;
  text-align: center;
  align-items: center;
  > a::before {
    width: 100%;
    height: 6px;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ede6d3;
    transition: 0.2s cubic-bezier(0.47, 0, 0.75, 0.72);
  }
  :hover > a {
    color: #4271e9;
  }
  > a {
    font-weight: 600;
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #fff;
    line-height: 95px;
  }
  :hover > a::before {
    height: 100%;
  }
`;
