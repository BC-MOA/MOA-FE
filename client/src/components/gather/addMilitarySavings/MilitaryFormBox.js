import React, { Fragment, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { v1 as uuid } from "uuid";
import MilitaryAutoSavingForm from "./MilitaryAutoSavingForm";
import MilitaryFreeSavingForm from "./MilitaryFreeSavingForm";

function MilitaryFormBox({
  resetFormData,
  savingType,
  controlNameList,
  savingData,
  formData,
  userAccountList,
  setFormData,
}) {
  const [monthOptions, setMonthOptions] = useState([]);
  // todo - 유저 만기일로 남은 날 계산해서 값 바꾸기
  const userSavingMonth = [6, 9];
  useEffect(() => {
    const dropDownOptions = [];
    for (let index = 0; index < userSavingMonth[1]; index++) {
      const month = userSavingMonth[0] + index;
      dropDownOptions.push(`${month}`);
    }
    setMonthOptions(dropDownOptions);
  }, []);

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
                    resetFormData(e.target.value);
                  }}
                />
              </Fragment>
            );
          })}
        </div>
      </SavigType>
      {/* 1. 자동이체 */}
      <MilitaryAutoSavingForm
        formData={formData}
        setFormData={setFormData}
        userAccountList={userAccountList}
        userMonthOptions={monthOptions}
        savingType={savingType}
        savingData={savingData}
      />
      {/* 2. 자유입금*/}
      <MilitaryFreeSavingForm
        formData={formData}
        setFormData={setFormData}
        userAccountList={userAccountList}
        userMonthOptions={monthOptions}
        savingType={savingType}
        savingData={savingData}
      />
    </FormBox>
  );
}
const MessageStyle = css`
  .message {
    text-align: start;
    font-family: "Pretendard-Regular";
    font-size: 12px;
    line-height: 19px;
    margin-left: 4px;
    color: var(--Body_01);
    margin-bottom: 24px;
    .bold {
      color: var(--Title_02);
    }
    .roboto {
      font-family: "Roboto";
      font-size: 13px;
    }
  }
`;
const FormTile = css`
  font-family: "Pretendard-Medium";
  font-size: 14px;
  line-height: 22px;
  color: var(--Title_02);
  text-align: start;
  margin-left: 4px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
const InputBox = css`
  display: flex;
  justify-content: space-between;
  padding-right: 16px;
  align-items: center;
  font-family: "Roboto";
  font-size: 16px;
  line-height: 25px;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 8px;
  margin-bottom: 8px;
  color: var(--Title_01);
  input {
    padding: 10px 0 10px 16px;
    border: none;
    flex-grow: 1;
    ::placeholder {
      font-family: "Pretendard-Regular";
      color: var(--Line_01);
      opacity: 1;
    }
    :-ms-input-placeholder {
      font-family: "Pretendard-Regular";
      /* Internet Explorer 10-11 */
      color: red;
    }

    ::-ms-input-placeholder {
      font-family: "Pretendard-Regular";
      /* Microsoft Edge */
      color: red;
    }
  }
  .unit {
    font-family: "Pretendard-Regular";
    color: var(--Body_01);
  }
`;
const InterestBox = css`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  .boxItem {
    display: flex;
    flex-direction: column;
    align-items: start;
    .boxNum {
      font-family: "Pretendard-Medium";
      font-size: 18px;
      line-height: 28px;
      margin-left: 4px;
      color: var(--Title_01);
      .green {
        color: var(--a2);
        display: inline-block;
        text-align: start;
      }
      .empty {
        min-width: 80px;
        text-align: end;
      }
      .roboto {
        font-family: "Roboto";
        font-weight: 500;
      }
    }
  }
`;
const FormBox = styled.div`
  ${MessageStyle}
  .title {
    ${FormTile}
    .green {
      color: var(--a2);
    }
  }
  .inputBox {
    ${InputBox}
  }
  .interestBox {
    margin-top: 8px;
    margin-bottom: 32px;
    ${InterestBox};
  }
`;
const SavigType = styled.div`
  margin-bottom: 8px;
  ${typeButton}
`;
export default MilitaryFormBox;
