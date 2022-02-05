import React from "react";
import styled, { css } from "styled-components";
import { styleCustomInput } from "style/common";
import { ReactComponent as CheckIcon } from "assets/ic_input_check.svg";

const InputBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  &.plusPaddingRight {
    input {
      padding-right: 30px;
    }
  }

  input {
    ${styleCustomInput}
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
  id,
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
    <InputBox className={unit || checkable ? "plusPaddingRight" : ""}>
      <input
        id={id}
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
