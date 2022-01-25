import React from "react";
import styled from "styled-components";
import StateGather from "components/gather/StateGather";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 16px 24px;
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
function AddBtn({ name, gatherList, state, children }) {
  const history = useNavigate();
  const movePages = {
    군적금: "add-militarySaving",
    목표: "add-goal",
    비상금: "add-safebox",
  };

  return (
    <Container>
      <div className="btnName">
        <div>{name}</div>
        <button
          onClick={() => {
            history(movePages[name]);
          }}
        >
          <img src={require("assets/gather/ic_add.svg").default} alt="" />
        </button>
      </div>
      <div className="adText">{children}</div>
      {gatherList &&
        state === "진행중" &&
        gatherList
          .filter((x) => !x.isCompleted && x.category === name)
          .map((x) => <StateGather key={name} props={x} />)}
      {gatherList &&
        state === "완료" &&
        gatherList
          .filter((x) => x.isCompleted && x.category === name)
          .map((x) => <StateGather key={name} props={x} />)}
    </Container>
  );
}

export default AddBtn;
