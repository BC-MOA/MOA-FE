import styled from "styled-components";

const StyledPopUpBox = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 375px;
  height: 745px;

  position: absolute;
  top: 0;
  margin: 0 -40px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  z-index: 1;
`;

const StyledPopUpCard = styled.div`
  width: 90%;
  height: 168px;
  background-color: white;
  border-radius: 12px 12px 0 0;
  padding: 15px 5%;

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
    font-size: 14px;
    font-family: "Pretendard-Regular";
    font-weight: 600;
    color: var(--a5);
  }

  .buttonbox {
    width: 100%;
    display: flex;
    justify-content: space-between;

    color: var(--Title_01);

    button:nth-child(2) {
      background-color: var(--a5);
      color: white;
    }
  }

  .buttonbox button {
    width: 160px;
    height: 49px;
    border: none;
    border-radius: 12px;

    font-size: 16px;
    font-family: "Pretendard-Regular";
    font-weight: 600;
  }
`;

export default function PopUp(props) {
  const data = props.data;

  const clickYes = () => {
    data.onclick();
    //추가 API 작업
  };

  const clickNo = () => {
    data.onclick();
  };

  return (
    <StyledPopUpBox>
      <StyledPopUpCard>
        <p className="text">베팅을 정말 취소하시겠어요?</p>
        <p className="title">{data.title}</p>
        <div className="buttonbox">
          <button onClick={clickNo}>아니요</button>
          <button onClick={clickYes}>예</button>
        </div>
      </StyledPopUpCard>
    </StyledPopUpBox>
  );
}
