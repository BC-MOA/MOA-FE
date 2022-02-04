import React from "react";
import styled from "styled-components";
import { ReactComponent as CloseBtn } from "assets/ic_close.svg";
import { styleModal, styleModalBackground } from "style/common";
import CustomBtn from "./addGoal/CustomBtn";

const Background = styled.div`
  ${styleModalBackground}
`;
const ModalBox = styled.div`
  ${styleModal}

  div {
    &.title {
      font-family: "Pretendard-SemiBold";
      font-size: 21px;
      line-height: 33px;
      color: var(--Title_01);
      margin-bottom: 56px;
      display: flex;
      flex-wrap: wrap;

      span {
        color: var(--a3);
      }
      .r_space {
        margin-right: 10px;
      }
      .title:first-child {
        margin-bottom: 4px;
      }
    }

    &:not(:first-child) {
      margin-top: 12px;
      font-family: "Pretendard-Regular";
      font-size: 14px;
      line-height: 22px;
      color: var(--Body_02);
      cursor: pointer;
    }
    font-family: "Pretendard-Regular";
    font-style: normal;
    font-size: 16px;
    line-height: 25px;
    color: var(--Title_02);
  }
`;

function SetGoalModal({ setModal, props, path }) {
  return (
    <Background>
      <ModalBox>
        <div className="title">
          <div className="title r_space">
            <span>군적금 목표설정</span>을 하고
          </div>
          열쇠 받아가세요
        </div>
        <CustomBtn active={true} path={path} data={props}>
          목표 설정하기
        </CustomBtn>
        <div onClick={() => setModal(false)}>오늘 하루 보지 않기</div>
        <CloseBtn className="closeBtn" onClick={() => setModal(false)} />
      </ModalBox>
    </Background>
  );
}

export default SetGoalModal;
