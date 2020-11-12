import React from "react";
import styled from "styled-components";
import profile from "../../assets/image/aboutcontleft_profile.jpg";

export const About = () => {
  return (
    <AboutWrapper>
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
      <AboutGrid/>
      <AboutCont>
        <h2>ABOUT</h2>
        <AboutContClone>
        <AboutContLeftProfile>
            <div><img src={profile} alt="프로필사진"></img></div>
            <p>
            The person who does not stand still in the present and keeps moving,<br/>
            A person who constantly searches for new things to reach a goal.
            <span>현재에 멈춰 서 있지않고 계속 움직이는 사람, 
            목표에 도달하기 위해 끊임없이 새로운 것을 찾아가는 사람.</span></p>
          </AboutContLeftProfile>
          <div>
          </div>
        </AboutContClone>
        <AboutContClone>
         <AboutContLeftSkillTitle>
         <h3>Skill</h3>
          <p># Front-end</p>
          </AboutContLeftSkillTitle>
          <AboutContLeftSkillText>
          <ul className="skillBox">
            <li><span>Javascript</span><div className="skillBar"></div>
            <p>자바스크립트와 친해지기 위해 게임도 만들어보고 지금도 재미있는 시도들을 하고 있습니다.
            스크립트를 이용해 동적인 웹페이지 구현이 가능합니다.
            제이쿼리로도 구현이 가능하지만 바닐라자바스크립트 위주로 공부 하고 있습니다.
            </p>
            </li>
            <li><span>HTML5, CSS3</span><div className="skillBar"></div>
            <p>HTML 마크업 코딩 부분은시멘틱 마크업을 짜고, 웹 표준을 준수합니다. 다양한 플랫폼 및 브라우저를 지원할 수 있습니다.
            기본적인 레이아웃이나 애니메이션 등은 만들고 싶은건 대부분 구현합니다.
            Sass 등 CSS Preprocessor를 사용할 수 있습니다.미래지향적인 CSS를 작성하는 것을 선호합니다.
            BEM등의 CSS 방법론을 적용할 수 있습니다.
            기본적인 레이아웃이나 애니메이션 등은 만들고 싶은건 대부분 구현합니다. 이 홈페이지에 SCSS(Styled-Component)가 사용되었습니다. 데이로그 개발에 Grid, Flex, Sticky 등 신 기술들을 적극 활용했습니다.
            </p>
            </li>
          </ul>
          </AboutContLeftSkillText>
        </AboutContClone>
        <AboutContClone>
         <AboutContLeftSkillTitle>
          <p># Library</p>
          </AboutContLeftSkillTitle>
          <AboutContLeftSkillText>
          <ul className="skillBox">
            <li><span>
React JS</span><div className="skillBar"></div>
            <p>리액트로 두개의 사이트를 제작하면서 어느정도 익숙해졌습니다. Class Component, Functional Component, Hooks, Styled Component, Hash Route 등과 친해졌습니다.
            </p>
            </li>
            <li><span>

            React Native</span><div className="skillBar"></div>
            <p>현재 개발중입니다.
            </p>
            </li>
            <li><span>Redux
</span><div className="skillBar"></div>
            <p>현재 공부중입니다. 제가 이해한 리덕스는, 게임개발시 GAME_STATE_MACHINE과 비슷하다고 느꼈습니다. 스테이트가 변경 될 경우 여러 컴포넌트로 한번에 렌더해주기 때문에 상태관리가 편해집니다.
            </p>
            </li>
            <li><span>Story Book
</span><div className="skillBar"></div>
            <p>현재 공부중입니다. 제가 이해한 리덕스는, 게임개발시 GAME_STATE_MACHINE과 비슷하다고 느꼈습니다. 스테이트가 변경 될 경우 여러 컴포넌트로 한번에 렌더해주기 때문에 상태관리가 편해집니다.
            </p>
            </li>
            <li><span>
JQuery
</span><div className="skillBar"></div>
            <p>코딩 학습 초반에 자주 사용했는데 요새는 일부러 JS 학습을 위해 사용 안하는 중입니다. 다룰 줄 아는 정도의 수준.
            </p>
            </li>
            <li><span>
            Typescript
</span><div className="skillBar"></div>
            <p>현재 공부중입니다. 기본 자바스크립트에 비해 명확한 규칙으로 에러를 최소화하기 때문에 앞으로도 계속 사용하려고 노력할 것 같습니다.
            </p>
            </li>
          </ul>
          </AboutContLeftSkillText>
        </AboutContClone>
        <AboutContClone>
         <AboutContLeftSkillTitle>
          <p># Back-end</p>
          </AboutContLeftSkillTitle>
          <AboutContLeftSkillText>
          <ul className="skillBox">
            <li><span>Node JS
</span><div className="skillBar"></div>
            <p>자바스크립트와 친해지기 위해 게임도 만들어보고 지금도 재미있는 시도들을 하고 있습니다.
            스크립트를 이용해 동적인 웹페이지 구현이 가능합니다.
            제이쿼리로도 구현이 가능하지만 바닐라자바스크립트 위주로 공부 하고 있습니다.
            </p>
            </li>
            <li><span>PHP
</span><div className="skillBar"></div>
            <p>자바스크립트와 친해지기 위해 게임도 만들어보고 지금도 재미있는 시도들을 하고 있습니다.
            스크립트를 이용해 동적인 웹페이지 구현이 가능합니다.
            제이쿼리로도 구현이 가능하지만 바닐라자바스크립트 위주로 공부 하고 있습니다.
            </p>
            </li>
          </ul>
          </AboutContLeftSkillText>
        </AboutContClone>
        <AboutContClone>
         <AboutContLeftSkillTitle>
          <p># Graphic Design</p>
          </AboutContLeftSkillTitle>
          <AboutContLeftSkillText>
          <ul className="skillBox">
            <li><span>Photoshop
</span><div className="skillBar"></div>
            <p>신 기능들을 전부 다 알진 못하지만 꼭 필요한 만큼은 쓰는 것 같습니다 거의 10년 넘게 사용했습니다.
            </p>
            </li>
            <li><span>Illustrator
</span><div className="skillBar"></div>
            <p>이것도 15년 넘게 써서 꼭 필요한 만큼은 씁니다. 3D기능은 다룰 줄은 알지만 간단히 사용할 수 있습니다.
            </p>
            </li>
            
          </ul>
          </AboutContLeftSkillText>
        </AboutContClone>
        <AboutContClone>
         <AboutContLeftSkillTitle>
          <p># Media Creating</p>
          </AboutContLeftSkillTitle>
          <AboutContLeftSkillText>
          <ul className="skillBox">
            <li><span>Premiere Pro
</span><div className="skillBar"></div>
            <p>영상이 취미라서, 컷편집이나 간단한 효과를 넣는 등 기본적인건 익숙한 편이고, 디자인 회사에서는 영상을 담당하기도 했습니다. 외주 업무도 다수 경험이 있습니다.
            </p>
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
margin: 0 auto;
width: 1px;
position: absolute;
display: inline;
height: 100%;
background: hsla(0,0%,100%,0.1);`;
const AboutCont = styled.section`
min-height: 300vh;
z-index: 3;
background-color: #1e1e1e;
justify-content: center;
>h2{
  font-size: 12em;
  font-family: 'Squada One', cursive;
  padding: 2vw 6.25vw 0vw 6.25vw;
}
`;
const AboutContClone = styled.div`
width: 100%;
padding: 0 6.25vw 0vw 6.25vw;
border-top: 1px solid hsla(0,0%,100%,0.1);
border-bottom:1px solid hsla(0,0%,100%,0.1);
box-sizing: border-box;
display: flex;
transform: translateY(-60px);
`;
const AboutContLeftProfile = styled.div`
padding: 2.25vw 0 2.25vw 0;

>div{
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

const AboutContLeftSkillTitle = styled.div`
padding: 2.25vw 0 2.25vw 0;
color: #bbb;
width:50%;
>h3{
  font-size: 3em;
}
>p{
  font-size: 2em;
  font-weight: bold;
}
`;
const AboutContLeftSkillText = styled.div`
padding: 2.25vw 0 2.25vw 0;
width:50%;
>.skillBox{
    width: 700px;
    position: relative;
    padding-left: 4vw;
    box-sizing: border-box;
    color: #fff;
}
>.skillBox>li{padding-bottom: 30px;}
>.skillBox>li>span{
  font-size: 1.5em;
  font-weight: bold;
  width: 160px;
  display: inline-block;
}
>.skillBox>li>p{    line-height: 30px;
  margin-top: 10px;    color: #bbb;}
.skillBar{
  width: 40%;
  position: relative;
  height: 5px;
  box-sizing: border-box;
  display: inline-block;
  background-color: #d8d8d8;
  transform: translateY(-4px);

}
.skillBar::before{
  content: "";
  display: block;
  width: 71%;
  height: 100%;
  background-color: #02ee90;
}
`;