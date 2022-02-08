import BackHeader from "components/common/BackHeader";
import Container from "components/common/Container";
import ScrollBox from "components/common/ScrollBox";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BoxListData } from "store/BoxList";
import styled from "styled-components";
import BuyBox from "../BuyBox";
import RewardBoxList from "../RewardBoxList";
import RewardUserInfo from "../RewardUserInfo";

function Reward() {
  const history = useNavigate();
  const [buyClick, setBuyClick] = useState(false);
  const [buyBoxItem, setBuyBoxItem] = useState({});
  const [isValidBuy, setIsValidBuy] = useState(false);
  const userId = "123";

  useEffect(() => {
    if (buyClick) {
      if (userId !== "") {
        setIsValidBuy(true);
      } else {
        history("/login");
      }
    }
  }, [buyClick]);

  return (
    <Container>
      <BackHeader path={-1} title={""} isScrolled={true}></BackHeader>
      <ScrollBox paddingValue={"24px 0  "}>
        <Content>
          <RewardUserInfo />
          <img
            className="banner"
            src={require("assets/reward/aboutRewardBanner.png")}
            alt="모아이용방법"
            onClick={() => {
              history("about");
            }}
          />
          <RewardBoxList
            setBuyClick={setBuyClick}
            setBuyBoxItem={setBuyBoxItem}
          />
        </Content>
      </ScrollBox>
      {isValidBuy && (
        <BuyBox
          setIsValidBuy={setIsValidBuy}
          setBuyClick={setBuyClick}
          buyBoxItem={buyBoxItem}
        />
      )}
    </Container>
  );
}
const Content = styled.div`
  .banner {
    width: 100%;
    margin-bottom: 16px;
    &:hover {
      cursor: pointer;
    }
  }
`;
export default Reward;
