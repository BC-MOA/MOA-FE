import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import { v1 as uuid } from "uuid";
function RewardBoxItem({ boxItem }) {
  return (
    <BoxCard>
      <img
        className="boxImage"
        src={require(`assets/reward/reward_box_${boxItem.boxName}.png`)}
        alt={boxItem.boxName}
      />
      <BoxTitle>{boxItem.boxName}</BoxTitle>
      <BoxDescription>
        <span className="bold">[획득 가능 상품]</span>
        {boxItem.boxDescription &&
          boxItem.boxDescription.map((item) => (
            <span key={uuid()}>{item}</span>
          ))}
      </BoxDescription>
      <BoxPrice>
        <img src={require(`assets/ic_key_small.svg`).default} alt="열쇠개수" />
        <span>{boxItem.boxPrice}</span>
      </BoxPrice>
    </BoxCard>
  );
}
const BoxPrice = styled.div`
  display: flex;
  align-items: center;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: var(--Title_01);
  span {
    margin-bottom: -4px;
  }
`;
const BoxDescription = styled.div`
  min-height: 76px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Pretendard-Regular";
  font-size: 12px;
  line-height: 19px;
  color: var(--Body_01);
  margin-bottom: 8px;
  .bold {
    color: var(--Title_02);
  }
`;
const BoxTitle = styled.div`
  font-family: "Pretendard-SemiBold";
  font-weight: 600;
  font-size: 16px;
  line-height: 25px;
  color: var(--Title_01);
  margin-bottom: 4px;
`;
const BoxImage = css`
  width: 120px;
  height: 68px;
  margin-bottom: 12px;
`;
const BoxCard = styled.div`
  width: 160px;
  min-height: 254px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  .boxImage {
    ${BoxImage}
  }
  &:hover {
    cursor: pointer;
  }
`;
export default RewardBoxItem;
