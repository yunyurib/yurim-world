import React from "react";
import styled from "styled-components";

export const Small = ({ innerText, isDisabled, size }) => {
  return (
    <TypoWrapper>
      <p>타이틀</p>
      <p>작은타이틀</p>
      <p>내용내용내용</p>
    </TypoWrapper>
  );
};

// Small.defaultProps = {
//   innerText: "button default text",
//   isDisabled: false,
//   size: "medium",
// };

const TypoWrapper = styled.button`
  ${(props) =>
    props.size === "small"
      ? "width: 100px; height:200px"
      : props.size === "medium"
      ? "width: 200px; height:200px"
      : "width: 300px; height:200px"};
`;
