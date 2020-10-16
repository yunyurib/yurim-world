import React from "react";
import styled from "styled-components";

export const Button = ({ innerText, isDisabled, size }) => {
  return (
    <ButtonWrapper type="button" disabled={isDisabled} size={size}>
      {innerText}
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  innerText: "button default text",
  isDisabled: false,
  size: "medium",
};

const ButtonWrapper = styled.button`
  ${(props) =>
    props.size === "small"
      ? "width: 100px; height:200px"
      : props.size === "medium"
      ? "width: 200px; height:200px"
      : "width: 300px; height:200px"};
`;
