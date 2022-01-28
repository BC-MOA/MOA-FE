import React from "react";
import styled from "styled-components";
import Tag from "components/common/Tag";
import CustomBtn from "./addGoal/CustomBtn";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import { calc_dDay, calc_days } from "components/gather/addGoal/utils";
import moment from "moment";

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

function DetailCard({ gatherInfo }) {
  return (
    <Content>
      <Info>
        <Tag>{gatherInfo.category}</Tag>
        <div className="current">
          <span className="number">
            {gatherInfo.currentAmount.toLocaleString()}
          </span>{" "}
          원
        </div>
        <div className="text">
          {gatherInfo.account.name}
          <span className="number">{gatherInfo.account.number}</span>
        </div>
        {gatherInfo.category !== "비상금" && (
          <div
            className={
              gatherInfo.category === "군적금" ? "text green" : "text blue"
            }
          >
            목표금액{" "}
            <span className="number l_space bold">
              {gatherInfo.targetAmount.toLocaleString()}
            </span>{" "}
            원
          </div>
        )}
      </Info>
      {gatherInfo.category !== "비상금" ? (
        <>
          <div className="progressbar">
            <ProgressBar
              percent={20}
              filledBackground={
                gatherInfo.category === "군적금"
                  ? "var(--a2)"
                  : "var(--subBlue)"
              }
              unfilledBackground="#EBEBEB"
              height="12px"
            />
            <div className="dateInfo">
              <span>신규일</span>
              <span>만기일</span>
            </div>
            <div className="dateInfo number">
              <span>{moment(gatherInfo.sDate).format("YYYY.MM.DD")}</span>
              <span>{moment(gatherInfo.eDate).format("YYYY.MM.DD")}</span>
            </div>
          </div>
          <CustomBtn
            padding={8}
            active={true}
            bgcolor={gatherInfo.category === "목표" ? "var(--Blue)" : ""}
          >
            입금하기
          </CustomBtn>
        </>
      ) : (
        <SafeBtns>
          <CustomBtn
            padding={8}
            active={true}
            bgcolor="#EAAC0B"
            path="additional-safebox"
          >
            모으기
          </CustomBtn>
          <CustomBtn padding={8}>꺼내기</CustomBtn>
        </SafeBtns>
      )}
    </Content>
  );
}

export default DetailCard;
