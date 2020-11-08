import React from "react";
import styled from "styled-components";
import wvproject from "../../assets/image/work_wvproject.jpg";
import chopiee from "../../assets/image/work_chopiee.jpg";
import jemut from "../../assets/image/work_jemut.jpg";

export const Develop = () => {
  return (
    <DevelopWrapper>
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
      <DevelopVisual>
        {/* todo : 그리드 넣어주세요*/}
        <DevelopTitle>Develop</DevelopTitle>
      </DevelopVisual>

      {/* DevelopWork */}
      <DevelopWork>
        <h3>Work</h3>
        <DevelopWorkLisr>
          <DevelopWorkItem href="http://www.wvproject.co.kr/" className="dd">
            <div className="ItemDate">
              <strong>01</strong>
              <p>2019</p>
              <i>Oct</i>
            </div>
            <div className="ItemText">
              <div>
                <span>CATEGORY:</span>RELEASE
              </div>
              <h4>WVproject</h4>
            </div>
            <p className="ItemImg">
              <img src={wvproject} alt="wvproject" />
              <span className="ItemGrad"></span>
            </p>
            <Lined className="lined lined_dot_1"></Lined>
            <Lined className="lined lined_dot_2"></Lined>
            <Lined className="lined lined_dot_3"></Lined>
            <Lined className="lined lined_dot_4"></Lined>
            <Lined className="lined lined_dot_5"></Lined>
            <Lined className="lined lined_dot_6"></Lined>
            <Lined className="lined lined_dot_7"></Lined>
            <Lined className="lined lined_dot_8"></Lined>
          </DevelopWorkItem>
          <DevelopWorkItem href="http://www.wvproject.co.kr/" className="dd">
            <div className="ItemDate">
              <strong>02</strong>
              <p>2019</p>
              <i>Oct</i>
            </div>
            <div className="ItemText">
              <div>
                <span>CATEGORY:</span>RELEASE
              </div>
              <h4>Chopiee</h4>
            </div>
            <p className="ItemImg">
              <img src={chopiee} alt="chopiee" />
              <span className="ItemGrad"></span>
            </p>
            <Lined className="lined lined_dot_1"></Lined>
            <Lined className="lined lined_dot_2"></Lined>
            <Lined className="lined lined_dot_3"></Lined>
            <Lined className="lined lined_dot_4"></Lined>
            <Lined className="lined lined_dot_5"></Lined>
            <Lined className="lined lined_dot_6"></Lined>
            <Lined className="lined lined_dot_7"></Lined>
            <Lined className="lined lined_dot_8"></Lined>
          </DevelopWorkItem>
          <DevelopWorkItem href="http://www.wvproject.co.kr/" className="dd">
            <div className="ItemDate">
              <strong>03</strong>
              <p>2019</p>
              <i>Oct</i>
            </div>
            <div className="ItemText">
              <div>
                <span>CATEGORY:</span>RELEASE
              </div>
              <h4>Jemut</h4>
            </div>
            <p className="ItemImg">
              <img src={jemut} alt="jemut" />
              <span className="ItemGrad"></span>
            </p>
            <Lined className="lined lined_dot_1"></Lined>
            <Lined className="lined lined_dot_2"></Lined>
            <Lined className="lined lined_dot_3"></Lined>
            <Lined className="lined lined_dot_4"></Lined>
            <Lined className="lined lined_dot_5"></Lined>
            <Lined className="lined lined_dot_6"></Lined>
            <Lined className="lined lined_dot_7"></Lined>
            <Lined className="lined lined_dot_8"></Lined>
          </DevelopWorkItem>
          <DevelopWorkItem href="http://www.wvproject.co.kr/" className="dd">
            <div className="ItemDate">
              <strong>04</strong>
              <p>2019</p>
              <i>Oct</i>
            </div>
            <div className="ItemText">
              <div>
                <span>CATEGORY:</span>RELEASE
              </div>
              <h4>Fairplay</h4>
            </div>
            <p className="ItemImg">
              <img src={wvproject} alt="Logo" />
              <span className="ItemGrad"></span>
            </p>
            <Lined className="lined lined_dot_1"></Lined>
            <Lined className="lined lined_dot_2"></Lined>
            <Lined className="lined lined_dot_3"></Lined>
            <Lined className="lined lined_dot_4"></Lined>
            <Lined className="lined lined_dot_5"></Lined>
            <Lined className="lined lined_dot_6"></Lined>
            <Lined className="lined lined_dot_7"></Lined>
            <Lined className="lined lined_dot_8"></Lined>
          </DevelopWorkItem>
        </DevelopWorkLisr>
      </DevelopWork>
      <DevelopWeb>

      </DevelopWeb>
    </DevelopWrapper>
  );
};
const Lined = styled.div`
  position: absolute;
  background: #1e1e1e;
  border: 1px solid #02f194;
  width: 6px;
  height: 6px;
  opacity: 0;
  transition: all 0.2s ease-out;
`;
const DevelopWrapper = styled.main`
  position: relative;
  width: 100%;
  z-index: 15;
`;

