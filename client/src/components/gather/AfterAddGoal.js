import React from "react";
import styled, { css } from "styled-components";
import { styleTitle, styleSubTitle } from "style/common";
import CustomBtn from "./CustomBtn";
import { useLocation } from "react-router-dom";
import moment from "moment";

const styleText = css`
  ${styleSubTitle}
  font-family: "Pretendard-Regular";
  color: var(--Body_01);
  padding-top: 8px;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .Title {
    ${styleTitle}
    font-size: 24px;
    line-height: 38px;
  }
  .Text {
    ${styleText}
  }
`;

const Content = styled.div`
  padding-bottom: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
`;

const CheckInfo = styled.div`
  position: relative;
  padding: 20px 24px;
  margin-top: 53px;
  background: #fff;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;

  img {
    position: absolute;
    top: -64px;
    right: 6px;
    z-index: -1;
  }

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
  const { state: userInfo } = useLocation();
  const accountInfo = {
    Bank: "KB국민",
    Account: "123-456-78-970111",
  };

  return (
    <Container>
      <Content>
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
            <div className="userInfo">
              {moment(userInfo.deadline).format("YYYY년 MM월 DD일")}
            </div>
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
          <img src={require("assets/goal/army_character.svg").default} />
        </CheckInfo>
      </Content>

      <CustomBtn path={"/home"} active={true}>
        확인
      </CustomBtn>
    </Container>
  );
}

export default AfterAddGoal;
