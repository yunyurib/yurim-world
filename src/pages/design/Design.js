import React from "react";
import styled from "styled-components";

export const Design = () => {
  return (
    <DesignWrapper>
      <DesignGrid />
      <DesignCont>
        <h2>DESIGN</h2>
        <DesignContClone></DesignContClone>
      </DesignCont>
    </DesignWrapper>
  );
};

const DesignWrapper = styled.div`
  width: 100%;
  background-color: #1e1e1e;
`;
const DesignGrid = styled.div`
  top: 0;
  left: 50%;
  position: fixed;
  width: 1px;
  height: 100%;
  background: hsla(0, 0%, 100%, 0.1);
`;
const DesignCont = styled.section`
  z-index: 3;
  background-color: #1e1e1e;
  justify-content: center;
  > h2 {
    font-size: 12em;
    font-family: "Squada One", cursive;
    padding: 2vw 6.25vw 0vw 6.25vw;
  }
`;
const DesignContClone = styled.div`
  width: 100%;
  padding: 0 6.25vw 0vw 6.25vw;
  border-top: 1px solid hsla(0, 0%, 100%, 0.1);
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  box-sizing: border-box;
  display: flex;
  transform: translateY(-60px);
  transition: all 0.5s 0.1s ease-in;
`;
