import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function Gnb() {
  return (
    <GnbWrapper>
      <GnbBox>
        <GnbLogo>
          <Link to="/" className="gnblogolink">
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
          <a href="https://github.com/xururuca9797" target="blank">
            GitHub
            <Lined className="lined lined_dot_1"></Lined>
            <Lined className="lined lined_dot_2"></Lined>
            <Lined className="lined lined_dot_3"></Lined>
            <Lined className="lined lined_dot_4"></Lined>
            <Lined className="lined lined_dot_5"></Lined>
            <Lined className="lined lined_dot_6"></Lined>
          </a>
          <a href="https://codepen.io/your-work/" target="blank">
            Codepen
            <Lined className="lined lined_dot_1"></Lined>
            <Lined className="lined lined_dot_2"></Lined>
            <Lined className="lined lined_dot_3"></Lined>
            <Lined className="lined lined_dot_4"></Lined>
            <Lined className="lined lined_dot_5"></Lined>
            <Lined className="lined lined_dot_6"></Lined>
          </a>
        </GnbLink>
        <GnbHam />
      </GnbBox>
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

const Lined = styled.div`
  position: absolute;
  background: #1e1e1e;
  border: 1px solid #02f194;
  width: 6px;
  height: 6px;
  opacity: 0;
  transition: all 0.2s ease-out;
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
  >.gnblogolink {
    font-size: 20px;
    font-weight: 900;
    text-transform: uppercase;
    color: #02f194;
    border: 1px solid #1e1e1e;
    padding: 7px 25px;
    position: relative;
    transition: 0.5s;}
  >.gnblogolink:hover {
      border: 1px solid #02f194;
      color: #fff;
    }
  >.gnblogolink:hover .lined {
      opacity: 1;
    }
  }
`;
const GnbLink = styled.div`
  > a {
    position: relative;
    margin: 0 15px;
    padding: 0.3em 0.8em 0.2em;
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
  > a:hover>.lined {
    opacity: 1;
  }
`;
const GnbHam = styled.div`
  width: 70px;
  outline: none;
  position: relative;
  opacity: 0;
`;