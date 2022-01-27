import React from "react";
import { v1 as uuid } from "uuid";
import styled from "styled-components";

function Dropdown({ valueName, options, selectValue, setValue, placeHolder }) {
  const bgUrl = require("assets/gather/ic_select_arrow.svg").default;
  return (
    <DropdownBox
      onChange={(e) => {
        setValue((preData) => ({ ...preData, [valueName]: e.target.value }));
      }}
      className={selectValue !== "" ? "isSelect" : ""}
      bgUrl={bgUrl}
      name="Dropdown"
      value={selectValue}
    >
      <option value="" disabled hidden>
        {placeHolder}
      </option>
      {options.map((item) => (
        <option value={item} key={uuid()}>
          {item}
        </option>
      ))}
    </DropdownBox>
  );
}

const DropdownBox = styled.select`
  width: 100%;
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  line-height: 25px;
  color: var(--Line_01);
  background: ${(props) =>
    `url(${props.bgUrl})no-repeat #fff 97% 50%/16px auto;`};
  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  ::-ms-expand {
    display: none; /*for IE10,11*/
  }
  :hover {
    cursor: pointer;
  }
  &.isSelect {
    color: var(--Title_02);
  }
  option {
    color: var(--Title_02);
  }
`;
export default Dropdown;
