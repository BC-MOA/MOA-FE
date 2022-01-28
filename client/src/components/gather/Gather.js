import React, { useState } from "react";
import styled from "styled-components";
import AddBtn from "components/gather/AddBtn";
import ContentControlBtn from "components/common/ContentControlBtn";
import { hideScrollBar } from "style/common";
import NavBar from "components/common/NavBar";
import StateGather from "components/gather/StateGather";
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
  const gatherList = [
    {
      category: "군적금",
      name: "320만원 모으기",
      currentAmount: 800000,
      targetAmount: 3200000,
      account: {
        name: "KB국민",
        number: "112-0330-0201",
      },
      sDate: "Sun Oct 10 2021 15:11:39 GMT+0900",
      eDate: "Fri Mar 10 2023 23:59:59 GMT+0900",
      depositMethod: "자동이체",
      howOften: "매월 10일",
      amount: "200000",
    },
    {
      category: "목표",
      goal_category: "여행",
      name: "나도 여행한번 가보자 유럽 전역으로!",
      currentAmount: 170000,
      targetAmount: 1000000,
      account: {
        name: "하나은행",
        number: "123-456-78-910111",
      },
      sDate: "Wed Nov 10 2021 15:11:39 GMT+0900",
      eDate: "Sat Dec 10 2022 23:59:59 GMT+0900",
      depositMethod: "자동이체",
      howOften: "매월 10일",
      amount: "50000",
    },
    {
      category: "비상금",
      name: "비상금",
      currentAmount: 100000,
      account: {
        name: "하나은행",
        number: "123-456-78-103556",
      },
    },
    // {
    //   category: "비상금",
    //   name: "비상금",
    //   currentAmount: 300000,
    //   account: {
    //     name: "NH국민",
    //     number: "123-456-78-103556",
    //   },
    // },
    // {
    //   category: "군적금",
    //   name: "100만원 모으기",
    //   currentAmount: 100000,
    //   targetAmount: 100000,
    //   account: {
    //     name: "IBK기업",
    //     number: "112-0330-0201-55",
    //   },
    //   sDate: "Sun Oct 10 2021 15:11:39 GMT+0900",
    //   eDate: "Sat Dec 10 2022 23:59:59 GMT+0900",
    //   depositMethod: "자동이체",
    // howOften: "매월 10일",
    //   amount: "200000",
    // },
    {
      category: "목표",
      goal_category: "선물",
      name: "조카 선물😎",
      currentAmount: 150000,
      targetAmount: 150000,
      account: {
        name: "NH농협",
        number: "356-0915-7261-11",
      },
      sDate: "Wed Nov 10 2021 15:11:39 GMT+0900",
      eDate: "Wed Jan 26 2022 23:59:59 GMT+0900",
      depositMethod: "자유입금",
      howOften: "",
      amount: "50000",
    },
    {
      category: "군적금",
      name: "1000만원 모으기",
      currentAmount: 0,
      targetAmount: 2400000,
      account: {
        name: "신한",
        number: "112-0650-0987",
      },
      sDate: "Mon Jan 10 2022 15:11:39 GMT+0900",
      eDate: "Fri Mar 10 2023 23:59:59 GMT+0900",
      depositMethod: "자유입금",
      howOften: "",
      amount: "",
    },
  ];

  const inProgressList = gatherList.filter((x) => !moment().isAfter(x.eDate));
  const completedList = gatherList.filter((x) => moment().isAfter(x.eDate));
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
      {/* <EditBtn
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
      </EditBtn> */}
      <NavBar />
    </Container>
  );
}

export default Gather;
