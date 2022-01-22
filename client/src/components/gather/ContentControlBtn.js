import React, { Fragment } from "react";
import styled from "styled-components";
import { v1 as uuid } from "uuid";

function ContentControlBtn({
  marginBottom,
  controlNameList,
  listControl,
  setListControl,
  btnGap,
}) {
  return (
    <ListControlBox btnGap={btnGap} marginBottom={marginBottom}>
      {controlNameList.map((name) => {
        return (
          <Fragment key={uuid()}>
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
          </Fragment>
        );
      })}
    </ListControlBox>
  );
}
ContentControlBtn.defaultProps = {
  btnGap: "10px",
};
const ListControlBox = styled.div`
  display: flex;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  line-height: 25px;
  color: var(--Body_02);
  margin-bottom: ${(props) => props.marginBottom};
  label {
    padding: 0 4px 0;
    margin-right: ${(props) => props.btnGap};
    display: flex;
    flex-direction: column;
    align-items: center;
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
    }
  }
  .clickedBar {
    width: 100%;
    padding: 0 4px;
    margin-top: -9px;
    height: 9px;
    background: var(--a3);
    opacity: 0.5;
    border-radius: 2px;
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
