import React from "react";
import styled, { css } from "styled-components";

const Btn = styled.button`
  width: 100%;
  padding: 12px 0;
  background-color: #e5e5e5;
  border: none;
  border-radius: 12px;
  font-family: "Pretendard-SemiBold";
  font-size: 16px;
  line-height: 25px;
  color: var(--Body_02);

  ${(props) =>
    props.Active === true &&
    css`
      color: #fff;
      background-color: var(--a2);
    `}
`;

function CustomBtn({ active, children }) {
  return (
    <div>
      <Btn Active={active} disabled={!active}>
        {children}
      </Btn>
    </div>
  );
}

export default CustomBtn;
