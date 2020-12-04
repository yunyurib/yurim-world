import React from "react";
import styled from "styled-components";
import {
  aboutDataFrontend,
  aboutDataLibrary,
  aboutDataBackend,
  aboutDataSoftware,
} from "./About.data";
import profile from "../../assets/image/aboutcontleft_profile.jpg";

export function About() {
  const createAboutContLeftSkillFrontend = aboutDataFrontend.map(
    (data, index) => {
      return (
        <li className={data.licN}>
          <span className="SkillTextIcon"></span>
          <span className="SkillTextTitle">{data.title}</span>
          <div className="skillBar"></div>
          <p>{data.sText}</p>
        </li>
      );
    }
  );
  const createAboutContLeftSkillLibrary = aboutDataLibrary.map(
    (data, index) => {
      return (
        <li className={data.licN}>
          <span className="SkillTextIcon"></span>
          <span className="SkillTextTitle">{data.title}</span>
          <div className="skillBar"></div>
          <p>{data.sText}</p>
        </li>
      );
    }
  );
  const createAboutContLeftSkillBackend = aboutDataBackend.map(
    (data, index) => {
      return (
        <li className={data.licN}>
          <span className="SkillTextIcon"></span>
          <span className="SkillTextTitle">{data.title}</span>
          <div className="skillBar"></div>
          <p>{data.sText}</p>
        </li>
      );
    }
  );
  const createAboutContLeftSkillSoftware = aboutDataSoftware.map(
    (data, index) => {
      return (
        <li className={data.licN}>
          <span className="SkillTextIcon"></span>
          <span className="SkillTextTitle">{data.title}</span>
          <div className="skillBar"></div>
          <p>{data.sText}</p>
        </li>
      );
    }
  );
  return (
    <AboutWrapper id="about">
      <AboutCont>
        <AboutGrid />
        <h2>ABOUT</h2>
        <AboutContClone>
          <AboutContLeftProfile>
            <div>
              <img src={profile} alt="프로필사진"></img>
            </div>
            <p>
              The person who does not stand still in the present and keeps
              moving,
              <br />A person who constantly searches for new things to reach a
              goal.
              <span>
                현재에 멈춰 서 있지않고 계속 움직이는 사람, 목표에 도달하기 위해
                끊임없이 새로운 것을 찾아가는 사람.
              </span>
            </p>
          </AboutContLeftProfile>
          <AboutContLeftInfo>
            <p>
              Where i live
              <span>Gongneung-ro, Nowon-gu, Seoul</span>
            </p>
            {/* <p>
              Give me a call
              <span> T. +82 (0)10 5452 9497</span>
            </p> */}
            <p>
              Or, why don’t you email me?
              <br />
              최대 3일 이내에 답변을 드리겠습니다.
              <span>zeze-@naver.com</span>
            </p>
          </AboutContLeftInfo>
        </AboutContClone>
        <AboutContClone className="skillBox1">
          <AboutContLeftSkillTitle>
            <h3>Skill</h3>
            <p># Front-end</p>
          </AboutContLeftSkillTitle>
          <AboutContLeftSkillText>
            <ul className="skillBox">{createAboutContLeftSkillFrontend}</ul>
          </AboutContLeftSkillText>
        </AboutContClone>
        <AboutContClone className="skillBox1">
          <AboutContLeftSkillTitle>
            <p># Library</p>
          </AboutContLeftSkillTitle>
          <AboutContLeftSkillText>
            <ul className="skillBox">{createAboutContLeftSkillLibrary}</ul>
          </AboutContLeftSkillText>
        </AboutContClone>
        <AboutContClone className="skillBox3">
          <AboutContLeftSkillTitle>
            <p># Back-end</p>
          </AboutContLeftSkillTitle>
          <AboutContLeftSkillText>
            <ul className="skillBox">{createAboutContLeftSkillBackend}</ul>
          </AboutContLeftSkillText>
        </AboutContClone>
        <AboutContClone className="skillBox4">
          <AboutContLeftSkillTitle>
            <p># Software</p>
          </AboutContLeftSkillTitle>
          <AboutContLeftSkillText>
            <ul className="skillBox skillBox4">
              {createAboutContLeftSkillSoftware}
            </ul>
          </AboutContLeftSkillText>
        </AboutContClone>
        <AboutContClone>
          <AboutContLeftSkillTitle>
            <h3>History</h3>
            <ul className="HistoryBox skillBox5">
              <li>
                <span className="HistoryDate">2018.03~2019.04</span>
                <p className="HistoryTitle">
                  FMJ 인터네셔널 웹 퍼블리셔<span>더블유브이프로젝트팀</span>
                </p>
                <div>
                  <p>
                    - chopiee , wv project , fairplay , jemutshop web
                    4의사이트를 단독 관리를 하였습니다.
                  </p>
                  <p>
                    - web관련해서는 사이트리뉴얼, 오류수정, 유지/보수/관리를
                    하였고,
                    <br />
                    chopiee사이트는 백지상태부터 런칭 후관리까지 단독총괄로
                    작업하였습니다.
                  </p>
                  <p>
                    - 디자인작업도 하였는데, 상세페이지,룩북촬영 / 그래픽 ,
                    배너디자인,sn관리s,이벤트페이지
                    <br />
                    상품업데이트 ,신상의류디자인 , 컨셉기획,누끼및 디테일,촬영과
                    코디,영상편집등을 하였습니다.
                  </p>
                  <p>
                    - 다양한 업무들을 배우며, 업무기술의 대한 다양성과 업무
                    소통능력과 이해력이 향상되었고,
                    <br /> 총괄을 담당하여 업무의 대한 책임감이 높아졌습니다.
                  </p>
                </div>
              </li>
              <li>
                <span className="HistoryDate">2019.10~2019.11</span>
                <p className="HistoryTitle">LF몰 닥스키즈 사무, 디자인 보조</p>
                <div>
                  <p>
                    - 조직 내부와 외부에서 요청하거나 필요한 업무를 지원하고
                    관리하는 일 등 수행, 효율적인 관리를 위한 서류 지원‧보조
                  </p>
                  <p>
                    - 구성원들의 업무 능률 향상을 위하여 사무기기 운용, 소모품,
                    비품관리, 사무환경 유지 등의 업무를 실행하였습니다.
                  </p>
                  <p>
                    - 주의깊은 관찰, 문제해결 의지, 꼼꼼한 관리태도, 비품․
                    소모품 파악의 집중력이 향상되는데에 도움이 되었습니다.
                  </p>
                </div>
              </li>
              <li>
                <span className="HistoryDate">2019.12~2019.12</span>
                <p className="HistoryTitle">
                  작당모의 업무보조<span>잼페이스 어플리케이션 엄무보조</span>
                </p>
                <div>
                  <p>- 서비스의 데이터 수</p>
                  <p>- 영상서비스 정보 입력</p>
                </div>
              </li>
            </ul>
          </AboutContLeftSkillTitle>
          <AboutContLeftSkillText>
            <ul className="HistoryBox skillBox6">
              <li>
                <span className="HistoryDate">2019.09~2019.10</span>
                <p className="HistoryTitle">
                  러쉬 코리아 웹디자인<span>UI/UX팀</span>
                </p>
                <div>
                  <p>
                    - 모든 작업을 템플릿 가이드 기반에 맞춰 제작하여, 조직의
                    가이드의 대한 이해와 업무처리 능력이 향상되었습니다.
                  </p>
                  <p>
                    - 저 포함 많은 아르바이트생들과 업무를 나누고, 협업하여
                    정확한 업무처리 태도, 아르바이트생과의 팀워크가
                    높아졌습니다.
                  </p>
                  <p>- 신제품의 상세 페이지작업, 누끼와 보정작업</p>
                  <p>- 신제품 목록 정리</p>
                  <p>- 성분 서치 후 제품의 성분 표시</p>
                </div>
              </li>
              <li>
                <span className="HistoryDate">2020.04~2020.11</span>
                <p className="HistoryTitle">
                  그린아트컴퓨터 프론트엔드 실무과정
                </p>
                <div>
                  <p>
                    - NCS기반 과정, 기획과 설계,
                    디자인, HTML, CSS, Javascript, jQuery
                  </p>
                  <p>
                    {" "}
                    -
                    본래 있던 홈페이지 리뉴얼을 통해 원래 있던 오류를 파악하고 바꾸어 문제를 해결하며 사용 목적과 용도에 맞게 최적화하여 디자인하고 효과적으로 구현하였습니다.
                  </p>
                  <p>
                    -
                    단순히 웹을 만드는 것이 아닌 실무에도 중요한, 파일을 실속있게 정리하는 것과 수업이 아닌 인턴과정으로 배운다는 마음가짐을 가지고 업무에서 필요한 대인관계와의사소통
                    능력이 향상되었습니다.
                  </p>
                </div>
              </li>
            </ul>
          </AboutContLeftSkillText>
        </AboutContClone>
      </AboutCont>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.main`
  width: 100%;
`;
const AboutGrid = styled.div`
  top: 0;
  left: 50%;
  position: fixed;
  width: 1px;
  height: 100%;
  background: hsla(0, 0%, 100%, 0.1);
`;
const AboutCont = styled.section`
  z-index: 3;
  background-color: #1e1e1e;
  justify-content: center;
  > h2 {
    font-size: 12em;
    font-family: "Squada One", cursive;
    padding: 2vw 6.25vw 0vw 6.25vw;
  }
`;
const AboutContClone = styled.div`
  width: 100%;
  padding: 0 6.25vw 0vw 6.25vw;
  border-top: 1px solid hsla(0, 0%, 100%, 0.1);
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  box-sizing: border-box;
  display: flex;
  transform: translateY(-60px);
  transition: all 0.5s 0.1s ease-in;
  &.skillBox1,
  &.skillBox2,
  &.skillBox3,
  &.skillBox4,
  & .skillBox5,
  & .skillBox6 {
    // opacity: 0;
    transition: all 0.5s 0.1s ease-in;
  }
  &.show {
    opacity: 1;
  }
  & .skillBox5.show,
  & .skillBox6.show {
    opacity: 1;
    transition: all 0.5s 0.1s ease-in;
  }
`;
const AboutContLeftProfile = styled.div`
  padding: 2.25vw 0 2.25vw 0;
  width: 50%;
  > div {
    overflow: hidden;
    width: 100%;
    position: relative;
    align-items: center;
    height: 400px;
    box-sizing: border-box;
    justify-content: center;
    display: flex;
  }
  > div img {
    width: 100%;
    position: absolute;
  }
  > p {
    font-size: 1.5em;
    padding-top: 10px;
    color: #ccc;
    font-weight: bold;
    line-height: 25px;
  }
  > p > span {
    font-size: 0.6em;
    color: #ccc;
    font-weight: 200;
    display: block;
    padding-top: 10px;
  }
`;
const AboutContLeftInfo = styled.div`
  padding: 2.25vw 0 2.25vw 4vw;
  width: 50%;
  > p {
    font-size: 1.5em;
    font-weight: bold;
    padding-bottom: 30px;
  }
  > p > span {
    display: block;
    color: #888;
    font-weight: normal;
  }
`;
const AboutContLeftSkillTitle = styled.div`
  padding: 2.25vw 0 2.25vw 0;
  color: #bbb;
  width: 50%;
  > h3 {
    font-size: 3em;
  }
  > p {
    font-size: 2em;
    font-weight: bold;
  }
  // HistoryBox css
  > .HistoryBox {
    color: #bbb;
    padding-top: 70px;
  }
  > .HistoryBox > li {
    height: 220px;
    padding-bottom: 30px;
  }
  > .HistoryBox > li > .HistoryDate {
    display: inline-block;
    border-bottom: 1px solid #bbb;
    margin-bottom: 5px;
  }
  > .HistoryBox > li .HistoryTitle {
    display: block;
    width: 100%;
    line-height: 40px;
    color: #fff;
    font-size: 2em;
    font-weight: bold;
  }
  > .HistoryBox > li .HistoryTitle span {
    font-size: 0.7em;
    font-weight: normal;
    padding-left: 10px;
    color: #bbb;
  }
`;
const AboutContLeftSkillText = styled.div`
  padding: 2.25vw 0 2.25vw 0;
  width: 50%;
  > .skillBox,
  > .HistoryBox {
    position: relative;
    padding-left: 4vw;
    box-sizing: border-box;
    color: #fff;
  }
  > .skillBox > li,
  > .HistoryBox > li {
    padding-bottom: 30px;
  }
  > .skillBox > li > .SkillTextIcon {
    width: 32px;
    height: 32px;
    float: left;
    margin-right: 20px;
    margin-bottom: 2px;
    display: inline-block;
    background: url(http://yurimxu.dothome.co.kr/image/about-skill-logos.png);
  }
  > .skillBox > li > .SkillTextTitle,
  > .HistoryBox > li .HistoryTitle {
    font-size: 2em;
    font-weight: bold;
    width: 30%;
    display: inline-block;
  }
  > .skillBox > li > p {
    line-height: 30px;
    margin-top: 10px;
    color: #bbb;
  }
  .skillBar {
    width: 40%;
    position: relative;
    height: 2px;
    box-sizing: border-box;
    display: inline-block;
    background-color: #333;
    transform: translateY(-7px);
  }
  .skillBar::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: #02ee90;
  }
  // skill : icon,text color//////////////////
  .Skill__js > .SkillTextTitle {
    color: #ffc600;
  }
  .Skill__js > .skillBar::before {
    background-color: #ffc600;
    width: 70%;
  }
  .Skill__htcs > .SkillTextTitle {
    color: #0086f2;
  }
  .Skill__htcs > .skillBar::before {
    background-color: #0086f2;
    width: 90%;
  }
  .Skill__htcs > .SkillTextIcon {
    width: 64px !important;
    background-position: -32px 0px !important;
  }
  .Skill__react > .SkillTextTitle {
    color: #61dafb;
  }
  .Skill__react > .skillBar::before {
    background-color: #61dafb;
    width: 40%;
  }
  .Skill__reactn > .skillBar::before {
    width: 5%;
  }
  .Skill__react > .SkillTextIcon {
    background-position: -96px 0px !important;
  }
  .Skill__route > .SkillTextTitle {
    color: #764abc;
  }
  .Skill__route > .SkillTextIcon {
    background-position: -64px -32px !important;
  }
  .Skill__route > .skillBar::before {
    background-color: #764abc;
    width: 20%;
  }
  .Skill__sb > .SkillTextTitle {
    color: #ff4785;
  }
  .Skill__sb > .skillBar::before {
    background-color: #ff4785;
    width: 40%;
  }
  .Skill__sb > .SkillTextIcon {
    background-position: -96px -96px !important;
  }
  .Skill__sc > .SkillTextTitle {
    color: #ff4785;
  }
  .Skill__sc > .skillBar::before {
    background-color: #ff4785;
    width: 80%;
  }
  .Skill__sc > .SkillTextIcon {
    background-position: 0px -64px !important;
  }
  .Skill__sass > .SkillTextTitle {
    color: #cb6f92;
  }
  .Skill__sass > .skillBar::before {
    background-color: #cb6f92;
    width: 50%;
  }
  .Skill__sass > .SkillTextIcon {
    background-position: -126px -96px !important;
  }
  .Skill__jq > .SkillTextTitle {
    color: #1069ad;
  }
  .Skill__jq > .skillBar::before {
    background-color: #1069ad;
    width: 80%;
  }
  .Skill__jq > .SkillTextIcon {
    background-position: -128px 0px !important;
  }

  .Skill__ts > .SkillTextTitle {
    color: #007acc;
  }
  .Skill__ts > .skillBar::before {
    background-color: #007acc;
    width: 30%;
  }
  .Skill__ts > .SkillTextIcon {
    background-position: -96px -32px !important;
  }
  .Skill__bs > .SkillTextTitle {
    color: #5b4282;
  }
  .Skill__bs > .skillBar::before {
    background-color: #5b4282;
    width: 50%;
  }
  .Skill__bs > .SkillTextIcon {
    background-position: -95px -127px !important;
  }
  .Skill__node > .SkillTextTitle {
    color: #73aa63;
  }
  .Skill__node > .skillBar::before {
    background-color: #73aa63;
    width: 60%;
  }
  .Skill__node > .SkillTextIcon {
    background-position: -32px -32px !important;
  }
  .Skill__php > .SkillTextTitle {
    color: #4f5b93;
  }
  .Skill__php > .skillBar::before {
    background-color: #4f5b93;
    width: 20%;
  }
  .Skill__php > .SkillTextIcon {
    background-position: -32px -96px !important;
  }
  .Skill__xampp > .SkillTextTitle {
    color: #d6ac72;
  }
  .Skill__xampp > .skillBar::before {
    background-color: #d6ac72;
    width: 20%;
  }
  .Skill__xampp > .SkillTextIcon {
    background-position: 0px -127px !important;
  }
  .Skill__sql > .SkillTextTitle {
    color: #ffda44;
  }
  .Skill__sql > .skillBar::before {
    background-color: #ffda44;
    width: 20%;
  }
  .Skill__sql > .SkillTextIcon {
    background-position: -32px -127px !important;
  }
  .Skill__git > .SkillTextTitle {
    color: #3e75c3;
  }
  .Skill__git > .skillBar::before {
    background-color: #3e75c3;
    width: 90%;
  }
  .Skill__git > .SkillTextIcon {
    background-position: 0px -32px !important;
  }
  .Skill__code > .SkillTextTitle {
    color: #ccc;
  }
  .Skill__code > .skillBar::before {
    background-color: #ccc;
    width: 100%;
  }
  .Skill__code > .SkillTextIcon {
    background-position: -129px -32px !important;
  }
  .Skill__ps > .SkillTextTitle {
    color: #37c5fe;
    width: 37% !important;
  }
  .Skill__ps > .skillBar::before {
    background-color: #37c5fe;
    width: 100%;
  }
  .Skill__ps > .SkillTextIcon {
    width: 97px !important;
    margin-right: 100% !important;
    background-position: -32px -64px !important;
  }
  .Skill__pro > .SkillTextTitle {
    color: #df76ff;
  }
  .Skill__pro > .skillBar::before {
    background-color: #df76ff;
    width: 40%;
  }
  .Skill__pro > .SkillTextIcon {
    background-position: -127px -64px !important;
  }

  .Skill__lr > .SkillTextTitle {
    color: #a9d7e5;
  }
  .Skill__lr > .skillBar::before {
    background-color: #a9d7e5;
    width: 40%;
  }
  .Skill__lr > .SkillTextIcon {
    background-position: -64px -96px !important;
  }
  .Skill__sv > .SkillTextTitle {
    color: #b4cd63;
  }
  .Skill__sv > .skillBar::before {
    background-color: #b4cd63;
    width: 20%;
  }
  .Skill__sv > .SkillTextIcon {
    background-position: -64px -127px !important;
  }
  // HistoryBox css
  > .HistoryBox {
    color: #bbb;
    padding-top: 135px;
  }
  > .HistoryBox > li > .HistoryDate {
    display: inline-block;
    border-bottom: 1px solid #bbb;
    margin-bottom: 5px;
  }
  > .HistoryBox > li {
    height: 220px;
  }
  > .HistoryBox > li .HistoryTitle {
    display: block;
    width: 100%;
    line-height: 40px;
    color: #fff;
  }
  > .HistoryBox > li .HistoryTitle span {
    font-size: 0.7em;
    font-weight: normal;
    padding-left: 10px;
    color: #bbb;
  }
`;
