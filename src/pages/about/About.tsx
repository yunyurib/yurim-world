import React from "react";
import styled from "styled-components";
import profile from "../../assets/image/aboutcontleft_profile.jpg";
// import "../../assets/script/dd"

export const About = () => {
  return (
    <AboutWrapper id="about">
      <AboutCont>
      <AboutGrid />
       <Output className="info right">
        <ul>
            <li>pageYOffset : <span className="pageYOffset">0</span>px</li>
            <li>#section1 : <span className="s1OT">0</span>px</li>
            <li>#section2 : <span className="s2OT">0</span>px</li>
            <li>#section3 : <span className="s3OT">0</span>px</li>
            <li>#section4 : <span className="s4OT">0</span>px</li>
            <li>#section5 : <span className="s5OT">0</span>px</li>
            <li>#section6 : <span className="s6OT">0</span>px</li>
            <li>#section7 : <span className="s7OT">0</span>px</li>
            <li>#section7 : <span className="s8OT">0</span>px</li>
            <li>#section7 : <span className="s9OT">0</span>px</li>
        </ul>
    </Output>
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
            <p>
            Give me a call
            <span>  T. +82 (0)10 5452 9497</span>
            </p>
            <p>
            Or, why don’t you email me?
            <span>  rain00sun0ze@gmail.com</span>
            </p>
          </AboutContLeftInfo>
        </AboutContClone>
        <AboutContClone className="skillBox1">
          <AboutContLeftSkillTitle>
            <h3>Skill</h3>
            <p># Front-end</p>
          </AboutContLeftSkillTitle>
          <AboutContLeftSkillText>
            <ul className="skillBox">
              <li className="Skill__js">
                <span className="SkillTextIcon"></span>
                <span className="SkillTextTitle">Javascript</span>
                <div className="skillBar"></div>
                <p>
                  자바스크립트와 친해지기 위해 게임도 만들어보고 지금도 재미있는
                  시도들을 하고 있습니다. 스크립트를 이용해 동적인 웹페이지
                  구현이 가능합니다. 제이쿼리로도 구현이 가능하지만
                  바닐라자바스크립트 위주로 공부 하고 있습니다.
                </p>
              </li>
              <li className="Skill__htcs" id="section2">
                <span className="SkillTextIcon"></span>
                <span className="SkillTextTitle">HTML5 CSS3</span>
                <div className="skillBar"></div>
                <p>
                  HTML 마크업 코딩 부분은 시멘틱 마크업을 짜고, 웹 표준을
                  준수합니다. 다양한 플랫폼 및 브라우저를 지원할 수 있습니다.
                  기본적인 레이아웃이나 애니메이션 등은 만들고 싶은건 대부분
                  구현합니다. Sass SCSS를 사용할 수 있습니다.미래지향적인 CSS를 작성하는 것을 선호합니다. BEM등의
                  CSS 방법론을 적용할 수 있습니다. 이 홈페이지에 Styled-Component가 사용되었습니다. Grid, Flex, Sticky 등 신 기술들을 적극 활용하지만, 다양한 지원을 위해 Flex를 선호하는 편입니다.
                </p>
              </li>
            </ul>
          </AboutContLeftSkillText>
        </AboutContClone>
        <AboutContClone className="skillBox2">
          <AboutContLeftSkillTitle>
            <p># Library</p>
          </AboutContLeftSkillTitle>
          <AboutContLeftSkillText>
            <ul className="skillBox">
              <li className="Skill__react">
                <span className="SkillTextIcon"></span>
                <span className="SkillTextTitle">React JS</span>
                <div className="skillBar"></div>
                <p>
                  리액트로 두개의 사이트를 제작하면서 어느정도 익숙해졌습니다.
                  Class Component, Styled
                  Component, Route 등과 친해졌습니다.
                  더욱 깊은 이해와 익숙해지기 위해 공부를 하고있습니다.
                </p>
              </li>
              <li className="Skill__react Skill__reactn">
                <span className="SkillTextIcon"></span>
                <span className="SkillTextTitle">React Native</span>
                <div className="skillBar"></div>
                <p>날씨 어플리케이션을 구현하면서 현재 공부중입니다.</p>
              </li>
              <li className="Skill__route">
                <span className="SkillTextIcon"></span>
                <span className="SkillTextTitle">Route</span>
                <div className="skillBar"></div>
                <p>
                  현재 공부중입니다. 이 페이지에도 적용되었으며, 파일들을 나눠서 트래픽과 로딩속도를 개선 할 수 있어 편의성을 엄청 느끼고있습니다.
                </p>
              </li>
              <li className="Skill__sc">
                <span className="SkillTextIcon"></span>
                <span className="SkillTextTitle">Styled<br/>Component</span>
                <div className="skillBar"></div>
                <p>
                  현재 공부중입니다. 자바스크립트 파일 안에 CSS 를 작성하는 형태라서 한 눈에 보기 쉽고,
                  특정 컴포넌트와 스타일링이 결합되어 있기 때문에 사용되지 않는 컴포넌트를 찾아내고 삭제하기 쉽게 만들어 편리하지만 아직 미숙합니다.
                </p>
              </li>
              <li className="Skill__sb">
                <span className="SkillTextIcon"></span>
                <span className="SkillTextTitle">Story Book</span>
                <div className="skillBar"></div>
                <p>
                  현재 공부중입니다. 아직 한국어로된 정보가 많이 없어, 혼자 공부하기에는 어려웠지만, 많은 라이브러리를 배우고 싶어 욕심을 부렸습니다.이 페이지에도 사용되었습니다.
                </p>
              </li>
              <li className="Skill__sass">
                <span className="SkillTextIcon"></span>
                <span className="SkillTextTitle">SASS,SCSS</span>
                <div className="skillBar"></div>
                <p>
                  현재 공부중입니다. 앤마리 사이트에 사용되었고, 함수 공부를 하고 있습니다. 컴파일은 코알라를 통해 하였습니다.
                </p>
              </li>
              <li className="Skill__jq">
                <span className="SkillTextIcon"></span>
                <span className="SkillTextTitle">JQuery</span>
                <div className="skillBar"></div>
                <p>
                  코딩 학습 초반에 자주 사용했고, js보다는 JQuery에 익숙하지만, 요새는 일부러 JS 학습을 위해
                  사용 안하는 중입니다.다룰 줄 아는 정도의 수준입니다.
                </p>
              </li>
              <li className="Skill__ts">
                <span className="SkillTextIcon"></span>
                <span className="SkillTextTitle">Typescript</span>
                <div className="skillBar"></div>
                <p>
                  현재 공부중입니다. .tsx 사용하여 관리하고
실시간으로 문법을 검사해주어 프로그램 실행전에 버그를 잡을 확률이 커 좋지만,
처음에는 답답하고 항상 오류가 떠 당황했습니다.
더 공부하다 보면은 코드만 보고서도 비교적 쉽게 컴포넌트 속성을 파악할 수 있을 때까지 공부를 하고 싶고,
에러를 최소화하기 때문에 앞으로도 계속 사용하려고 노력할 것 같습니다
                </p>
              </li>
              <li className="Skill__bs">
                <span className="SkillTextIcon"></span>
                <span className="SkillTextTitle">Bootstrap</span>
                <div className="skillBar"></div>
                <p>
                웹사이트를 쉽게 만들 수 있게 도와주지만 편리함에 익숙해 질 수 있기때문에 00사이트에만 적용 하였습니다.적용할 수 있을 정도입니다.
                </p>
              </li>
            </ul>
          </AboutContLeftSkillText>
        </AboutContClone>
        <AboutContClone className="skillBox3">
          <AboutContLeftSkillTitle>
            <p># Back-end</p>
          </AboutContLeftSkillTitle>
          <AboutContLeftSkillText>
            <ul className="skillBox">
              <li className="Skill__node">
                <span className="SkillTextIcon"></span>
                <span className="SkillTextTitle">Node JS</span>
                <div className="skillBar"></div>
                <p>
                npm , yarn 프로젝트 패키지 다운받을때 사용하였습니다.
                npm보다는 yarn을 더 사용하는 편입니다.
                </p>
              </li>
              <li className="Skill__php">
                <span className="SkillTextIcon"></span>
                <span className="SkillTextTitle">PHP</span>
                <div className="skillBar"></div>
                <p>
                  ㅇㅇ페이지에 적용 하였습니다.
                조금 할 줄 아는 정도입니다.
                </p>
              </li>
              <li className="Skill__xampp">
                <span className="SkillTextIcon"></span>
                <span className="SkillTextTitle">XAMPP</span>
                <div className="skillBar"></div>
                <p>
                  MYSQL에 적용하여 사용해봤습니다.
                </p>
              </li>
              <li className="Skill__sql">
                <span className="SkillTextIcon"></span>
                <span className="SkillTextTitle">SQL</span>
                <div className="skillBar"></div>
                <p>
                  목록을 만들고 게시판을 적용하는데에 사용하였습니다.
                </p>
              </li>
            </ul>
          </AboutContLeftSkillText>
        </AboutContClone>
        <AboutContClone className="skillBox4">
          <AboutContLeftSkillTitle>
            <p># Software</p>
          </AboutContLeftSkillTitle>
          <AboutContLeftSkillText>
            <ul className="skillBox skillBox4">
              <li className="Skill__git">
                <span className="SkillTextIcon"></span>
                <span className="SkillTextTitle">Git Hub</span>
                <div className="skillBar"></div>
                <p>
                  개인 프로젝트와 협업 프로젝트 등을 올리고있습니다. 협업을 안해봐서 나중에 쉽게 진행 할 수 있도록 익숙해지려고 하고 있습니다. Branch를 생성하여 협업에 대비하고 있습니다.
                </p>
              </li>
              <li className="Skill__ps">
                <span className="SkillTextIcon"></span>
                <span className="SkillTextTitle">Photoshop</span>
                <div className="skillBar"></div>
                <p>
                  기본적으로 전체적인 툴 사용이 가능합니다.
                  신 기능들을 전부 다 알진 못하지만 대부분 사용할 수 있습니다.거의 10년 넘게 사용했습니다.
                </p>
              </li>
              <li className="Skill__ai">
                <span className="SkillTextIcon"></span>
                <span className="SkillTextTitle">Illustrator</span>
                <div className="skillBar"></div>
                <p>
                  이것도 15년 넘게 써서 꼭 필요한 만큼은 씁니다. 3D기능도 간단하게 다룰 줄알고,
                  개인적으로 일러스트 작업을 많이 하였습니다.
                </p>
              </li>
              <li className="Skill__xd">
                <span className="SkillTextIcon"></span>
                <span className="SkillTextTitle">Adobe XD </span>
                <div className="skillBar"></div>
                <p>
                  리뉴얼 디자인을 할 때 사용하였습니다.
                </p>
              </li>
              <li className="Skill__pro">
                <span className="SkillTextIcon"></span>
                <span className="SkillTextTitle">Premiere Pro</span>
                <div className="skillBar"></div>
                <p>
                  영상이 취미라서, 컷편집이나 간단한 효과를 넣는 등 기본적인건 사용 할 수 있습니다.
                  여행을 갈 때 영상 촬영을하여 편집을 하는 편입니다.
                  더블유브이프로젝트 근무 할 때에 촬영하여 업로드 경험도 있습니다. 그래도 많이 미숙합니다.
                </p>
              </li>
              <li className="Skill__lr">
                <span className="SkillTextIcon"></span>
                <span className="SkillTextTitle">Lightroom</span>
                <div className="skillBar"></div>
                <p>
                  원하는 필터를 적용하거나 제작하여, 보정, 편집이 가능합니다.
                </p>
              </li>
              <li className="Skill__code">
                <span className="SkillTextIcon"></span>
                <span className="SkillTextTitle">VS Code, Dreamweaver, Brackets</span>
                <div className="skillBar"></div>
                <p>
                  세가지 프로그램을 다 사용해봤습니다. 주로 VS Code가 가장 편리하여 사용하는 편입니다.
                </p>
              </li>
              <li className="Skill__sv">
                <span className="SkillTextIcon"></span>
                <span className="SkillTextTitle">카페24, 드림위버</span>
                <div className="skillBar"></div>
                <p>
                  상품 업로드, 상세페이지,이벤트, 엑셀 관리 등
                  근무 할 당시 주로 이용했고,
                  취미로 쇼핑몰도 운영 중이라서 많이 익숙합니다.
                </p>
              </li>
            </ul>
          </AboutContLeftSkillText>
        </AboutContClone>
        <AboutContClone>
          <AboutContLeftSkillTitle>
            <h3>History</h3>
            <ul className="HistoryBox skillBox5">
              <li>
              <span className="HistoryDate">2018.03~2019.04</span>
               <p className="HistoryTitle">FMJ 인터네셔널 웹 퍼블리셔<span>더블유브이프로젝트팀</span></p>
                <div>
                  <p>- chopiee , wv project , fairplay , jemutshop web  4의사이트를 단독 관리를 하였습니다.</p>
                  <p>- web관련해서는 사이트리뉴얼, 오류수정, 유지/보수/관리를 하였고,<br/>chopiee사이트는 백지상태부터 런칭 후관리까지  단독총괄로 작업하였습니다.</p>
                  <p>- 디자인작업도  하였는데, 상세페이지,룩북촬영 / 그래픽 , 배너디자인,sn관리s,이벤트페이지<br/>상품업데이트 ,신상의류디자인 , 컨셉기획,누끼및  디테일,촬영과  코디,영상편집등을 하였습니다.</p>
                  <p>- 다양한 업무들을 배우며, 업무기술의 대한 다양성과 업무 소통능력과 이해력이 향상되었고,<br/> 총괄을 담당하여 업무의 대한 책임감이 높아졌습니다.</p>
                </div>
              </li>
              <li>
              <span className="HistoryDate">2019.11~2019.12</span>
               <p className="HistoryTitle">LF몰 닥스키즈 사무, 디자인 보조</p>
                <div>
                  <p>- 조직 내부와 외부에서 요청하거나 필요한 업무를 지원하고 관리하는 일 등
                  수행, 효율적인 관리를 위한 서류 지원‧보조</p>
                  <p>- 구성원들의 업무 능률 향상을 위하여 사무기기 운용, 소모품, 비품관리, 사무환경
유지 등의 업무를 실행하였습니다.</p>
                  <p>- 주의깊은 관찰, 문제해결 의지, 꼼꼼한 관리태도, 비품․ 소모품 파악의 집중력이 향상되는데에 도움이 되었습니다.</p>
                </div>
              </li>
            </ul>
          </AboutContLeftSkillTitle>
          <AboutContLeftSkillText>
            <ul className="HistoryBox skillBox6">
              <li>
              <span className="HistoryDate">2019.10~2019.11</span>
               <p className="HistoryTitle">러쉬 코리아 웹디자인</p>
                <div>
                  <p>- 모든 작업을 템플릿 가이드 기반에 맞춰 제작하여, 조직의 가이드의 대한 이해와 업무처리 능력이 향상되었습니다.</p>
                  <p>
                    - 저 포함 많은 아르바이트생들과 업무를 나누고, 협업하여 정확한 업무처리 태도, 아르바이트생과의 팀워크가 높아졌습니다.
                  </p>
                  <p>- 신제품의 상세 페이지작업, 누끼와 보정작업</p>
                  <p>- 신제품 목록 정리</p>
                  <p>- 성분 서치 후 제품의 성분 표시</p>
                </div>
              </li>
              <li>
              <span className="HistoryDate">2020.04~2020.11</span>
               <p className="HistoryTitle">그린아트컴퓨터 프론트엔드 실무과정</p>
                <div>
                  <p>- NCS기반 과정, 기획과 설계, 디자인, HTML, CSS, Javascript, jQuery </p>
<p> - 본래 있던 홈페이지 리뉴얼을 통해 원래 있던 오류를 파악하고 바꾸어 문제를 해결하며 사용 목적과 용도에 맞게 최적화하여 디자인하고 효과적으로 구현하였습니다.</p>
<p>
- 단순히 웹을 만드는 것이 아닌 실무에도 중요한, 파일을 실속있게 정리하는 것과 수업이 아닌 인턴과정으로 배운다는 마음가짐을 가지고 업무에서 필요한 대인관계와의사소통 능력이 향상되었습니다.</p>
                </div>
              </li>
            </ul>
          </AboutContLeftSkillText>
        </AboutContClone>
      </AboutCont>
    </AboutWrapper>
  );
};

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
  transition: all 0.5s .1s ease-in;
  &.skillBox1,&.skillBox2,&.skillBox3,&.skillBox4,& .skillBox5,& .skillBox6{
    // opacity: 0;
    transition: all 0.5s .1s ease-in;}
  &.show{opacity: 1;}
  & .skillBox5.show,& .skillBox6.show{opacity: 1;transition: all 0.5s .1s ease-in;}
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
const AboutContLeftInfo =  styled.div`
padding: 2.25vw 0 2.25vw 4vw;
  width: 50%;
  >p{
    font-size: 1.5em;
    font-weight: bold;
    padding-bottom: 30px;
  }
  > p>span{
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
  >.HistoryBox{
    color: #bbb;
    padding-top: 70px;
  }
  >.HistoryBox>li{
    height: 220px;
    padding-bottom: 30px;
  }
  >.HistoryBox>li>.HistoryDate{
    display: inline-block;
    border-bottom: 1px solid #bbb;
    margin-bottom: 5px;
  }
  >.HistoryBox>li .HistoryTitle{
    display: block;
    width: 100%;
    line-height: 40px;
    color:#fff;
    font-size: 2em;
    font-weight: bold;
  }
  >.HistoryBox>li .HistoryTitle span{
    font-size: 0.7em;
    font-weight: normal;
    padding-left: 10px;
    color: #bbb;
  }
`;
const AboutContLeftSkillText = styled.div`
  padding: 2.25vw 0 2.25vw 0;
  width: 50%;
  > .skillBox,>.HistoryBox{
    position: relative;
    padding-left: 4vw;
    box-sizing: border-box;
    color: #fff;
  }
  > .skillBox > li,>.HistoryBox>li{
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
  > .skillBox > li > .SkillTextTitle,>.HistoryBox>li .HistoryTitle{
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
    width: 80%;
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
    width: 30%;
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
    width: 40%;
  }
  .Skill__sc > .SkillTextIcon {
    background-position: 0px -64px !important;
  }
  .Skill__sass > .SkillTextTitle {
    color: #CB6F92;
  }
  .Skill__sass > .skillBar::before {
    background-color: #CB6F92;
    width: 40%;
  }
  .Skill__sass > .SkillTextIcon {
    background-position: -126px -96px !important;
  }
  .Skill__jq > .SkillTextTitle {
    color: #1069AD;
  }
  .Skill__jq > .skillBar::before {
    background-color: #1069AD;
    width: 80%;
  }
  .Skill__jq > .SkillTextIcon {
    background-position: -128px 0px !important;
  }
  
  .Skill__ts > .SkillTextTitle {
    color: #007ACC;
  }
  .Skill__ts > .skillBar::before {
    background-color: #007ACC;
    width: 10%;
  }
  .Skill__ts > .SkillTextIcon {
    background-position: -96px -32px !important;
  }
  .Skill__bs > .SkillTextTitle {
    color: #5B4282;
  }
  .Skill__bs > .skillBar::before {
    background-color: #5B4282;
    width: 10%;
  }
  .Skill__bs > .SkillTextIcon {
    background-position: -95px -127px !important;
  }
  .Skill__node > .SkillTextTitle {
    color: #73AA63;
  }
  .Skill__node > .skillBar::before {
    background-color: #73AA63;
    width: 5%;
  }
  .Skill__node > .SkillTextIcon {
    background-position: -32px -32px !important;
  }
  .Skill__php > .SkillTextTitle {
    color: #4F5B93;
  }
  .Skill__php > .skillBar::before {
    background-color: #4F5B93;
    width: 20%;
  }
  .Skill__php > .SkillTextIcon {
    background-position: -32px -96px !important;
  }
  .Skill__xampp> .SkillTextTitle {
    color: #D6AC72;
  }
  .Skill__xampp> .skillBar::before {
    background-color: #D6AC72;
    width: 20%;
  }
  .Skill__xampp> .SkillTextIcon {
    background-position: 0px -127px !important;
  }
  .Skill__sql> .SkillTextTitle {
    color: #FFDA44;
  }
  .Skill__sql> .skillBar::before {
    background-color: #FFDA44;
    width: 20%;
  }
  .Skill__sql> .SkillTextIcon {
    background-position: -32px -127px !important;
  }
  .Skill__git > .SkillTextTitle {
    color: #3E75C3;
  }
  .Skill__git > .skillBar::before {
    background-color: #3E75C3;
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
    color: #37C5FE;
  }
  .Skill__ps > .skillBar::before {
    background-color: #37C5FE;
    width: 100%;
  }
  .Skill__ps > .SkillTextIcon {
    background-position: -32px -64px !important;
  }
  .Skill__ai > .SkillTextTitle {
    color: #FF7E1B;
  }
  .Skill__ai > .skillBar::before {
    background-color: #FF7E1B;
    width: 100%;
  }
  .Skill__ai > .SkillTextIcon {
    background-position: -64px -64px !important;
  }
  .Skill__xd > .SkillTextTitle {
    color: #D23C92;
  }
  .Skill__xd > .skillBar::before {
    background-color: #D23C92;
    width: 100%;
  }
  .Skill__xd > .SkillTextIcon {
    background-position: -96px -64px !important;
  }
  .Skill__pro > .SkillTextTitle {
    color: #DF76FF;
  }
  .Skill__pro > .skillBar::before {
    background-color: #DF76FF;
    width: 40%;
  }
  .Skill__pro > .SkillTextIcon {
    background-position: -127px -64px !important;
  }
  
  .Skill__lr > .SkillTextTitle {
    color: #A9D7E5;
  }
  .Skill__lr > .skillBar::before {
    background-color: #A9D7E5;
    width: 40%;
  }
  .Skill__lr > .SkillTextIcon {
    background-position: -64px -96px !important;
  }
  .Skill__sv> .SkillTextTitle {
    color: #B4CD63;
  }
  .Skill__sv> .skillBar::before {
    background-color: #B4CD63;
    width: 20%;
  }
  .Skill__sv> .SkillTextIcon {
    background-position: -64px -127px !important;
  }
  // HistoryBox css
  >.HistoryBox{
    color: #bbb;padding-top: 135px;
  }
  >.HistoryBox>li>.HistoryDate{
    display: inline-block;
    border-bottom: 1px solid #bbb;
    margin-bottom: 5px;
  }
  >.HistoryBox>li{
    height: 220px;
  }
  >.HistoryBox>li .HistoryTitle{
    display: block;
    width: 100%;
    line-height: 40px;
    color:#fff;
  }
  >.HistoryBox>li .HistoryTitle span{
    font-size: 0.7em;
    font-weight: normal;
    padding-left: 10px;
    color: #bbb;
  }
`;
const Output =styled.div`
position: fixed;
z-index: 1000;
`;