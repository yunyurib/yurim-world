import React from "react";
import styled from "styled-components";

export interface IButtonProps {
  innerText: string,
  isDisabled: boolean,
  size: string
}

export function Button({ innerText, isDisabled, size }: IButtonProps) {
  return (
    <ButtonWrapper type="button" disabled={isDisabled} >
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
  ${(props: any) =>
    props.size === "small"
      ? "width: 100px; height:200px"
      : props.size === "medium"
        ? "width: 200px; height:200px"
        : "width: 300px; height:200px"};
`;
