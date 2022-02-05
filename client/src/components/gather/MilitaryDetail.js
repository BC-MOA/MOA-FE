import BackHeader from "components/common/BackHeader";
import Container from "components/common/Container";
import ScrollBox from "components/common/ScrollBox";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProcessStateBox from "./ProcessStateBox";
import SetGoalModal from "./SetGoalModal";
const stateList = ["신청 접수", "군 정보 확인", "은행 심사", "개설 완료"];

function MilitaryDetail() {
  const history = useNavigate();
  const [toggleClick, setToggleClick] = useState(false);
  const [isEmptyName, setIsEmptyName] = useState(true);
  // todo - 받아온 데이터의 목표명이 없을때 isEmptyName은 true/ 아니며 false
  return (
    <Container>
      {isEmptyName && (
        <SetGoalModal
          path={"/gather/mili-detail/edit"}
          props={""}
          setModal={setIsEmptyName}
        />
      )}
      {/* todo - title 변경하기 - 목표명 있을 때는 목표명 / 없을 때는 ''  */}
      <BackHeader
        path={"/gather"}
        title={"1000만원 모으기"}
        isScrolled={true}
      />
      <ScrollBox paddingValue={"12px 0 "}>
        {/* todo - 해당 군적금 정보 받아서 변경 */}
        <StateBox>
          <div className="tag">{"군적금"}</div>
          <div className="title">
            <div>{"신한 장병내일준비적금"}</div>
            <div
              onClick={() => {
                history("/gather/mili-detail/edit");
              }}
              className="editGoal"
            >
              <span>목표 설정하기</span>
              <img
                src={require("assets/gather/ic_shortcut.svg").default}
                alt="이동"
              />
            </div>
          </div>
          <ProcessStateBox stateList={stateList} currentState={stateList[2]} />
        </StateBox>
        <ApplyHistory>
          <div
            onClick={() => {
              setToggleClick(!toggleClick);
            }}
            className="default"
          >
            <span>신청내역</span>

            <img
              src={
                toggleClick
                  ? require("assets/ic_toggle_up.svg").default
                  : require("assets/ic_toggle_down.svg").default
              }
              alt={"신청내역보기버튼"}
            />
          </div>
          <div className={toggleClick ? "toggleClick toggle" : "toggle"}>
            <div className="devider"></div>
            <div className="item">
              <span>유형</span>
              <span className="bold">{"자동이체"}</span>
            </div>
            <div className="item">
              <span>기간</span>
              <span className="bold">{"14개월"}</span>
            </div>
            <div className="item">
              <span>월 납입액</span>
              <span className="green bold">
                {Number("20000").toLocaleString()}원
              </span>
            </div>
          </div>
        </ApplyHistory>
      </ScrollBox>
    </Container>
  );
}
const StateBox = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;
  padding: 32px 21px 8px;
  font-family: "Pretendard-SemiBold";
  margin-bottom: 16px;
  .tag {
    padding: 2px 8px;
    display: inline-block;
    background: rgba(76, 175, 91, 0.15);
    border-radius: 8px;
    color: var(--a2);
    font-size: 12px;
    line-height: 19px;
    margin-bottom: 8px;
  }
  .title {
    color: var(--Title_01);
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 28px;
    .editGoal {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Pretendard-Regular";
      font-size: 12px;
      line-height: 19px;
      color: var(--Body_01);
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
const ApplyHistory = styled.div`
  padding: 10px 20px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 8px;
  .default {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Pretendard-Medium";
    font-size: 16px;
    line-height: 25px;
    color: var(--Title_02);
    &:hover {
      cursor: pointer;
    }
  }
  .toggle {
    display: none;
    &.toggleClick {
      display: block;
      .devider {
        margin: 10px -20px 16px -20px;
        border: 1px solid var(--Surface);
      }
      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
        color: var(--Body_01);
        font-family: "Pretendard-Regular";
        font-size: 14px;
        line-height: 22px;
        .bold {
          font-family: "Pretendard-Medium";
          color: var(--Title_02);
        }
        .green {
          color: var(--a2);
        }
      }
    }
  }
`;
export default MilitaryDetail;
