import React from "react";
import styled, { css } from "styled-components";

const TagBox = styled.div`
  height: fit-content;
  width: fit-content;
  padding: 2px 8px;
  border-radius: 8px;
  font-size: 12px;
  line-height: 19px;
  font-family: "Pretendard-SemiBold";

  ${({ children }) =>
    children === "군적금" &&
    css`
      color: var(--a2);
      background-color: #4caf5b26;
    `}
  ${({ children }) =>
    children === "목표" &&
    css`
      color: var(--subBlue);
      background-color: #28a49d26;
    `}
  ${({ children }) =>
    children === "비상금" &&
    css`
      color: var(--subYellow);
      background-color: #e9af1626;
    `}
`;

function Tag({ children }) {
  return <TagBox>{children}</TagBox>;
}

export default Tag;
