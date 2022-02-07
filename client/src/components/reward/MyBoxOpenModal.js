import React from "react";
import { useNavigate } from "react-router-dom";
import { styleModal, styleModalBackground } from "style/common";
import styled from "styled-components";

function MyBoxOpenModal({ item, setIsOpenClick }) {
  const history = useNavigate();
  return (
    <Background>
      <ModalBox>
        <div
          className="closeBtn"
          onClick={() => {
            setIsOpenClick(false);
          }}
        >
          <img src={require("assets/ic_close.svg").default} alt="닫기" />
        </div>
        <div className="content">
          <div className="title">{item.boxName}를 열까요?</div>
          <div className="message">한번 열면 다시 닫을 수 없어요 </div>
          <ButtonList>
            <button
              onClick={() => {
                setIsOpenClick(false);
              }}
            >
              취소하기
            </button>
            <button
              className="green"
              onClick={() => {
                history(`select/${item.boxId}`, { state: item });

                setIsOpenClick(false);
              }}
            >
              열기
            </button>
          </ButtonList>
        </div>
      </ModalBox>
    </Background>
  );
}
const Background = styled.div`
  ${styleModalBackground}
`;
const ModalBox = styled.div`
  ${styleModal}
  font-family: "Pretendard-SemiBold";
  .content {
    text-align: center;

    .title {
      text-align: start;
      font-size: 21px;
      line-height: 33px;
      color: var(--Title_01);
      margin-bottom: 9px;
    }
    .message {
      text-align: start;
      font-size: 18px;
      color: var(--a3);
      margin-bottom: 48px;
    }
  }

  text-align: start;
`;
const ButtonList = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  button {
    flex-grow: 1;
    padding: 12px 0;
    border: none;
    border-radius: 12px;
    color: var(--Title_02);
    background-color: #ebebeb;
    &.green {
      background-color: var(--a2);
      color: #ffffff;
    }
  }
`;
export default MyBoxOpenModal;
