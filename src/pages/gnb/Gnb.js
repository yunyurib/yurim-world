import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mainImg from "../../assets/image/main_logo.svg";

// FontAwesomeIcon
import {
  faBars,
  faSmile,
  faDesktop,
  faPalette,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export const Gnb = () => {
  return (
    <GnbWrapper>
      <GnbLogo>
        <Link to="/home">
          <img src={mainImg} alt="메인로고" />
        </Link>
      </GnbLogo>
      <GnbHam>
        <GnbStyledFontAwesomeIcon icon={faBars} size="2x" />
      </GnbHam>
      <GnbInner>
        <GnbList>
          <li>
            <Link to="/about">
              <FontAwesomeIcon icon={faSmile} size="m" />
              about
            </Link>
          </li>
          <li>
            <Link to="/develop">
              <FontAwesomeIcon icon={faDesktop} size="m" />
              develop
            </Link>
            <GnbSub>
              <li>
                <Link to="/develop">work</Link>
              </li>
              <li>
                <Link to="/component">component</Link>
              </li>
              <li>
                <Link to="/study">study</Link>
              </li>
            </GnbSub>
          </li>
          <li>
            <Link to="/design">
              <FontAwesomeIcon icon={faPalette} size="m" />
              design
            </Link>
            <GnbSub>
              <li>
                <Link to="/graphics">web_graphics</Link>
              </li>
              <li>
                <Link to="/artwork">artwork</Link>
              </li>
            </GnbSub>
          </li>
          <li>
            <Link to="/contact">
              <FontAwesomeIcon icon={faEnvelope} size="m" />
              contact
            </Link>
          </li>
        </GnbList>
      </GnbInner>
      <GnbTab>
        <GnbTabList>
          <li>
            <Link to="/aboutl">
              <i class="fas fa-smile"></i>
            </Link>
          </li>
          <li>
            <Link to="/develop">
              <i class="fas fa-desktop"></i>
            </Link>
          </li>
          <li>
            <Link to="/design">
              <i class="fas fa-palette"></i>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <i class="fas fa-envelope"></i>
            </Link>
          </li>
        </GnbTabList>
      </GnbTab>
    </GnbWrapper>
  );
};

const GnbWrapper = styled.header`
  width: 200px;
  height: 100%;
  position: fixed;
  transition: 0.5;
  overflow: hidden;
  z-index: 100;
`;

const GnbLogo = styled.h1`
  width: 180px;
  margin: 20px 10px 30px 10px;
  > a > img {
    width: 100%;
  }
`;

const GnbInner = styled.div`
  width: 200px;
  height: 100%;
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  transition: 0.5;
  overflow: hidden;
`;

const GnbHam = styled.button`
  width: 45px;
  height: 45px;
  background-color: #fff;
  border-radius: 20%;
  border: none;
  left: 20px;
  top: 120px;
  position: absolute;
  z-index: 100;
  cursor: pointer;
  border: none;
  outline: none;
`;
const GnbList = styled.ul`
  width: 200px;
  font-size: 20px;
  padding-top: 80px;
  font-family: "NanumSquare", sans-serif !important;
  > li {
    width: 100%;
    text-transform: capitalize;
    position: relative;
    overflow: hidden;
    transition: 0.5s;
  }
  > li > a {
    display: block;
    margin: 10px 10px;
    padding: 20px 30px;
    border-radius: 10px;
    transition: 0.5s;
    font-weight: bold;
    color: rgb(62, 65, 73);
  }
  > li > a:hover {
    background-color: var(--blue);
    color: #fff;
  }
  > li > a svg {
    margin-right: 10px;
  }
`;
const GnbSub = styled.ul`
  & > li {
    padding-left: 40px;
    width: 100%;
    font-size: 17px;
    line-height: 35px;
    font-weight: bold;
  }
  & > li > a {
    color: #6b789c;
    display: block;
    transition: 0.5s;
  }
  & > li > a:hover {
    color: #081435;
    text-decoration: underline;
  }
`;
const GnbStyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: red;
`;

// Tab메뉴 서식
const GnbTab = styled.div`
  width: 95px;
  height: 100%;
  position: fixed;
  box-sizing: border-box;
  transition: 0.5;
  padding: 0px 20px;
  background-color: var(--blue);
  border-top-right-radius: 40px;
  left: -300%;
  top: 130px;
`;
const GnbTabList = styled.ul`
  padding-top: 130px;
  > li {
    width: 45px;
    height: 45px;
    margin-bottom: 40px;
    background-color: #fff;
    border-radius: 20%;
  }
  > li:hover {
    background-color: rgb(230, 230, 230);
  }
  > li > a {
    display: block;
    transition: 0.5s;
    font-size: 25px;
    color: var(--blue);
    text-align: center;
    line-height: 43px;
  }
  > li:hover a {
    color: var(--pink);
  }
`;
