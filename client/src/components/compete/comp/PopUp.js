import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { MyCompete } from "store/CompeteMy";
import { UserData } from "store/User";
import { useContext } from "react";

//[styled comp] : 팝업 카드 배경
const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  z-index: 1;

  overflow: hidden;
`;

//[styled comp] : 팝업 카드
const Modal = styled.div`
  width: 460px;

  @media (min-width: 280px) and (max-width: 500px) {
    width: 340px;
  }

  height: 150px;
  background-color: white;
  border-radius: 12px 12px 0 0;
  padding: 15px 20px;
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
 * [props]
 * title: 챌린지 정보
 * func: state 변경용 함수
 * type: 버튼 순서 구분을 위해서
 * betinfo: 베팅 정보 - 챌린지키, 선택한 대상, 선택한키
 */

function PopUp({ betinfo, obj, func, type }) {
  const myContext = useContext(MyCompete);
  const user = useContext(UserData);
  const navigate = useNavigate();

  const clickYes = () => {
    if (type) {
      //취소하기
      //현재 키 더해줌
      const betted_key = myContext.searchItem(obj.key)[0].bet;
      user.updateUserData({ key: user.userData.key + betted_key });
      myContext.removeItem(obj.key);
    } else {
      //기존 배팅
      const item = myContext.searchItem(obj.key);

      if (item.length !== 0) {
        const prevbet = item[0].bet;
        user.updateUserData({ key: user.userData.key + prevbet - betinfo.bet });
        myContext.updateItem(betinfo, prevbet);
      } else {
        //새로운 배팅일 경우
        user.updateUserData({ key: user.userData.key - betinfo.bet });
        const newComp = { ...obj, ...betinfo };
        myContext.addItem(newComp);
      }
      navigate("/compete", { state: { type: false } });
    }

    func();
  };

  return (
    <Background>
      <Modal>
        <p className="text">
          {type ? "베팅을 정말 취소하시겠어요?" : "배팅이 완료되었어요!"}
        </p>
        <p className="title">{obj.title}</p>
        <div className="buttonbox">
          <button onClick={func}>{type ? "계속하기" : "수정하기"}</button>
          <button onClick={clickYes}>{type ? "취소하기" : "확인"}</button>
        </div>
      </Modal>
    </Background>
  );
}

export { PopUp, Modal, Background };
