import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//[styled comp] : 팝업 카드 배경
const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  z-index: 1;
`;

//[styled comp] : 팝업 카드
const Modal = styled.div`
  width: 340px;

  height: 148px;
  background-color: white;
  border-radius: 12px 12px 0 0;
  padding: 15px 5%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  * {
    margin: 10px 0;
    display: inline-block;
  }

  .text {
    font-size: 21px;
    font-family: "Pretendard-Regular";
    font-weight: 600;
  }

  .title {
    font-size: 16px;
    font-family: "Pretendard-Regular";
    font-weight: 600;
    color: var(--a3);

    margin-bottom: 15px;
  }

  .buttonbox {
    width: 100%;
    display: flex;

    color: var(--Title_01);

    button:nth-child(2) {
      background-color: var(--a5);
      color: white;
      margin-left: 15px;
    }
  }

  button {
    width: 50%;
    height: 40px;
    border: none;
    border-radius: 12px;

    font-size: 16px;
    font-family: "Pretendard-Regular";
    font-weight: 600;
  }
`;

/**
 * [comp]
 * PopUp
 *
 * [state]
 * none
 *
 * [props]
 * 챌린지 정보
 * state 변경용 함수
 */

function PopUp({ title, func, type }) {
  const clickYes = () => {
    func();

    if (!type) {
      navigate("../compete");
    }

    //추가 API 작업
  };

  const navigate = useNavigate();

  const clickNo = () => {
    func();
  };

  return (
    <Background>
      <Modal>
        <p className="text">
          {type ? "베팅을 정말 취소하시겠어요?" : "배팅이 완료되었어요!"}
        </p>
        <p className="title">{title}</p>
        <div className="buttonbox">
          <button onClick={clickNo}>{type ? "계속하기" : "수정하기"}</button>
          <button onClick={clickYes}>{type ? "취소하기" : "확인"}</button>
        </div>
      </Modal>
    </Background>
  );
}

export { PopUp, Modal, Background };
