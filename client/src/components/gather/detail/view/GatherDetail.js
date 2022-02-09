import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import BackHeader from "components/common/BackHeader";
import DetailCard from "../DetailCard";
import TransactionEl from "../TransactionEl";
import { hideScrollBar } from "style/common";
import { useLocation } from "react-router-dom";
import FixModal from "components/gather/detail/FixModal";
import SetGoalModal from "../SetGoalModal";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  .title {
    font-size: 18px;
    line-height: 28px;
    color: var(--Title_01);
    font-family: "Pretendard-SemiBold";
    text-align: left;
    margin-bottom: 16px;
  }
  .number {
    font-family: "Roboto";
  }
  .fixBtn {
    position: absolute;
    top: 4px;
    right: 0;
    margin: 0;
    padding: 0 10px;
    border: none;
    background: none;

    &.none {
      display: none;
    }
  }
`;

const Content = styled.div`
  ${hideScrollBar}
  flex: 1;

  &.zero {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const TransHistory = styled.div`
  ${({ category }) =>
    category === "군적금" &&
    css`
      path.main {
        fill: #4caf5b;
      }
    `}
  ${({ category }) =>
    category === "목표" &&
    css`
      path.main {
        fill: var(--Blue);
      }
    `}
  ${({ category }) =>
    category === "비상금" &&
    css`
      path.main {
        fill: #f8cb57;
      }
    `}
`;
const TransZero = styled.div`
  img {
    filter: grayscale();
  }
  .zeroText {
    margin-top: 12px;
    font-family: "Pretendard-Regular";
    color: var(--Body_01);
    font-size: 16px;
    line-height: 25px;
  }
`;

function GatherDetail() {
  const { state: gatherInfo } = useLocation();
  const [modal, setModal] = useState(false);
  const [goalModal, setGoalModal] = useState(false);
  const tr_lists = gatherInfo.transactions;

  useEffect(() => {
    if (gatherInfo.goalName === "") {
      setGoalModal(true);
    }
  }, []);

  return (
    <Container>
      <BackHeader
        path={"/gather"}
        title={
          gatherInfo.goalName
            ? gatherInfo.goalName
            : gatherInfo.account.productName
        }
        isScrolled={true}
      />
      <button
        className={
          gatherInfo.savingMode === "비상금" ? "fixBtn none" : "fixBtn"
        }
        onClick={() => setModal(true)}
      >
        <img src={require("assets/ic_fix.svg").default} alt="수정하기" />
      </button>
      <DetailCard props={gatherInfo} />
      <div className="title">거래내역</div>
      <Content className={tr_lists.length ? "" : "zero"}>
        {tr_lists.length ? (
          <>
            <TransHistory category={gatherInfo.savingMode}>
              {tr_lists.map((x, idx) => (
                <TransactionEl key={idx} props={x}>
                  {x.date}
                </TransactionEl>
              ))}
            </TransHistory>
          </>
        ) : (
          <TransZero>
            <img
              src={require("assets/character_head.svg").default}
              alt="캐릭터 얼굴"
            />
            <div className="zeroText">아직 거래내역이 없어요</div>
          </TransZero>
        )}
      </Content>
      {goalModal ? (
        <SetGoalModal
          setModal={setGoalModal}
          props={gatherInfo}
          path={"edit-goal"}
        />
      ) : (
        <></>
      )}
      {modal ? <FixModal setModal={setModal} props={gatherInfo} /> : <></>}
    </Container>
  );
}

export default GatherDetail;
