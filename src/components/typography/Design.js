import React from "react";
import styled from "styled-components";
export const Design = () => {
  return (
    <ScreenTitle>
      <BulletIcon></BulletIcon>
      About
    </ScreenTitle>
  );
};
const ScreenTitle = styled.h3`
  font-family: vivaldii;
  color: #fff;
  font-size: 150px;
  text-align: center;
  padding-top: 30px;
`;
const BulletIcon = styled.span`
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50%;
  margin-right: 30px;
  display: inline-block;
  transform: translateY(-50px);
  ::before {
    content: "";
    width: 50px;
    height: 50px;
    position: absolute;
    left: -12px;
    top: -12px;
    border-radius: 50%;
    margin-right: 30px;
    display: block;
    border: 2px dashed #fff;
    animation: aCircle 30s linear infinite;
  }
  @keyframes aCircle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(1turn);
    }
  }
`;
