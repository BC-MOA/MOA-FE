import React from "react";
import { useNavigate } from "react-router-dom";
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

function CustomBtn({ path, data, active, children }) {
  const history = useNavigate();
  return (
    <div>
      <Btn
        Active={active}
        disabled={!active}
        onClick={() => {
          history(path, {
            state: data,
          });
        }}
      >
        {children}
      </Btn>
    </div>
  );
}

export default CustomBtn;