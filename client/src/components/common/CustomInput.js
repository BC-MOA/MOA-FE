import React from "react";
import styled, { css } from "styled-components";

const InputBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    font-family: "Pretendard-Regular";
    font-size: 16px;
    line-height: 25px;
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    border-radius: 8px;
    border: none;
    padding: 10px 30px 10px 16px;
    color: var(--Title_01);

    &:disabled {
      background-color: #ebebeb;
    }
  }
  .unit {
    position: absolute;
    right: 16px;
    font-family: "Pretendard-Regular";
    font-size: 16px;
    line-height: 25px;
    color: var(--Body_01);
  }
`;

function CustomInput({
  name,
  placeholder,
  pBlack,
  value,
  unit,
  disabled,
  onChange,
}) {
  return (
    <InputBox>
      <input
        className={pBlack ? "pBlack" : ""}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
      {unit ? <span className="unit">{unit}</span> : <></>}
    </InputBox>
  );
}

export default CustomInput;
