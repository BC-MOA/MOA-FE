import BackHeader from "components/common/BackHeader";
import Container from "components/common/Container";
import ScrollBox from "components/common/ScrollBox";
import React, { useState } from "react";
import styled from "styled-components";
import BuyBox from "./BuyBox";
import RewardBoxList from "./RewardBoxList";
import RewardUserInfo from "./RewardUserInfo";
const boxItemList = [
  {
    boxName: "MOA박스",
    boxPrice: "7",
    boxDescription: ["다양한 PX 간식", "(냉동 식품 제외)"],
  },
  {
    boxName: "야금야금MOA박스",
    boxPrice: "12",
    boxDescription: ["PX 냉동식품", "PC방 2천원 금액권", "카페 기프티콘"],
  },
  {
    boxName: "왕창MOA박스",
    boxPrice: "20",
    boxDescription: ["PX 50% 할인권", "PC방 2천원 금액권", "카페 기프티콘"],
  },
  {
    boxName: "영끌MOA박스",
    boxPrice: "30",
    boxDescription: [
      "PX 1만원 금액권",
      "PC방 1만원 금액권",
      "치킨, 피자 기프티콘",
    ],
  },
];
function Reward() {
  const [buyClick, setBuyClick] = useState(false);
  const [buyBoxItem, setBuyBoxItem] = useState({});
  return (
    <Container>
      <BackHeader path={-1} title={""} isScrolled={true}></BackHeader>
      <ScrollBox paddingValue={"24px 0 0 "}>
        <Content>
          <RewardUserInfo />
          <img
            className="banner"
            src={require("assets/reward/aboutRewardBanner.png")}
            alt="모아이용방법"
          />
          <RewardBoxList
            setBuyClick={setBuyClick}
            setBuyBoxItem={setBuyBoxItem}
            boxItemList={boxItemList}
          />
        </Content>
      </ScrollBox>
      {buyClick && <BuyBox setBuyClick={setBuyClick} buyBoxItem={buyBoxItem} />}
    </Container>
  );
}
const Content = styled.div`
  .banner {
    margin-bottom: 16px;
  }
`;
export default Reward;
