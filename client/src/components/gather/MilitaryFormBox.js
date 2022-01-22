import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { v1 as uuid } from "uuid";

function MilitaryFormBox({ savingType, controlNameList, item, setFormData }) {
  return (
    <FormBox>
      <SavigType>
        <div className="title">적금방식</div>
        <div className="typeButton">
          {controlNameList.map((name, index) => {
            return (
              <Fragment key={uuid()}>
                <label
                  className={
                    savingType === name
                      ? `isSelect option_${index + 1}`
                      : `option_${index + 1}`
                  }
                  htmlFor={name}
                >
                  {name}
                </label>
                <input
                  type="radio"
                  name="savingType"
                  id={name}
                  value={name}
                  onChange={(e) => {
                    setFormData((preData) => ({
                      ...preData,
                      savingType: e.target.value,
                    }));
                  }}
                />
              </Fragment>
            );
          })}
        </div>
      </SavigType>
      {/* 1. 자동이체 */}
      {/* 2. 자유입금*/}
    </FormBox>
  );
}
const FormBox = styled.div``;

const FormTile = css`
  font-family: "Pretendard-Medium";
  font-size: 14px;
  line-height: 22px;
  color: var(--Title_02);
  text-align: start;
  margin-left: 4px;
  margin-bottom: 4px;
`;
const typeButton = css`
  .typeButton {
    display: flex;
    align-items: center;
    overflow: hidden;

    label {
      display: block;
      width: 50%;
      height: 44px;
      line-height: 44px;
      box-sizing: border-box;
      background: #ffffff;
      border: 1.5px solid var(--Line_02);
      :hover {
        cursor: pointer;
      }
      &.option_1 {
        border-radius: 8px 0 0 8px;
      }
      &.option_2 {
        border-radius: 0 8px 8px 0;
        margin-left: -1.5px;
      }
      &.isSelect {
        z-index: 10;
        border-color: var(--a2);
      }
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
  }
`;
const SavigType = styled.div`
  .title {
    ${FormTile}
  }
  ${typeButton}
`;
export default MilitaryFormBox;
