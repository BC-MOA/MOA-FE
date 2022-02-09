import SubmitButton from "components/common/SubmitButton";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserData } from "store/User";
import { UserInventoryData } from "store/UserInventory";
import { styleModal, styleModalBackground } from "style/common";
import styled from "styled-components";
import { v1 as uuid } from "uuid";
function BuyBox({ setBuyClick, buyBoxItem, setIsValidBuy }) {
  const [isBought, setIsBought] = useState("");
  const { userData, updateUserData } = useContext(UserData);
  const { userBoxList, userRewardList, getUserBoxList, setUserBoxList } =
    useContext(UserInventoryData);
  const history = useNavigate();

  function funcBuyBox() {
    if (userData.key >= buyBoxItem.boxPrice) {
      setIsBought("true");
      const temp = JSON.parse(localStorage.getItem("userBoxList"))
        ? JSON.parse(localStorage.getItem("userBoxList"))
        : [];
      const boxNew = { ...buyBoxItem, boxId: uuid() };
      temp.push(boxNew);
      localStorage.setItem("userBoxList", JSON.stringify(temp));
      getUserBoxList();
      updateUserData({ key: userData.key - buyBoxItem.boxPrice });
    } else {
      setIsBought("false");
    }
  }
  return (
    <Background>
      <ModalBox>
        <div
          className="closeBtn"
          onClick={() => {
            setBuyClick(false);
            setIsValidBuy(false);
            if ("true" === isBought) {
              if (1 === userBoxList.length + userRewardList.length) {
                history("/key", {
                  state: {
                    num: 1,
                    message: "처음으로 MOA박스를 구매하셨네요",
                    nextPath: "/reward",
                  },
                });
              }
            }
          }}
        >
          <img src={require("assets/ic_close.svg").default} alt="닫기" />
        </div>
        {"" === isBought && (
          <div className="content">
            <div className="title">{buyBoxItem.boxName}를 구매하시겠어요?</div>
            <div className="aboutKey">
              열쇠 {buyBoxItem.boxPrice}개가 사용됩니다
            </div>
            <ButtonList>
              <button
                onClick={() => {
                  setBuyClick(false);
                  setIsValidBuy(false);
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
                setIsValidBuy(false);
                if (1 === userBoxList.length + userRewardList.length) {
                  history("/key", {
                    state: {
                      num: 1,
                      message: "처음으로 MOA박스를 구매하셨네요",
                      nextPath: "/reward",
                    },
                  });
                }
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
                setIsValidBuy(false);
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
  text-align: start;
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
    background-color: #ebebeb;
    &.green {
      background-color: var(--a2);
      color: #ffffff;
    }
  }
`;
export default BuyBox;
