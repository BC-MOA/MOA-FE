import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { styleTitle, styleSubTitle } from "style/common";
import CustomBtn from "../CustomBtn";
import { useLocation } from "react-router-dom";
import moment from "moment";
import { GatherList } from "store/GatherListContext";
import { UserAccount } from "store/UserAccount";

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
    margin-top: 12px;
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

  .check {
    width: 72px;
    height: 72px;
    margin: 0 auto;
  }
`;

const CheckInfo = styled.div`
  position: relative;
  padding: 20px 24px;
  margin-top: 53px;
  background: #fff;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;

  .character {
    position: absolute;
    top: -62px;
    right: 16px;
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

function Complete() {
  const { state } = useLocation();
  const { props, name } = state;

  const { setGatherList } = useContext(GatherList);
  const { inout, interlock } = useContext(UserAccount).userAccount;
  return (
    <Container>
      <Content>
        <img
          alt="성공"
          className="check animate__animated animate__flipInX"
          src={require("assets/goal/check.svg").default}
          data-micron="bounce"
        />
        {name === "목표" ? (
          <>
            <div className="Title">목표를 세웠어요</div>
            <div className="Text">
              {interlock[0].bankName} {interlock[0].accountNumber}에 <br />
              목표 금액이 모아져요.
            </div>
          </>
        ) : (
          <>
            <div className="Title">비상금을 만들었어요</div>
            <div className="Text">
              {interlock[0].bankName} {interlock[0].accountNumber}에 <br />
              비상금이 모아져요.
            </div>
          </>
        )}

        <CheckInfo>
          {name === "목표" && (
            <>
              <InfoEl className="Text">
                <div>목표 이름</div>
                <div className="userInfo">{props.goalName}</div>
              </InfoEl>
              <InfoEl className="Text">
                <div>목표 날짜</div>
                <div className="userInfo">
                  {moment(props.eDate).format("YYYY년 MM월 DD일")}
                </div>
              </InfoEl>
              <InfoEl className="Text">
                <div>
                  {props.depositMethod === "자동이체"
                    ? "자동이체"
                    : "이체 방식"}
                </div>
                <div className="userInfo">
                  {props.limitCycle !== ""
                    ? props.limitCycle
                    : props.depositMethod}
                </div>
              </InfoEl>
            </>
          )}
          <InfoEl className="Text">
            <div>
              {name !== "목표"
                ? "보관"
                : props.amountPerCycle === 0
                ? "목표 "
                : ""}
              금액
            </div>
            <div className="userInfo green">
              {name !== "목표"
                ? props.currentAmount.toLocaleString()
                : props.amountPerCycle === 0
                ? props.goalAmount.toLocaleString()
                : props.amountPerCycle.toLocaleString()}{" "}
              원
            </div>
          </InfoEl>
          <InfoEl className="Text">
            <div>출금계좌</div>
            <div className="userInfo">{inout[0].accountName}</div>
          </InfoEl>
          {name !== "목표" && (
            <InfoEl className="Text">
              <div>출금계좌 예상잔액</div>
              <div className="userInfo">
                {props.account.accountCurrentAmount.toLocaleString()} 원
              </div>
            </InfoEl>
          )}
          <img
            className="character"
            src={require("assets/army_character.svg").default}
            alt="character"
          />
        </CheckInfo>
      </Content>

      <CustomBtn
        addFunc={() => {
          setGatherList((prev) => [...prev, props]);
        }}
        path={"/key"}
        data={{
          num: 3,
          message: `${name}을 개설하셨네요`,
          nextPath: "/gather",
        }}
        active={true}
      >
        확인
      </CustomBtn>
    </Container>
  );
}

export default Complete;
