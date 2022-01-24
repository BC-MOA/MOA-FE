import React from "react";
import styled from "styled-components";

function SubmitButton({ title, onClickFunc, isActive }) {
  return (
    <Button
      disabled={!isActive}
      className={isActive ? "isActive" : ""}
      onClick={onClickFunc}
    >
      {title}
    </Button>
  );
}

const Button = styled.button`
  width: 100%;
  padding: 12px 0;
  border: none;
  border-radius: 12px;
  font-family: "Pretendard-SemiBold";
  font-size: 16px;
  line-height: 25px;
  color: var(--Body_03);
  background-color: var(--Line_02);
  &.isActive {
    background-color: var(--a2);
    color: #fff;
  }
`;
export default SubmitButton;
