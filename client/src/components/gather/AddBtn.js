import React from "react";
import styled from "styled-components";
import StateGather from "components/gather/StateGather";

const Container = styled.div`
  padding: 16px 24px 14px;
  background-color: #fff;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;

  .btnName {
    color: var(--Title_02);
    font-family: "Pretendard-SemiBold";
    font-size: 18px;
    line-height: 28px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      padding: 0;
      border: none;
      background: none;
    }
  }
  .adText {
    color: var(--Body_01);
    font-family: "Pretendard-Regular";
    font-size: 14px;
    line-height: 22px;
    text-align: left;
  }

  & + & {
    margin-top: 12px;
  }
`;
function AddBtn({ name, children }) {
  const gatherList = [
    {
      category: "군적금",
      name: "장병내일준비적금 (국민)",
      currentAmount: 2400000,
      targetAmount: 6000000,
    },
    {
      category: "목표",
      goal_category: "전자기기",
      name: "아이패드 사기",
      currentAmount: 600000,
      targetAmount: 1000000,
    },
    {
      category: "비상금",
      name: "비상금",
      targetAmount: 2400000,
    },
  ];
  return (
    <Container>
      <div className="btnName">
        <div>{name}</div>
        <button>
          <img src={require("assets/gather/ic_add.svg").default} alt="" />
        </button>
      </div>
      <div className="adText">{children}</div>
      {gatherList
        .filter((x) => x.category === name)
        .map((x) => (
          <StateGather key={name} props={x} />
        ))}
    </Container>
  );
}

export default AddBtn;
