import React from "react";
import styled from "styled-components";
import Tag from "components/common/Tag";
import CustomBtn from "components/gather/addGoal/CustomBtn";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import { calc_dDay } from "components/gather/addGoal/utils";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import SpeechBubble from "./SpeechBubble";

const Content = styled.div`
  margin: 12px 0 32px;
  background-color: #fff;
  padding: 24px 20px;
  box-shadow: 0px 1px 2px rgba(148, 74, 74, 0.08);
  border-radius: 12px;

  .current {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 4px;
    font-family: "Pretendard-SemiBold";
    font-size: 21px;
    line-height: 33px;
    color: var(--Title_01);

    .number {
      font-size: 24px;
      line-height: 38px;
      font-weight: 700;
    }
  }
  .text {
    display: flex;
    gap: 2px;
    font-size: 14px;
    line-height: 22px;
    color: var(--Body_02);
    font-family: "Pretendard-Regular";

    &.green {
      margin-top: 20px;
      color: var(--a2);
    }
    &.blue {
      margin-top: 20px;
      color: var(--subBlue);
    }
  }
  .l_space {
    margin-left: 2px;
  }
  .bold {
    font-weight: 500;
  }

  .progressbar {
    position: relative;
    padding-top: 33px;
    margin: 16px 0 32px;
  }
  .dateInfo {
    margin-top: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    line-height: 19px;
    font-family: "Pretendard-Regular";
    color: var(--Body_01);

    &.number {
      margin: 0;
    }
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .setGoalName {
    display: flex;
    align-items: center;
    margin-top: 8px;
    cursor: pointer;

    font-family: "Pretendard-Regular";
    font-size: 12px;
    line-height: 19px;
    color: var(--Body_01);
  }
`;

const SafeBtns = styled.div`
  margin-top: 48px;
  display: flex;
  gap: 7px;
  width: 100%;

  .button {
    flex: 1;
  }
`;

function DetailCard({ props }) {
  const history = useNavigate();

  return (
    <Content>
      <Info>
        <Tag>{props.savingMode}</Tag>
        <div className="current">
          <span className="number">{props.currentAmount.toLocaleString()}</span>{" "}
          ???
        </div>
        <div className="text">
          {props.account.bankName}
          <span className="number">{props.account.accountNumber}</span>
        </div>
        {props.savingMode === "?????????" && props.goalName === "" && (
          <div
            className="setGoalName"
            onClick={() => {
              history("edit-goal", {
                state: props,
              });
            }}
          >
            ?????? ????????????{" "}
            <img
              src={require("assets/gather/ic_shortcut.svg").default}
              alt="?????? ???????????? ?????? ?????????"
            />
          </div>
        )}
        {props.savingMode !== "?????????" && (
          <div
            className={
              props.savingMode === "?????????" ? "text green" : "text blue"
            }
          >
            ????????????{" "}
            <span className="number l_space bold">
              {props.goalAmount.toLocaleString()}
            </span>{" "}
            ???
          </div>
        )}
      </Info>
      {props.savingMode !== "?????????" ? (
        <>
          <div className="progressbar">
            <SpeechBubble
              position={
                props.currentAmount < props.goalAmount
                  ? (props.currentAmount / props.goalAmount) * 100
                  : 100
              }
            >
              D-{calc_dDay(props.eDate)}
            </SpeechBubble>
            <ProgressBar
              percent={
                props.currentAmount < props.goalAmount
                  ? (props.currentAmount / props.goalAmount) * 100
                  : 100
              }
              filledBackground={
                props.savingMode === "?????????" ? "var(--a2)" : "var(--subBlue)"
              }
              unfilledBackground="#EBEBEB"
              height="12px"
            />
            <div className="dateInfo">
              <span>?????????</span>
              <span>?????????</span>
            </div>
            <div className="dateInfo number">
              <span>{moment(props.sDate).format("YYYY.MM.DD")}</span>
              <span>{moment(props.eDate).format("YYYY.MM.DD")}</span>
            </div>
          </div>
          <CustomBtn
            padding={8}
            active={true}
            bgcolor={props.savingMode === "??????" ? "var(--Blue)" : ""}
            path="additional-deposit"
            data={props}
          >
            ????????????
          </CustomBtn>
        </>
      ) : (
        <SafeBtns>
          <CustomBtn
            padding={8}
            active={true}
            bgcolor="#EAAC0B"
            path="take-in-safebox"
            data={{ props: props, usage: "takeIn" }}
          >
            ?????????
          </CustomBtn>
          <CustomBtn
            padding={8}
            active={true}
            bgcolor="var(--Line_03)"
            txtcolor="var(--Body_02)"
            path="take-out-safebox"
            data={{ props: props, usage: "takeOut" }}
          >
            ?????????
          </CustomBtn>
        </SafeBtns>
      )}
    </Content>
  );
}

export default DetailCard;
