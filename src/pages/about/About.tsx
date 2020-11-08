import React from "react";
import styled from "styled-components";
import profile from "../../assets/image/aboutcontleft_profile.jpg";

export const About = () => {
  return (
    <AboutWrapper>
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
      <AboutGrid/>
      <AboutVisual>
      <AboutGrid className="grid01"/>
        <AboutContLeft>
          <AboutContLeftProfile>
            <h2>ABOUT</h2>
            <div><img src={profile} alt="프로필사진"></img></div>
            <p>
The person who does not stand still in the present and keeps moving,<br/>
A person who constantly searches for new things to reach a goal.
<span>현재에 멈춰 서 있지않고 계속 움직이는 사람, 
목표에 도달하기 위해 끊임없이 새로운 것을 찾아가는 사람.</span></p>
          </AboutContLeftProfile>
          <AboutContRightHistory>
          <h3>History</h3>
          </AboutContRightHistory>
        </AboutContLeft>
        <AboutContRight>
          <AboutContRightSk>
          <h3>Skill</h3>
          <p># Front-end</p>
          <ul className="skillBox">
            <li><span>Javascript</span><div className="skillBar"></div>
            <p>자바스크립트와 친해지기 위해 게임도 만들어보고 지금도 재미있는 시도들을 하고 있습니다.
스크립트를 이용해 동적인 웹페이지 구현이 가능합니다.
제이쿼리로도 구현이 가능하지만 바닐라자바스크립트 위주로 공부 하고 있습니다.
            </p>
            </li>
            <li><span>HTML5</span><div className="skillBar"></div>
            <p>HTML 마크업 코딩 부분은시멘틱 마크업을 짜고, 웹 표준을 준수합니다. 다양한 플랫폼 및 브라우저를 지원할 수 있습니다.
            </p>
            </li>
            <li><span>CSS3</span><div className="skillBar"></div>
            <p>기본적인 레이아웃이나 애니메이션 등은 만들고 싶은건 대부분 구현합니다.
Sass 등 CSS Preprocessor를 사용할 수 있습니다.미래지향적인 CSS를 작성하는 것을 선호합니다.
BEM등의 CSS 방법론을 적용할 수 있습니다.
기본적인 레이아웃이나 애니메이션 등은 만들고 싶은건 대부분 구현합니다. 이 홈페이지에 SCSS(Styled-Component)가 사용되었습니다. 데이로그 개발에 Grid, Flex, Sticky 등 신 기술들을 적극 활용했습니다.
            </p>
            </li>
          </ul>
          <p># Front-end</p>
          <ul className="skillBox">
            <li><span>Javascript</span><div className="skillBar"></div>
            <p>자바스크립트와 친해지기 위해 게임도 만들어보고 지금도 재미있는 시도들을 하고 있습니다.
스크립트를 이용해 동적인 웹페이지 구현이 가능합니다.
제이쿼리로도 구현이 가능하지만 바닐라자바스크립트 위주로 공부 하고 있습니다.
            </p>
            </li>
            <li><span>HTML5</span><div className="skillBar"></div>
            <p>HTML 마크업 코딩 부분은시멘틱 마크업을 짜고, 웹 표준을 준수합니다. 다양한 플랫폼 및 브라우저를 지원할 수 있습니다.
            </p>
            </li>
            <li><span>CSS3</span><div className="skillBar"></div>
            <p>기본적인 레이아웃이나 애니메이션 등은 만들고 싶은건 대부분 구현합니다.
Sass 등 CSS Preprocessor를 사용할 수 있습니다.미래지향적인 CSS를 작성하는 것을 선호합니다.
BEM등의 CSS 방법론을 적용할 수 있습니다.
기본적인 레이아웃이나 애니메이션 등은 만들고 싶은건 대부분 구현합니다. 이 홈페이지에 SCSS(Styled-Component)가 사용되었습니다. 데이로그 개발에 Grid, Flex, Sticky 등 신 기술들을 적극 활용했습니다.
            </p>
            </li>
          </ul>
          </AboutContRightSk>
        </AboutContRight>
       {/*  <AboutTitle>ABOUT</AboutTitle> */}
      </AboutVisual>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.main`
  position: relative;
  width: 100%;
  z-index: 15;
`;
const AboutGrid = styled.div`
top: 240px;
margin: 0 auto;
width: 100%;
position: absolute;
display: inline;
height: 1px;
background: hsla(0,0%,100%,0.1);`;
const AboutVisual = styled.section`
display: flex;
min-height: 300vh;
z-index: 3;
background-color: #1e1e1e;
justify-content: center;
padding: 0 6.25vw 0vw 6.25vw;
> .grid01{
  top: 800px;
}
`;
const AboutContLeft = styled.div`
width: 50%;
border-right: 1px solid hsla(0, 0%, 100%, 0.1);
box-sizing: border-box;`;
const AboutContRightHistory = styled.div`
padding-top: 1.5vw;
>h3{
  font-size: 3em;
  color: #fff;
}
`;

const AboutContLeftProfile = styled.div`
  padding-top: 2.25vw;
>h2{
  font-size: 12em;
  font-family: 'Squada One', cursive;
}
>div{padding-right: 8vw;
  overflow: hidden;
  width: 100%;
  position: relative;
  align-items: center;
  height: 400px;
  box-sizing: border-box;
  justify-content: center;
  display: flex;}
>div img{
  width: 100%;
    position: absolute;
}
>p{font-size: 1.5em;padding-top: 10px;
  color: #ccc;
  font-weight: bold;    line-height: 25px;
}
>p>span{
  font-size: 0.6em;
  color: #ccc;
  font-weight: 200;
  display: block;
  padding-top: 10px;
}
`;
const AboutContRight = styled.div`
width: 50%;
height: 400px;
`;
const AboutContRightSk = styled.div`
padding-top: 7.25vw;
padding-left: 1vw;
>h3{
  font-size: 3em;
  color: #fff;
}
>p{
  font-size:1.5em;
  color:#fff;
}
>.skillBox{
  width: 600px;
    position: relative;
    padding-top: 55px;
    box-sizing: border-box;
    color: #fff;
}
>.skillBox>li{padding-bottom: 30px;}
>.skillBox>li>span{
  font-size: 1.5em;
}
>.skillBox>li>p{    line-height: 30px;
  margin-top: 10px;}
.skillBar{
  width: 40%;
  position: relative;
  height: 10px;
  box-sizing: border-box;
  display: inline-block;
  margin-left: 15px;
  background-color: #d8d8d8;
}
.skillBar::before{
  content: "";
  display: block;
  width: 71%;
  height: 100%;
  background-color: #02ee90;
}
`;