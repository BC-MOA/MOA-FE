import React from "react";
import styled from "styled-components";

function ProcessStateBox({ stateList, currentState }) {
  return (
    <ProcessStateBoxStyle>
      <div className={stateList[0] === currentState ? "currentState" : ""}>
        <img
          src={
            stateList[0] === currentState
              ? require("assets/gather/ic_process_apply_green.svg").default
              : require("assets/gather/ic_process_apply.svg").default
          }
          alt={stateList[0]}
        />
        <span>{stateList[0]}</span>
      </div>
      <div className={stateList[1] === currentState ? "currentState" : ""}>
        <img
          src={
            stateList[1] === currentState
              ? require("assets/gather/ic_process_id_check_green.svg").default
              : require("assets/gather/ic_process_id_check.svg").default
          }
          alt={stateList[1]}
        />
        <span>{stateList[1]}</span>
      </div>

      <div className={stateList[2] === currentState ? "currentState" : ""}>
        <img
          src={
            stateList[2] === currentState
              ? require("assets/gather/ic_process_evaluation_green.svg").default
              : require("assets/gather/ic_process_evaluation.svg").default
          }
          alt={stateList[2]}
        />
        <span>{stateList[2]}</span>
      </div>
      <div className={stateList[3] === currentState ? "currentState" : ""}>
        <img
          src={
            stateList[3] === currentState
              ? require("assets/gather/ic_process_maked_account_green.svg")
                  .default
              : require("assets/gather/ic_process_maked_account.svg").default
          }
          alt={stateList[3]}
        />
        <div>{stateList[3]}</div>
      </div>
    </ProcessStateBoxStyle>
  );
}
const ProcessStateBoxStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  line-height: 22px;
  color: var(--Body_01);
  margin-bottom: 24px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    img {
      width: 49px;
    }
    &.currentState {
      color: var(--a2);
    }
  }
`;
export default ProcessStateBox;
