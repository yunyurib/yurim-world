import React from "react";
import styled from "styled-components";
export const Art = () => {
  return (
    <TypographyArtWrapper>
      <HeadingA>
        brand<TextA>Text</TextA>
      </HeadingA>
      <TextEtc>Art Name</TextEtc>
    </TypographyArtWrapper>
  );
};
const TypographyArtWrapper = styled.div`
  margin: 20px;
`;
const HeadingA = styled.p`
  font-size: 6em;
  margin-bottom: 10px;
  color: #fe887c;
  font-family: "Rockness";
  text-transform: uppercase;
`;
const TextA = styled.span`
  font-size: 0.5em;
`;
const TextEtc = styled.span`
  font-size: 6em;
  margin-bottom: 10px;
  color: #fe887c;
  font-family: "Rockness";
  text-transform: capitalize;
`;
