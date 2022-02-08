import React, { useContext } from "react";
import styled from "styled-components";
import { styleTitle, styleSubTitle } from "style/common";
import CustomBtn from "components/gather/addGoal/CustomBtn";
import { useLocation } from "react-router-dom";
import moment from "moment";
import { GatherList } from "store/GatherListContext";

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
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  z-index: 1;
  margin-top: 112px;

  .check {
    width: 72px;
    height: 72px;
    margin: 0 auto;
  }
`;

const CheckInfo = styled.div`
  position: relative;
  padding: 20px 24px;
  margin-top: 80px;
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
    ${styleSubTitle}
    font-family: "Pretendard-Regular";
    color: var(--Body_01);
    padding-top: 8px;

    &:first-child {
      padding-top: 0;
    }

    .bold {
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

function AdditionalComplete() {
  const { state } = useLocation();
  const { props, inOutMoney } = state;
  const { setGatherList } = useContext(GatherList);
  const trFormat = (props, input) => {
    const formatted = {
      date: moment(new Date()).format("MM월 DD일"),
      name: props.account.bankName,
      time: moment(new Date()).format("hh:mm"),
      amount: input,
      // Todo: 추가 입금 시, 잔액 처리
      total: Number(props.currentAmount) + Number(input),
    };

    return formatted;
  };
  return (
    <Container>
      <Content>
        <img
          alt="성공"
          className="check animate__animated animate__flipInX"
          src={require("assets/goal/check.svg").default}
          data-micron="bounce"
        />
        <div className="Title">
          {props.savingMode === "비상금"
            ? inOutMoney > 0
              ? "비상금을 모았어요"
              : "비상금을 꺼냈어요"
            : "추가입금을 했어요"}
        </div>

        <CheckInfo>
          <InfoEl className="Text">
            <div>{inOutMoney > 0 ? "입금금액" : "꺼낸 금액"}</div>
            <div className="bold green">
              {Number(inOutMoney).toLocaleString()} 원
            </div>
          </InfoEl>
          <InfoEl className="Text">
            <div>{inOutMoney > 0 ? "출금계좌" : "입금계좌"}</div>
            <div className="bold">{props.account.bankName}</div>
          </InfoEl>
          <InfoEl className="Text">
            <div>총 금액</div>
            <div className="bold">
              {(
                Number(props.currentAmount) + Number(inOutMoney)
              ).toLocaleString()}{" "}
              원
            </div>
          </InfoEl>
          <img
            className="character"
            src={require("assets/army_character.svg").default}
            alt="character"
          />
        </CheckInfo>
      </Content>
      <CustomBtn
        active={true}
        addFunc={() => {
          props.transactions.push(trFormat(props, inOutMoney));
          props.currentAmount =
            Number(props.currentAmount) + Number(inOutMoney);
          setGatherList((prevList) =>
            prevList.map((x) =>
              x.goalName === props.goalName
                ? {
                    ...x,
                    currentAmount: Number(x.currentAmount) + Number(inOutMoney),
                    transactions: [
                      ...x.transactions,
                      trFormat(props, inOutMoney),
                    ],
                  }
                : x
            )
          );
        }}
        path="/gather/detail"
        data={props}
      >
        확인
      </CustomBtn>
    </Container>
  );
}

export default AdditionalComplete;