const DevelopVisual = styled.section`
  height: 500px;
  min-height: 100vh;
  z-index: 3;
  overflow: hidden;
  background-color: #1e1e1e;
`;
const DevelopTitle = styled.h2`
  top: 0;
  padding-top: 100px;
  font-size: 12em;
  left: 0;font-family: 'Squada One', cursive;
  position: absolute;
  padding-left: 6.6vw;
  text-transform: uppercase;
`;
const DevelopWork = styled.section`
  height: 500px;
  position: relative;
  min-height: 100vh;
  z-index: 3;
  overflow: hidden;
  background-color: #080921;
  padding: 1vw 6.25vw 0vw 6.25vw;
  > h3 {
    font-size: 9em;
    color: #080921;
    transform: rotate(90deg);
    position: absolute;
    left: -25px;
    font-family: 'Squada One', cursive;
    top: 201px;
    text-shadow: 1px 0 #fff, -1px 0 #fff, 0 1px #fff, 0 -1px #fff;
  }
`;
const DevelopWorkLisr = styled.div`
  width: 85%;
  display: flex;
  margin-left: 18%;
  padding: 100px 0 0 0;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const DevelopWorkItem = styled.a`
  position: relative;
  display: block;
  width: 47.5%;
  color: #fff;
  margin-bottom: 50px;
  transition: all 0.2s ease-out;
  &:hover img {
    transform: translate3d(0, 0, 0) scale(1.1);    filter: none;
  }
  &:hover .lined {
    opacity: 1;
  }
  > .ItemDate > strong {
    line-height: 0.9;font-family: 'Squada One', cursive;
    font-size: 3rem;
    color: #000238;
    font-weight: 700;
    text-shadow: 1px 0 #fff, -1px 0 #fff, 0 1px #fff, 0 -1px #fff;
    letter-spacing: 3px;
  }
  > .ItemDate > p {
    position: absolute;
    top: -1px;
    left: 0;
    margin-left: 65px;
    letter-spacing: 1px;
    font-size: 1rem;
  }
  > .ItemDate > i {
    font-size: 1.4rem;
    letter-spacing: 0.8px;
    position: absolute;
    top: 10px;
    left: 0;
    margin-left: 65px;
  }
  > .ItemText {
    position: absolute;
    bottom: 17px;
    left: 0;
    z-index: 2;
    width: 86%;
  }
  > .ItemText > span {
    opacity: 0.2;
    display: inline-block;
    margin-right: 5px;
  }
  > .ItemText > h4 {
    font-size: 1.5rem;
    font-weight: normal;
  }
  > .ItemImg {
    width: 26.35vw;
    height: 18.7vw;
    margin-left: 22.8%;
    position: relative;
    overflow: hidden;
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
    max-width: 100%;
    width: auto;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    -webkit-filter: grayscale(100%);
    filter: gray;
  }
  .ItemGrad {
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 40%;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0.6) 100%
    );
    z-index: 1;
  }
`;

const DevelopWeb = styled.section`
height: 500px;
position: relative;
min-height: 100vh;
z-index: 3;
overflow: hidden;
background-color: #fff;
padding: 1vw 6.25vw 0vw 6.25vw;
`;