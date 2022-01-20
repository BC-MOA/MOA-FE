import React from "react";
import styled from "styled-components";

function ContentControlBtn({ controlNameList, listControl, setListControl }) {
  return (
    <ListControlBox>
      {controlNameList.map((name) => {
        return (
          <>
            <label htmlFor={name}>
              <span className={listControl === name ? "isClick" : ""}>
                {name}
              </span>
              <div className={name === listControl ? "clickedBar" : ""}></div>
            </label>
            <input
              type="radio"
              name="listControl"
              id={name}
              value={name}
              onChange={(e) => {
                setListControl(e.target.value);
              }}
            />
          </>
        );
      })}
    </ListControlBox>
  );
}
const ListControlBox = styled.div`
  display: flex;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  line-height: 25px;
  color: var(--Body_02);
  margin-bottom: 20px;
  label {
    width: 77px;
    margin-right: calc(10 / 375 * 100vw);
    :last-child {
      margin-right: 0px;
    }
    :hover {
      cursor: pointer;
    }
    span.isClick {
      font-family: "Pretendard-SemiBold";
      font-size: calc(16rem / 16);
      line-height: 25px;
      color: var(--Title_02);
      z-index: 1px;
    }
  }
  .clickedBar {
    margin-top: -9px;
    height: 9px;
    background: var(--a3);
    opacity: 0.5;
    border-radius: 2px;
    z-index: -1;
  }
  input[type="radio"] {
    margin: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: none;
  }
`;
export default ContentControlBtn;
