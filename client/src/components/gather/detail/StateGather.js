import React from "react";
import styled, { css } from "styled-components";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import Tag from "components/common/Tag";
import StoreSvg from "components/gather/addGoal/StoreSvg";
import { useNavigate } from "react-router-dom";
import { calc_dDay, calc_days } from "components/gather/addGoal/utils";

const Container = styled.div`
  position: relative;
  margin: 0 -4px;
  height: fit-content;
  padding: 20px 0 12px;
  cursor: pointer;

  box-sizing: border-box;
  background-color: #fff;

  .safebox {
    padding: 20px 0;
  }

  ${({ completed }) =>
    completed === true &&
    css`
      pointer-events: none;
      padding: 20px 20px 12px;
      margin: 0;
      border-radius: 12px;
      & + & {
        margin-top: 16px;
      }
    `}
  ${({ completed }) =>
    completed !== true &&
    css`
      & + & {
        margin-top: 4px;
      }
      &:last-child {
        padding-bottom: 0;
        &.safebox {
          padding-bottom: 4px;
        }
      }
    `};
`;

const CompleteState = styled.div`
  font-family: "Pretendard-Medium";
  font-size: 12px;
  line-height: 19px;
  position: absolute;
  top: 45px;
  left: 72px;

  &.success {
    color: #4caf5b;
  }
  &.fail {
    color: var(--alert);
  }
`;
const Content = styled.div`
  ${({ completed }) =>
    completed === true &&
    css`
      filter: grayscale(100%);
    `}
`;

const Main = styled.div`
  display: flex;
  font-family: "Pretendard-SemiBold";
  color: #333333;
  font-size: 16px;
  line-height: 25px;

  .content {
    flex: 1;
    overflow: hidden;
    text-align: left;
    .name {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .dDay {
    font-family: Roboto;
    font-size: 12px;
    line-height: 19px;
    color: #212121;
    &.none {
      visibility: hidden;
    }
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 12px;
  background: #f8f8f8;
  border-radius: 10.2698px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ category }) =>
    category === "목표"
      ? css`
          path.main {
            fill: #28a49d;
          }
        `
      : category === "비상금"
      ? css`
          path.main {
            fill: #f8cb57;
          }
        `
      : css`
          path.main {
            fill: #4caf5b;
          }
        `}
`;

const State = styled.div`
  .progressbar {
    margin: 17px 0 8px;
  }
  .amount {
    display: flex;
    justify-content: space-between;

    font-size: 12px;
    line-height: 19px;
    font-family: "Pretendard-Medium";
    color: var(--Body_02);

    .currentAmount {
      display: flex;
      gap: 2px;
    }
    .targetAmount {
      display: flex;
      gap: 2px;
    }
    span {
      font-family: Roboto;
      font-weight: 500;
    }
    .blackNum {
      color: var(--Title_02);
    }
  }
`;

function StateGather({ props, completed }) {
  const history = useNavigate();
  return (
    <Container
      className={props.savingMode === "비상금" ? "safebox" : ""}
      category={props.savingMode}
      completed={completed}
      onClick={() => {
        history("detail", {
          state: props,
        });
      }}
    >
      <Content completed={completed}>
        <Main>
          <Icon category={props.savingMode}>
            {props.category ? (
              <StoreSvg category={props.category} />
            ) : props.savingMode === "군적금" ? (
              // Todo: 군적금 - 은행 로고로 이미지 바꾸기
              <StoreSvg category="군적금" />
            ) : (
              <StoreSvg category="비상금" />
            )}
          </Icon>
          <div className="content">
            <div className="name">
              {props.goalName ? props.goalName : props.account.productName}
            </div>
            {props.savingMode !== "비상금" && (
              <div className={completed ? "dDay none" : "dDay"}>
                D-{calc_dDay(props.eDate)}
              </div>
            )}
            {props.savingMode === "비상금" && (
              <State style={{ marginTop: "2px" }}>
                <div className="amount">
                  <div className="currentAmount">
                    <span className="blackNum">
                      {props.currentAmount.toLocaleString()}
                    </span>{" "}
                    원
                  </div>
                </div>
              </State>
            )}
          </div>
          {completed ? <Tag className="tag">{props.savingMode}</Tag> : <></>}
        </Main>
        {props.savingMode !== "비상금" && (
          <State>
            <div className="progressbar">
              <ProgressBar
                percent={
                  props.currentAmount < props.goalAmount
                    ? (props.currentAmount / props.goalAmount) * 100
                    : 100
                }
                filledBackground={
                  props.savingMode === "군적금" ? "var(--a2)" : "var(--Blue)"
                }
                unfilledBackground="#EBEBEB"
                height="8px"
              />
            </div>
            <div className="amount">
              <div className="currentAmount">
                <span className="blackNum">
                  {props.currentAmount.toLocaleString()}
                </span>{" "}
                원
              </div>
              <div className="targetAmount">
                <span>{props.goalAmount.toLocaleString()}</span> 원
              </div>
            </div>
          </State>
        )}
      </Content>
      {completed ? (
        <CompleteState
          className={
            props.currentAmount >= props.goalAmount ? "success" : "fail"
          }
        >
          {props.currentAmount >= props.goalAmount ? "목표 성공" : "목표 실패"}
        </CompleteState>
      ) : (
        <></>
      )}
    </Container>
  );
}

export default StateGather;
