import React from "react";
import styled, { css } from "styled-components";
import { ReactComponent as CheckIcon } from "assets/ic_input_check.svg";

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
    &::placeholder {
      color: var(--Line_01);
    }
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
  .checkable {
    position: absolute;
    right: 16px;

    &.checked {
      path.main {
        fill: var(--a2);
      }
    }
  }
`;

function CustomInput({
  name,
  type,
  placeholder,
  value,
  unit,
  disabled,
  onChange,
  checkable,
  checked,
}) {
  return (
    <InputBox>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
      {unit ? <span className="unit">{unit}</span> : <></>}
      {checkable ? (
        <CheckIcon className={checked ? "checkable checked" : "checkable"} />
      ) : (
        <></>
      )}
    </InputBox>
  );
}

export default CustomInput;
