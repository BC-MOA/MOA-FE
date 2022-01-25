import React, { useState } from "react";
import styled from "styled-components";
import AddBtn from "components/gather/AddBtn";
import ContentControlBtn from "components/gather/ContentControlBtn";
import { hideScrollBar } from "style/common";
import NavBar from "components/common/NavBar";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .Title {
    margin: 4px 0 2px;
    font-family: "Pretendard-SemiBold";
    font-size: 18px;
    line-height: 28px;
    color: var(--Title_02);
    text-align: left;
  }
  .TotalAmount {
    display: flex;
    gap: 2px;
    margin-bottom: 18px;
    font-family: "Pretendard-SemiBold";
    font-size: 24px;
    line-height: 38px;
    color: var(--Title_02);

    .green {
      font-family: Roboto;
      font-weight: 700;
      color: var(--a2);
    }
  }
`;
const Content = styled.div`
  ${hideScrollBar}
  flex: 1;
`;

function Gather() {
  const userName = "민수";
  const gatherList = [
    {
      category: "군적금",
      name: "장병내일준비적금 (국민)",
      currentAmount: 800000,
      targetAmount: 3200000,
      isCompleted: false,
    },
    {
      category: "목표",
      goal_category: "전자기기",
      name: "아이패드 사기",
      currentAmount: 600000,
      targetAmount: 1000000,
      isCompleted: false,
    },
    {
      category: "비상금",
      name: "비상금",
      currentAmount: 100000,
      isCompleted: false,
    },
  ];

  const totalAmount = gatherList.reduce((acc, cur) => {
    return (acc += cur.currentAmount);
  }, 0);

  const controlNameList = ["진행중", "완료"];
  const [listControl, setListControl] = useState(controlNameList[0]);

  return (
    <Container>
      <div className="Title">{userName}님이 지금까지 모은 금액은?</div>
      <div className="TotalAmount">
        <span className="green">{totalAmount.toLocaleString()}</span> 원
      </div>
      <ContentControlBtn
        btnGap="24px"
        marginBottom="16px"
        listControl={listControl}
        setListControl={setListControl}
        controlNameList={controlNameList}
      />
      <Content>
        <AddBtn name="군적금" gatherList={gatherList} state={listControl}>
          은행 최고이율과 국가지원혜택까지 받아보세요.
        </AddBtn>
        <AddBtn name="목표" gatherList={gatherList} state={listControl}>
          부대 내에서 목표를 잡고 돈을 모아나가보세요.
        </AddBtn>
        <AddBtn name="비상금" gatherList={gatherList} state={listControl}>
          저축하고 남은 돈을 비상금처럼 따로 보관하세요.
        </AddBtn>
      </Content>
      <NavBar />
    </Container>
  );
}

export default Gather;
