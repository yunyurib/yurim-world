import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Gnb.css";

export const Gnb = () => {
  return (
    <GnbWrapper>
      <Gnblogo>
        <Link to="/home" title="메인으로바로가기">
          <img src="./image/main_logo.svg" alt="메인로고" />
        </Link>
      </Gnblogo>
      <button id="ham">
        <i class="fas fa-bars"></i>
      </button>
      <div class="h_inner">
        <ul id="gnb">
          <li>
            <Link to="/about">
              <i class="fas fa-smile"></i>About
            </Link>
          </li>
          <li>
            <Link to="/Develop">
              <i class="fas fa-desktop"></i>develop
            </Link>
            <ul class="sub">
              <li>
                <a href="develop.html" title="web">
                  work
                </a>
              </li>
              <li>
                <a href="component.html" title="component">
                  component
                </a>
              </li>
              <li>
                <a href="#none" title="study">
                  study
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/Design">
              <i class="fas fa-palette"></i>design
            </Link>
            <ul class="sub">
              <li>
                <a href="graphics.html" title="w_graphics">
                  web_graphics
                </a>
              </li>
              <li>
                <a href="#none" title="artwork">
                  artwork
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/Contact">
              <i class="fas fa-envelope"></i>contact
            </Link>
          </li>
        </ul>
      </div>
      <div class="tab_menu">
        <ul class="tab_gnb">
          <li>
            <a href="about.html" title="about">
              <i class="fas fa-smile"></i>
            </a>
          </li>
          <li>
            <a href="develop.html" title="develop">
              <i class="fas fa-desktop"></i>
            </a>
          </li>
          <li>
            <a href="#none" title="design">
              <i class="fas fa-palette"></i>
            </a>
          </li>
          <li>
            <a href="#none" title="contact">
              <i class="fas fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </GnbWrapper>
  );
};

const GnbWrapper = styled.header`
  background: orange;
  width: 200px;
  height: 100%;
  position: fixed;
  transition: 0.5;
  overflow: hidden;
  z-index: 100;
`;
const Gnblogo = styled.h1`
  width: 180px;
  margin: 20px 10px 30px 10px;
`;
