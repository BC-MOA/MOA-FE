import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SubmitButton from "components/common/SubmitButton";

const StyledModal = styled.div`
  background-color: white;
  width: 100%;
  height: 215px;
  font-family: "Pretendard-Regular";

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 20px;
  margin-left: -20px;
  margin-top: auto;
  margin-bottom: -36px;
  border-radius: 14px 14px 0 0;
  text-align: left;

  .big {
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;

    margin: 5px 0;

    display: flex;
  }

  .small {
    font-size: 14px;
    color: var(--Body_02);

    margin-top: 20px;
    line-height: 20px;
  }

  .colored {
    color: var(--a3);
  }
`;

//insList.length
const Modal = ({ length, func }) => {
  const navigate = useNavigate();

  const onConfirm = () => {
    if (length == 0) {
      navigate("/home");
    } else {
      func(3);
    }
  };

  return (
    <StyledModal>
      {length != 1 && (
        <>
          {length == 0 ? (
            <>
              <div className="big">
                모아(MOA)에서 <p className="colored">첫 군적금</p>을
                시작해보세요
              </div>
              <p className="big">쉽고 간편하게 가입이 가능해요</p>
            </>
          ) : (
            <>
              <div className="big">
                <p className="colored">군적금 계좌</p>는 이제부터
              </div>
              <p className="big">모아(MOA)에서 따로 볼 수 있어요</p>
            </>
          )}
          <p className="small">
            나라사랑계좌는 연동되어 출금계좌로 설정되어요.
            <br />
            다른 계좌를 출금계좌로 설정하고 싶으면,
            <br />
            프로필 {">"} 계좌설정에서 추가하면 돼요
          </p>
        </>
      )}

      {length == 1 && (
        <>
          <div className="big">
            <p className="colored">군적금 계좌</p>는 이제부터
          </div>
          <p className="big"> 모아(MOA)에서 따로 볼 수 있어요</p>
          <p className="small">
            나라사랑계좌는 연동되어 출금계좌로 설정되지만
            <br />
            모아(MOA) 앱 내에서 입출금내역은 확인이 어려워요
          </p>
        </>
      )}

      <div className="button">
        <SubmitButton
          title={"확인"}
          onClickFunc={onConfirm}
          isActive={true}
        ></SubmitButton>
      </div>
    </StyledModal>
  );
};

export default Modal;
