import React from "react";
import styled from "styled-components";
export const Normal = () => {
  return (
    <TypographyWrapper>
      <HeadingN string="color">Heading</HeadingN>
      <TextN>Text Medium</TextN>
      <Paragraph>
        Paragraph - Small Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Paragraph>
    </TypographyWrapper>
  );
};
const TypographyWrapper = styled.div`
  color: #fff;
  font-family: "Noto Sans KR", sans-serif;
`;
const HeadingN = styled.p`
  font-size: 2.5em;
  font-weight: 500;
  line-height: 40px;
  transform: translateX(30px);
  margin-bottom: 50px;
  ::before {
    content: "";
    width: 15px;
    height: 15px;
    border-radius: 50%;
    display: block;
    position: absolute;
    top: 12px;
    left: -25px;
    background-color: #fff;
  }
`;
const TextN = styled.p`
  font-size: 1.5em;
  line-height: 25px;
`;

const Paragraph = styled.p`
  font-size: 1em;
`;
