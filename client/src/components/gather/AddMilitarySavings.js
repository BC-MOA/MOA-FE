import BackHeader from "components/common/BackHeader";
import React, { useState } from "react";
import { hideScrollBar } from "style/common";
import styled from "styled-components";
import AvailableSavingList from "./AvailableSavingList";
import ContentControlBtn from "./ContentControlBtn";
function AddMilitarySavings() {
  const controlNameList = ["최고금리순", "기본금리순"];
  const [listControl, setListControl] = useState(controlNameList[0]);
  const [isScrolled, setIsScrolled] = useState(false);

  // todo - api datas
  const userName = "민수";
  const avgApplyNum = 1234;

  return (
    <Container>
      <BackHeader path={"/gather"} isScrolled={isScrolled}></BackHeader>
      <ScrollBox
        onScroll={(e) => {
          let scrollLocation = e.target.scrollTop;
          if (scrollLocation > 70) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        }}
      >
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
          marginBottom="20px"
          listControl={listControl}
          setListControl={setListControl}
          controlNameList={controlNameList}
        ></ContentControlBtn>
        <AvailableSavingList listControl={listControl}></AvailableSavingList>
      </ScrollBox>
    </Container>
  );
}
const Container = styled.div`
  padding: 8px 20px;
  box-sizing: border-box;
  background: var(--Surface);
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const ScrollBox = styled.div`
  ${hideScrollBar}
  height: 100%;
  padding-top: 12px;
  box-sizing: border-box;
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
