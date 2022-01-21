import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function SubmitButton({ title, path }) {
  const history = useNavigate();
  return (
    <Button
      onClick={() => {
        history({ path });
      }}
    >
      {title}
    </Button>
  );
}

const Button = styled.button`
  width: 100%;
  padding: 12px 0;
  background-color: var(--a2);
  border: none;
  border-radius: 12px;
  font-family: "Pretendard-SemiBold";
  font-size: 16px;
  line-height: 25px;
  color: #fff;
`;
export default SubmitButton;
