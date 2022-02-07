import React from "react";
import styled from "styled-components";
import { ReactComponent as CloseBtn } from "assets/ic_close.svg";
import { useNavigate } from "react-router-dom";
import { styleModal, styleModalBackground } from "style/common";

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

function FixModal({ setModal, props }) {
  const history = useNavigate();
  return (
    <Background>
      <ModalBox>
        <div>더보기</div>
        <div
          onClick={() => {
            history("edit-goal", {
              state: props,
            });
          }}
        >
          목표 수정
        </div>

        {props.depositMethod === "자동이체" ? (
          <div
            onClick={() => {
              history("edit-deposit", {
                state: props,
              });
            }}
          >
            자동이체 변경
          </div>
        ) : (
          <div
            onClick={() => {
              history("register-deposit", {
                state: props,
              });
            }}
          >
            자동이체 등록
          </div>
        )}
        <div
          onClick={() => {
            history("midterm-termination", {
              state: props,
            });
          }}
        >
          중도해지
        </div>
        <CloseBtn className="closeBtn" onClick={() => setModal(false)} />
      </ModalBox>
    </Background>
  );
}

export default FixModal;
