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

  option {
    /* padding: 10px; */
  }
`;

function CustomSelect({ name, onChange, accounts }) {
  return (
    <Select name={name} onChange={onChange}>
      {accounts.map((x) => (
        <option value={x.bank} key={x.accountNumber}>
          {x.name}
        </option>
      ))}
    </Select>
  );
}

export default CustomSelect;
