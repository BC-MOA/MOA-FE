import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { backButtonBox } from "style/common";
import styled from "styled-components";
import AvailableSavingList from "./AvailableSavingList";
import ContentControlBtn from "./ContentControlBtn";
function AddMilitarySavings() {
  const history = useNavigate();
  const controlNameList = ["최고금리순", "기본금리순"];
  const [listControl, setListControl] = useState(controlNameList[0]);

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
      <ContentControlBtn
        listControl={listControl}
        setListControl={setListControl}
        controlNameList={controlNameList}
      ></ContentControlBtn>
      <AvailableSavingList listControl={listControl}></AvailableSavingList>
    </Container>
  );
}
const Container = styled.div`
  padding: 8px 20px;
  box-sizing: border-box;
  background: #f8f8f8;
`;
const BackButton = styled.div`
  ${backButtonBox}
  margin-bottom:12px;
`;
const MessageBox = styled.div`
  margin-bottom: 24px;
  .title {
    font-family: "Pretendard-SemiBold";
    font-size: calc(21rem / 16);
    line-height: 33px;
    color: var(--Title_01);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 4px;
  }
  .notice {
    font-family: "Pretendard-Regular";
    font-size: calc(14rem / 16);
    line-height: 22px;
    color: var(--Body_01);

    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .noticeBold {
    font-family: "Pretendard-Medium";
    font-size: calc(16rem / 16);
    line-height: 25px;
    margin: 0 2px;
    color: var(--Title_02);
  }
`;

export default AddMilitarySavings;
