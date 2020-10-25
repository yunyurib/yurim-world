import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import mainImg from "../../assets/image/main_logo.svg";

// // FontAwesomeIcon
// import {
//   faBars,
//   faSmile,
//   faDesktop,
//   faPalette,
//   faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";

export const Gnb = () => {
  return (
    <GnbWrapper>
      <GnbBox>
        <GnbLogo>
          <Link to="/" className="logo">
            YR
            <Lined className="lined lined_dot_1"></Lined>
            <Lined className="lined lined_dot_2"></Lined>
            <Lined className="lined lined_dot_3"></Lined>
            <Lined className="lined lined_dot_4"></Lined>
            <Lined className="lined lined_dot_5"></Lined>
            <Lined className="lined lined_dot_6"></Lined>
          </Link>
        </GnbLogo>
        <GnbLink>
          <a href="https://codepen.io/your-work/" target="blank">
            GitHub
            <Lined className="lined lined_dot_1"></Lined>
            <Lined className="lined lined_dot_2"></Lined>
            <Lined className="lined lined_dot_3"></Lined>
            <Lined className="lined lined_dot_4"></Lined>
            <Lined className="lined lined_dot_5"></Lined>
            <Lined className="lined lined_dot_6"></Lined>
          </a>
          <a href="https://github.com/xururuca9797" target="blank">
            Codepen
            <Lined className="lined lined_dot_1"></Lined>
            <Lined className="lined lined_dot_2"></Lined>
            <Lined className="lined lined_dot_3"></Lined>
            <Lined className="lined lined_dot_4"></Lined>
            <Lined className="lined lined_dot_5"></Lined>
            <Lined className="lined lined_dot_6"></Lined>
          </a>
        </GnbLink>
        <GnbHam type="button">
          <span></span>
        </GnbHam>
      </GnbBox>
      <GnbMenu>
        <ul>
          <li>
            <Link to="/about" className="ab">
              About
            </Link>
          </li>
          <li>
            <Link to="/about">Develop</Link>
          </li>
          <li>
            <Link to="/about">Design</Link>
          </li>
          <li>
            <Link to="/about">Design</Link>
          </li>
        </ul>
      </GnbMenu>
    </GnbWrapper>
  );
};
const GnbWrapper = styled.header`
  position: absolute;
  width: 100%;
  text-align: center;
  z-index: 100;
  transition: 1s;
`;
const GnbBox = styled.div`
  position: absolute;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  z-index: 100;
  transition: 1s;
  opacity: 1;
  justify-content: space-between;
  padding: 1vw 6.25vw 0vw 6.25vw;
`;
const GnbLogo = styled.div`
  & .logo {
    font-size: 20px;
    font-weight: 900;
    text-transform: uppercase;
    color: #02f194;
    border: 1px solid #1e1e1e;
    padding: 7px 25px;
    position: relative;
    animation: logo01 5s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  }
  & .lined {
    opacity: 0;
    animation: logo02 10s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  }
  @keyframes logo01 {
    0% {
      border: 1px solid #1e1e1e;
    }
    50% {
      border: 1px solid #02f194;
    }
    100% {
      border: 1px solid #1e1e1e;
    }
  }
  @keyframes logo02 {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
const GnbLink = styled.div`
  > a {
    margin: 0 15px;
    padding: 0.3em 0.8em 0.2em;
    position: relative;
    display: inline-block;
    transition: 0.5s;
    color: #ccc;
    font-size: 16px;
    border: 1px solid #1e1e1e;
  }
  > a:hover {
    border: 1px solid #02f194;
    color: #fff;
  }
  > a:hover .lined {
    opacity: 1;
  }
`;
const GnbHam = styled.button`
  width: 70px;
  outline: none;
  position: relative;
  > span::before {
    content: "";
    display: block;
    width: 70px;
    margin: 10px 0px;
    height: 1px;
    background-color: #fff;
  }
  > span {
    width: 70px;
    position: absolute;
    top: 0;
    height: 1px;
    display: block;
    background-color: #fff;
  }
  > span::after {
    content: "";
    display: block;
    width: 70px;
    height: 1px;
    background-color: #fff;
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
const GnbMenu = styled.nav`
  width: 20vw;
  background-color: #000;
  float: right;
  height: 100vw;
  font-size: 50px;
  color: #fff;
  display: none;
  > ul {
    padding-top: 100px;
  }
`;
