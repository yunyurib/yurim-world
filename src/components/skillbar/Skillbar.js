import React from "react";
import styled from "styled-components";

export const Skillbar = () => {
  return (
    <TypographyWrapper>
      <fifi></fifi>
    </TypographyWrapper>
  );
};
const TypographyWrapper = styled.div`
  width: 255px;
  height: 5px;
  background-color: #ede6d3;
  position: relative;
`;

const fifi = styled.div`
  width: 30%;
  height: 100%;
  background-color: aquamarine;
  position: absolute;
  left: 0;
`;
