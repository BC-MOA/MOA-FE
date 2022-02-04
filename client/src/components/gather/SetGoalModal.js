import React from "react";
import styled from "styled-components";
import { ReactComponent as CloseBtn } from "assets/ic_close.svg";
import { useNavigate } from "react-router-dom";
import { styleModal, styleModalBackground } from "style/common";
import CustomBtn from "./addGoal/CustomBtn";

const Background = styled.div`
  ${styleModalBackground}
`;
const ModalBox = styled.div`
  ${styleModal}

  div {
    text-align: left;
    &:first-child {
      font-family: "Pretendard-SemiBold";
      font-size: 21px;
      line-height: 33px;
      color: var(--Title_01);
      margin-bottom: 12px;
    }
    &:not(:first-child) {
      padding: 14px 0;
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
  const history = useNavigate();

  return (
    <Background>
      <ModalBox>
        <div>
          <span>군적금 목표설정</span>을 하고 열쇠 받아가세요
        </div>
        <CustomBtn active={true} path={path} data={props}>
          목표 설정하기
        </CustomBtn>
        <CloseBtn className="closeBtn" onClick={() => setModal(false)} />
      </ModalBox>
    </Background>
  );
}

export default SetGoalModal;
