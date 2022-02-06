import Container from "components/common/Container";
import SubmitButton from "components/common/SubmitButton";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RewardItemCard from "./RewardItemCard";
import { v1 as uuid } from "uuid";
import PopupRewardSelceted from "./PopupRewardSelceted";
function MyBoxOpen() {
  // todo - 박스 아이템에 대한 정보를 라우터 이동시 받아올 것
  const productList = [
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "a10",
  ];
  const [randomList, setRandomList] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [isModal, setIsModal] = useState("box");
  const [selectBtnClick, setSelectBtnClick] = useState(false);
  useEffect(() => {
    randomRefresh();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsModal("boxOpening");
    }, 500);
    setTimeout(() => {
      setIsModal("boxOpened");
    }, 1000);
  }, []);
  function randomRefresh() {
    let newList = [];
    while (newList.length < 6) {
      let num = Math.floor(Math.random() * productList.length);
      newList.push(productList[num]);

      const set = new Set(newList);
      newList = [...set];
    }
    setRandomList(newList);
  }
  return (
    <Container>
      {"box" === isModal && (
        <BoxImg>
          <img src={require("assets/reward/notOpenBox.png")} alt="박스" />
        </BoxImg>
      )}
      {"boxOpening" === isModal && (
        <BoxImg>
          <img src={require("assets/reward/openedBox.png")} alt="박스오픈" />
        </BoxImg>
      )}

      {"boxOpened" === isModal && !selectBtnClick && (
        <>
          <Header>
            <div>
              <span>다음 상품 중 </span>
              <span className="green">하나</span>
              <span>를 골라주세요</span>
            </div>
            <div
              onClick={() => {
                randomRefresh();
              }}
              className="refresh"
            >
              <img
                src={require("assets/reward/ic_refresh.svg").default}
                alt="새로고침"
              />
            </div>
          </Header>
          <MyBoxOpenList>
            {randomList &&
              randomList.map((item) => (
                <RewardItemCard
                  key={uuid()}
                  itemName={item}
                  selectedItem={selectedItem}
                  setSelectedItem={setSelectedItem}
                ></RewardItemCard>
              ))}
          </MyBoxOpenList>
          {/* todo  */}
          <SubmitButton
            title={"선택완료"}
            onClickFunc={() => {
              setSelectBtnClick(true);
            }}
            isActive={true}
          />
        </>
      )}
      {selectBtnClick && <PopupRewardSelceted selectedItem={selectedItem} />}
    </Container>
  );
}
const BoxImg = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Header = styled.div`
  height: 28px;
  margin: 8px 4px;
  display: flex;
  align-items: center;
  font-family: "Pretendard-SemiBold";
  font-size: 18px;
  line-height: 28px;
  justify-content: space-between;
  color: var(--Title_01);
  .green {
    margin-left: 4px;
    color: var(--a2);
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .refresh {
    width: 24px;
    height: 24px;
    border: 1px solid var(--Body_01);
    border-radius: 24px;
    box-sizing: border-box;
    margin-right: 8px;
    &:hover {
      cursor: pointer;
    }
  }
`;
const MyBoxOpenList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 11px;
  margin-bottom: 10px;
  flex: 1;
`;
export default MyBoxOpen;
