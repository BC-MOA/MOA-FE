import BackHeader from "components/common/BackHeader";
import Container from "components/common/Container";
import ScrollBox from "components/common/ScrollBox";
import React, { useState } from "react";
import styled from "styled-components";
import MyBoxList from "../MyBoxList";
import MyProductList from "../MyProductList";
const tabList = ["MOA 박스", "상품"];
const userBoxList = [
  {
    boxId: "a123",
    boxName: "MOA박스",
    boxPrice: "7",
    boxDescription: ["다양한 PX 간식", "(냉동 식품 제외)"],
  },
  {
    boxId: "a456",
    boxName: "야금야금MOA박스",
    boxPrice: "12",
    boxDescription: ["PX 냉동식품", "PC방 2천원 금액권", "카페 기프티콘"],
  },
  {
    boxId: "a789",
    boxName: "왕창MOA박스",
    boxPrice: "20",
    boxDescription: ["PX 50% 할인권", "PC방 2천원 금액권", "카페 기프티콘"],
  },
  {
    boxId: "a012",
    boxName: "영끌MOA박스",
    boxPrice: "30",
    boxDescription: [
      "PX 1만원 금액권",
      "PC방 1만원 금액권",
      "치킨, 피자 기프티콘",
    ],
  },
  {
    boxId: "a345",
    boxName: "영끌MOA박스",
    boxPrice: "30",
    boxDescription: [
      "PX 1만원 금액권",
      "PC방 1만원 금액권",
      "치킨, 피자 기프티콘",
    ],
  },
];
// const userBoxList = [];
function MyReward() {
  const [tabName, setTabName] = useState(tabList[0]);

  return (
    <Container>
      <BackHeader path={-1} title={"내 보관함"} isScrolled={true}></BackHeader>
      {/* todo 박스 개수 및 리워드 총 개수 표시하기 */}
      <TabBox>
        <div
          onClick={() => {
            setTabName(tabList[0]);
          }}
          className={tabList[0] === tabName ? "isSelect" : ""}
        >
          {tabList[0]}(2)
        </div>
        <div
          onClick={() => {
            setTabName(tabList[1]);
          }}
          className={tabList[1] === tabName ? "isSelect" : ""}
        >
          {tabList[1]}(1)
        </div>
      </TabBox>
      <ScrollBox paddingValue={"36px 0 "}>
        <MyBoxList
          userBoxList={userBoxList}
          tabList={tabList}
          tabName={tabName}
        />
        <MyProductList tabList={tabList} tabName={tabName} />
      </ScrollBox>
    </Container>
  );
}
const TabBox = styled.div`
  display: flex;
  font-family: "Pretendard-SemiBold";
  font-size: 18px;
  line-height: 28px;
  color: var(--Line_01);
  margin: 16px -20px 0 -20px;
  align-items: center;
  padding: 8px 0;
  div {
    width: 50%;
    border-bottom: 1px solid var(--Line_01);
    &.isSelect {
      color: var(--a2);
      border-bottom: 1px solid var(--a2);
    }
    &:hover {
      cursor: pointer;
    }
  }
`;
export default MyReward;
