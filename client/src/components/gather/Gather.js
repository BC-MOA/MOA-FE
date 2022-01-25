import React, { useState } from "react";
import styled from "styled-components";
import AddBtn from "components/gather/AddBtn";
import ContentControlBtn from "components/gather/ContentControlBtn";
import { hideScrollBar } from "style/common";
import NavBar from "components/common/NavBar";
import StateGather from "components/gather/StateGather";
import { ReactSortable } from "react-sortablejs";

const Container = styled.div`
  position: relative;
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
const EditBtn = styled.button`
  position: absolute;
  top: 90px;
  right: 0;
  font-family: "Pretendard-Medium";
  font-size: 13px;
  line-height: 25px;
  padding: 0 10px;
  border: none;
  border-radius: 8px;
  background-color: #f8cb57;
  color: var(--Title_01);
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
  const inProgressList = gatherList.filter((x) => !x.isCompleted);
  const completedList = gatherList.filter((x) => x.isCompleted);

  const controlNameList = ["진행중", "완료"];
  const [listControl, setListControl] = useState(controlNameList[0]);
  const [editToggle, setEditToggle] = useState(true);

  const [gather, setGather] = useState([
    {
      id: 1,
      name: "군적금",
      adText: "은행 최고이율과 국가지원혜택까지 받아보세요.",
    },
    {
      id: 2,
      name: "목표",
      adText: "부대 내에서 목표를 잡고 돈을 모아나가보세요.",
    },
    {
      id: 3,
      name: "비상금",
      adText: "저축하고 남은 돈을 비상금처럼 따로 보관하세요.",
    },
  ]);
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
        {listControl === "진행중" ? (
          <ReactSortable
            list={gather}
            setList={setGather}
            disabled={editToggle}
            animation={500}
          >
            {gather.map((x) => (
              <AddBtn key={x.id} name={x.name} gatherList={inProgressList}>
                {x.adText}
              </AddBtn>
            ))}
          </ReactSortable>
        ) : (
          <>
            {completedList.map((x) => (
              <StateGather key={x.name} props={x} />
            ))}
          </>
        )}
      </Content>
      <EditBtn
        onClick={() => {
          setEditToggle(!editToggle);
        }}
      >
        {editToggle ? "순서 변경" : "순서 저장"}
      </EditBtn>
      <NavBar />
    </Container>
  );
}

export default Gather;
