import React from "react";
import styled, { css } from "styled-components";
import BackHeader from "components/common/BackHeader";
import DetailCard from "./DetailCard";
import TransactionEl from "./TransactionEl";
import { hideScrollBar } from "style/common";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100%;
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

  const tr_lists = [];
  return (
    <Container>
      <BackHeader path={-1} title={gatherInfo.name} isScrolled={true} />
      <DetailCard gatherInfo={gatherInfo} />
      <div className="title">거래내역</div>
      <Content className={tr_lists.length ? "" : "zero"}>
        {tr_lists.length ? (
          <>
            <TransHistory category={gatherInfo.category}>
              {tr_lists.map((x, idx) => (
                <TransactionEl key={idx} lists={x.lists}>
                  {x.date}
                </TransactionEl>
              ))}
            </TransHistory>
          </>
        ) : (
          <TransZero>
            <img
              src={require("assets/gather/character_head.svg").default}
              alt="캐릭터 얼굴"
            />
            <div className="zeroText">아직 거래내역이 없어요</div>
          </TransZero>
        )}
      </Content>
    </Container>
  );
}

export default GatherDetail;
