import React from "react";
import styled from "styled-components";
import { ReactComponent as CloseBtn } from "assets/ic_close.svg";

const Background = styled.div`
  position: absolute;
  top: -8px;
  bottom: -8px;
  left: -20px;
  right: -20px;
  background-color: #212121e5;
`;
const ModalBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  border-radius: 12px 12px 0px 0px;
  padding: 40px 24px;

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

  .closeBtn {
    width: 18px;
    position: absolute;
    top: 24px;
    right: 30px;
    cursor: pointer;

    path {
      stroke: var(--Body_01);
    }
  }
`;

function Modal({ setModal }) {
  return (
    <Background>
      <ModalBox>
        <div>더보기</div>
        <div>목표 수정</div>
        <div>자동이체 변경</div>
        <div>중도해지</div>
        <CloseBtn className="closeBtn" onClick={() => setModal(false)} />
      </ModalBox>
    </Background>
  );
}

export default Modal;
