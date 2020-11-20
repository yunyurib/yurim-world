import React from "react";
import styled from "styled-components";

export interface IMorebutton {
  btnEvent: () => any;
}

export function Morebutton({ btnEvent }: IMorebutton) {
  return (
    <MorebuttonWrapper onClick={btnEvent}>
      more
      <Lined className="lined lined_dot_1"></Lined>
      <Lined className="lined lined_dot_2"></Lined>
      <Lined className="lined lined_dot_3"></Lined>
      <Lined className="lined lined_dot_4"></Lined>
      <Lined className="lined lined_dot_5"></Lined>
      <Lined className="lined lined_dot_6"></Lined>
    </MorebuttonWrapper>
  );
};

const MorebuttonWrapper = styled.div`
  width: 8%;
  padding: 1rem;
  font-size: 1rem;
  text-align: center;
  display: block;
  margin: 40px auto;
  border: 1px solid #ccc;
  color: #ccc;
  background-color: #1d1d1d;
  position: relative;
  cursor: pointer;
  &:hover {
    border: 1px solid #02f194;
    color: #fff;
  }
  &:hover .lined {
    opacity: 1;
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
