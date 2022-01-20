import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { backButtonBox } from "style/common";
import styled from "styled-components";
import AvailableSavingList from "./AvailableSavingList";

function AddMilitarySavings() {
  const history = useNavigate();
  const [listControl, setListControl] = useState("최고금리순");
  // todo - api datas
  const userName = "민수";
  const avgApplyNum = 1234;

  return (
    <Container>
      <BackButton
        onClick={() => {
          history(-1);
        }}
      >
        <img
          src={require("assets/gather/ic_back.svg").default}
          alt="뒤로가기"
        />
      </BackButton>
      <MessageBox>
        <div className="title">
          <span>{userName}님이 가입 가능한</span>
          <span>군적금 상품들이에요.</span>
        </div>
        <div className="notice">
          <span>이번달 새로 군적금을 신청한 장병은 </span>
          <span className="noticeBold">{avgApplyNum.toLocaleString()}</span>
          <span> 명 입니다.</span>
        </div>
      </MessageBox>
      <ListControlBox>
        <label htmlFor="최고금리순">
          <span className={"최고금리순" === listControl ? "isClick" : ""}>
            최고금리순
          </span>
          <div
            className={"최고금리순" === listControl ? "clickedBar" : ""}
          ></div>
        </label>
        <input
          type="radio"
          name="listControl"
          id="최고금리순"
          value="최고금리순"
          checked="checked"
          onChange={(e) => {
            setListControl(e.target.value);
          }}
        />

        <label htmlFor="기본금리순">
          <span className={"기본금리순" === listControl ? "isClick" : ""}>
            기본금리순
          </span>
          <div
            className={"기본금리순" === listControl ? "clickedBar" : ""}
          ></div>
        </label>
        <input
          type="radio"
          name="listControl"
          id="기본금리순"
          value="기본금리순"
          onChange={(e) => {
            setListControl(e.target.value);
          }}
        />
      </ListControlBox>
      <AvailableSavingList></AvailableSavingList>
    </Container>
  );
}
const Container = styled.div`
  margin: 8px 20px;
`;
const BackButton = styled.div`
  ${backButtonBox}
  margin-bottom:12px;
`;
const MessageBox = styled.div`
  margin-bottom: 24px;
  .title {
    font-family: "Pretendard-SemiBold";
    font-size: 21px;
    line-height: 33px;
    color: var(--Title_01);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 4px;
  }
  .notice {
    font-family: "Pretendard-Regular";
    font-size: 14px;
    line-height: 22px;
    color: var(--Body_01);

    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .noticeBold {
    font-family: "Pretendard-Medium";
    font-size: 16px;
    line-height: 25px;
    margin: 0 2px;
    color: var(--Title_02);
  }
`;

const ListControlBox = styled.div`
  display: flex;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  line-height: 25px;
  color: var(--Body_02);
  margin-bottom: 20px;
  label {
    width: 77px;
    margin-right: 10px;
    :last-child {
      margin-right: 0px;
    }
    :hover {
      cursor: pointer;
    }
    span.isClick {
      font-family: "Pretendard-SemiBold";
      font-size: 16px;
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

export default AddMilitarySavings;
