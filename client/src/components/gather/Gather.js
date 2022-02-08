import React, { useState } from "react";
import styled from "styled-components";
import AddBtn from "components/gather/AddBtn";
import ContentControlBtn from "components/common/ContentControlBtn";
import { hideScrollBar } from "style/common";
import NavBar from "components/common/NavBar";
import StateGather from "components/gather/detail/StateGather";
import { ReactSortable } from "react-sortablejs";
import moment from "moment";

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
  .editBtnPosition {
    position: relative;
  }
`;
const Content = styled.div`
  ${hideScrollBar}
  flex: 1;
`;
const EditBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  font-family: "Pretendard-Medium";
  font-size: 12px;
  line-height: 19px;
  padding: 3px 8px;
  border: none;
  border-radius: 12px;
  background-color: var(--Line_03);
  color: var(--Body_02);
  display: flex;
  align-items: center;
  gap: 4px;

  &.Active {
    padding: 3px 12px;
    color: #fff;
    background-color: #4caf5b;
    img {
      display: none;
    }
  }
`;

function Gather() {
  const userName = "민수";
  const gatherList = JSON.parse(localStorage.getItem("gatherList")) || [];
  let inProgressList = [];
  let completedList = [];
  // 모으기 진행 상태 분류
  gatherList.map((x) => {
    if (x.savingMode === "비상금") {
      inProgressList.push(x);
    } else {
      if (!moment().isAfter(x.eDate) && x.currentAmount < x.goalAmount) {
        inProgressList.push(x);
      } else {
        completedList.push(x);
      }
    }
  });

  const totalAmount = inProgressList.reduce((acc, cur) => {
    return (acc += cur.currentAmount);
  }, 0);

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
      <div className="Title">{userName}님이 현재 모으고 있는 금액은?</div>
      <div className="TotalAmount">
        <span className="green">{totalAmount.toLocaleString()}</span> 원
      </div>
      <div className="editBtnPosition">
        <ContentControlBtn
          btnGap="24px"
          marginBottom="16px"
          listControl={listControl}
          setListControl={setListControl}
          controlNameList={controlNameList}
        />
        <EditBtn
          onClick={() => {
            setEditToggle(!editToggle);
          }}
          className={editToggle ? "" : "Active"}
        >
          <img
            src={require("assets/gather/Sort_arrow_light.svg").default}
            alt="순서변경 아이콘"
          />
          {editToggle ? "순서 편집하기" : "편집완료"}
        </EditBtn>
      </div>
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
            {completedList.map((x, idx) => (
              <StateGather key={idx} props={x} completed />
            ))}
          </>
        )}
      </Content>
      <NavBar />
    </Container>
  );
}

export default Gather;
