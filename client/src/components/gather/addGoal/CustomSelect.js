import React from "react";
import styled from "styled-components";

const Select = styled.select`
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  border-radius: 8px;
  border: none;
  padding: 12.1px 16px;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  line-height: 25px;
  color: var(--Title_01);
  background: ${(props) =>
    `url(${props.bgUrl})no-repeat #fff 97% 50%/16px auto;`};
  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  ::-ms-expand {
    display: none; /*for IE10,11*/
  }
  &:not(.selected) {
    color: var(--Line_01);
  }
  option {
    color: var(--Title_01);
  }
`;

function CustomSelect({ name, onChange, accounts, selected }) {
  const bgUrl = require("assets/gather/ic_select_arrow.svg").default;

  return (
    <>
      <Select
        name={name}
        className={selected !== "" ? "selected" : ""}
        onChange={onChange}
        bgUrl={bgUrl}
        value={selected}
      >
        <option value="" disabled hidden>
          출금계좌를 선택해주세요
        </option>
        {accounts.map((x) => (
          <option value={x.bankName} key={x.id}>
            {x.accountName}
          </option>
        ))}
      </Select>
    </>
  );
}

export default CustomSelect;
