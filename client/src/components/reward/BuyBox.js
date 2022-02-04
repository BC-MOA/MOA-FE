import SubmitButton from "components/common/SubmitButton";
import { useState } from "react";
import { styleModal, styleModalBackground } from "style/common";
import styled from "styled-components";

function BuyBox({ setBuyClick, buyBoxItem }) {
  const [isBought, setIsBought] = useState("");
  // todo - 박스 구매 클릭시 로직 짤 것 - api 성공
  function funcBuyBox() {
    // 사용자 열쇠 개수가 박스구매개수보다 많을때
    // api호출
    // setIsBought("true");
    // // 사용자 열쇠 개수가 박스구매개수보다 적을때
    // api호출없이 바로
    setIsBought("false");
  }
  return (
    <Background>
      <ModalBox>
        <div
          className="closeBtn"
          onClick={() => {
            setBuyClick(false);
          }}
        >
          <img src={require("assets/ic_close.svg").default} alt="닫기" />
        </div>
        {"" === isBought && (
          <div className="content">
            <div className="title">MOA박스를 구매하시겠어요?</div>
            <div className="aboutKey">
              열쇠 {buyBoxItem.boxPrice}개가 사용됩니다
            </div>
            <ButtonList>
              <button
                onClick={() => {
                  setBuyClick(false);
                }}
              >
                취소하기
              </button>
              <button
                onClick={() => {
                  funcBuyBox();
                }}
                className="green"
              >
                구매하기
              </button>
            </ButtonList>
          </div>
        )}
        {"true" === isBought && (
          <div className="content">
            <img
              src={require("assets/reward/ic_big_check.svg").default}
              alt="구매성공"
            />
            <div className="titleCenter">MOA박스 구매 완료!</div>
            <div className="aboutBox">
              구매한 박스는 내 보관함에서 확인할 수 있어요
            </div>
            <SubmitButton
              onClickFunc={() => {
                setBuyClick(false);
              }}
              isActive={true}
              title={"확인"}
            />
          </div>
        )}
        {"false" === isBought && (
          <div className="content">
            <img
              src={require("assets/reward/ic_big_error.svg").default}
              alt="구매성공"
            />
            <div className="titleCenter">MOA박스 구매 실패</div>
            <div className="aboutBox">열쇠 개수가 부족해요</div>
            <SubmitButton
              onClickFunc={() => {
                setBuyClick(false);
              }}
              isActive={true}
              title={"확인"}
            />
          </div>
        )}
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
    .titleCenter {
      font-size: 24px;
      line-height: 38px;
      color: var(--Title_01);
      margin-bottom: 12px;
    }
    .aboutKey {
      text-align: start;
      font-size: 18px;
      color: var(--a3);
      margin-bottom: 48px;
    }
    .aboutBox {
      font-size: 16px;
      line-height: 25px;
      color: var(--Body_01);
      margin-bottom: 48px;
    }
  }

  text-align: start;
`;
const ButtonList = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: var(--Title_02);
  button {
    flex-grow: 1;
    padding: 12px 0;
    border: none;
    border-radius: 12px;
    &.green {
      background-color: var(--a2);
      color: #ffffff;
    }
  }
`;
export default BuyBox;
