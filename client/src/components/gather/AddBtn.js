import React from "react";
import styled from "styled-components";
import StateGather from "components/gather/detail/StateGather";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 16px 24px;
  background-color: #fff;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;
  margin-bottom: 12px;

  .btnName {
    color: var(--Title_02);
    font-family: "Pretendard-SemiBold";
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 2px;

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
`;
function AddBtn({ name, gatherList, children }) {
  const history = useNavigate();
  const movePages = {
    군적금: "add-militarySaving",
    목표: "add-goal",
    비상금: "add-safebox",
  };

  const filterdLists = gatherList.filter((x) => x.savingMode === name);

  return (
    <Container>
      <div className="btnName">
        <div>{name}</div>
        {name === "군적금" && filterdLists.length < 2 ? (
          <button
            onClick={() => {
              history(movePages[name]);
            }}
          >
            <img src={require("assets/gather/ic_add.svg").default} alt="" />
          </button>
        ) : (
          <></>
        )}
        {name !== "군적금" && (
          <button
            onClick={() => {
              history(movePages[name]);
            }}
          >
            <img src={require("assets/gather/ic_add.svg").default} alt="" />
          </button>
        )}
      </div>
      <div className="adText">{children}</div>
      {filterdLists &&
        filterdLists.map((x, idx) => <StateGather key={idx} props={x} />)}
    </Container>
  );
}

export default AddBtn;
