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

  ${({ active }) =>
    active === true &&
    css`
      color: #fff;
      background-color: var(--a2);
    `}

  ${({ Padding }) => css`
    /* padding: ${Padding}px 0;
    color: red;
    font-family: "Pretendard-Regular"; */
  `}
  ${({ bgcolor }) =>
    css`
      background-color: ${bgcolor};
    `}
  ${({ txtcolor }) =>
    css`
      color: ${txtcolor};
    `}
`;

function CustomBtn({
  path,
  data,
  active,
  children,
  padding,
  bgcolor,
  txtcolor,
  addFunc,
}) {
  const history = useNavigate();
  return (
    <Btn
      active={active}
      disabled={!active}
      onClick={() => {
        {
          addFunc && addFunc();
        }
        {
          path &&
            history(path, {
              state: data,
            });
        }
      }}
      Padding={padding}
      bgcolor={bgcolor}
      txtcolor={txtcolor}
    >
      {children}
    </Btn>
  );
}

export default CustomBtn;
