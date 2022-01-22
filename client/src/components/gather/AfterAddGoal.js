import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { styleTitle, styleSubTitle } from "style/common";
import CustomBtn from "./CustomBtn";
import { useLocation } from "react-router-dom";

const styleText = css`
  ${styleSubTitle}
  font-family: "Pretendard-Regular";
  color: var(--Body_01);
  padding-top: 8px;
`;
const Container = styled.div`
  .Title {
    ${styleTitle}
    font-size: 24px;
    line-height: 38px;
  }
  .Text {
    ${styleText}
  }
`;

const CheckInfo = styled.div`
  padding: 20px 24px;
  margin-top: 53px;
  background: #fff;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;

  .Text {
    ${styleText}

    &:first-child {
      padding-top: 0;
    }

    .userInfo {
      color: var(--Title_02);
      font-family: "Pretendard-Medium";
      &.green {
        color: var(--a2);
      }
    }
  }
`;

const InfoEl = styled.div`
  display: flex;
  justify-content: space-between;
`;

function AfterAddGoal() {
  // const { inputs } = useContext(GoalContext);
  // const { userInfo } = useLocation();
  // const { name, deadline, depositMethod, howOften, amount, account } = userInfo;
  const userInfo = {
    account: "NH농협",
    amount: "100000",
    category: "여행",
    deadline: "2023. 02. 23",
    depositMethod: "자동이체",
    howOften: "매월 10일",
    name: "유럽여행",
    targetAmount: 1300000,
  };
  const accountInfo = {
    Bank: "KB국민",
    Account: "123-456-78-970111",
  };

  return (
    <Container>
      <div className="Title">목표를 세웠어요</div>
      <div className="Text">
        {accountInfo.Bank} {accountInfo.Account}에 <br />
        목표 금액이 모아져요.
      </div>
      <CheckInfo>
        <InfoEl className="Text">
          <div>목표 이름</div>
          <div className="userInfo">{userInfo.name}</div>
        </InfoEl>
        <InfoEl className="Text">
          <div>목표 이루는 날</div>
          <div className="userInfo">{userInfo.deadline}</div>
        </InfoEl>
        <InfoEl className="Text">
          <div>{userInfo.depositMethod}</div>
          <div className="userInfo">{userInfo.howOften}</div>
        </InfoEl>
        <InfoEl className="Text">
          <div>금액</div>
          <div className="userInfo green">{userInfo.amount} 원</div>
        </InfoEl>
        <InfoEl className="Text">
          <div>출금계좌</div>
          <div className="userInfo">{userInfo.account}</div>
        </InfoEl>
      </CheckInfo>

      <CustomBtn path={"/home"} active={true}>
        확인
      </CustomBtn>
    </Container>
  );
}

export default AfterAddGoal;
