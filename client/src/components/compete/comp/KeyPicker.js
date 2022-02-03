import styled from "styled-components";
import Picker from "react-scrollable-picker";
import React from "react";

//[styled comp] : 배팅 키 개수 선택용 디자인
const KeySelctor = styled.div`
  height: 130px;
  padding: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: "Pretendard-SemiBold";
  font-size: 18px;

  .logo {
    margin-bottom: 20px;
  }

  .textbox {
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    .mini {
      color: var(--Title_02);
      font-size: 12px;
      font-family: "Pretendard-Regular";
    }
  }

  img {
    width: 28px;
    margin-left: 20px;
    margin-right: -20px;
  }

  .pickerWrapper {
    width: 66px;
  }
`;

//가능한 옵션 객체
const options = {
  number: [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
  ],
};

/**
 * [comp]
 * KeyPicker
 *
 * [state]
 * none
 *
 * [props]
 * onchange : state 변경용 함수
 * count : keyCount = optionGroups, valueGroups을 가지는 객체
 */
const KeyPicker = (props) => {
  return (
    <KeySelctor>
      <img
        className="logo"
        src={require("assets/compete/key.svg").default}
      ></img>
      <div className="textbox">
        <p>베팅할 열쇠개수</p>
        <p className="mini">(최대 5개)</p>
      </div>
      <div className="pickerWrapper">
        <Picker
          optionGroups={props.count.optionGroups}
          valueGroups={props.count.valueGroups}
          onChange={props.onchange}
          height={150}
        />
      </div>
      <p>개</p>
    </KeySelctor>
  );
};

export { KeyPicker, options };
