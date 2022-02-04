import React from "react";
import styled from "styled-components";
import RewardBoxItem from "./RewardBoxItem";
import { v1 as uuid } from "uuid";
function RewardBoxList({ setBuyBoxItem, boxItemList, setBuyClick }) {
  return (
    <BoxList>
      {boxItemList &&
        boxItemList.map((boxItem) => (
          <RewardBoxItem
            key={uuid()}
            setBuyClick={setBuyClick}
            setBuyBoxItem={setBuyBoxItem}
            boxItem={boxItem}
          />
        ))}
    </BoxList>
  );
}
const BoxList = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export default RewardBoxList;
