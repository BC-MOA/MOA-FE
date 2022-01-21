import React from "react";
import styled, { css } from "styled-components";

const Btn = styled.button`
  width: 100%;
  padding: 12px 0;
  background-color: var(--a2);
  border: none;
  border-radius: 12px;
  font-family: "Pretendard-SemiBold";
  font-size: 16px;
  line-height: 25px;
  color: #fff;

  ${(props) =>
    props.inActive &&
    css`
      color: var(--Body_02);
      background-color: #e5e5e5;
    `}
`;

function Button({ props, children }) {
  return <Btn props>{children}</Btn>;
}

export default Button;
