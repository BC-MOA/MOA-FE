import React from "react";
import styled from "styled-components";
import RewardBoxItem from "./RewardBoxItem";
import { v1 as uuid } from "uuid";
function RewardBoxList({ boxItemList }) {
  return (
    <BoxList>
      {boxItemList &&
        boxItemList.map((boxItem) => (
          <RewardBoxItem key={uuid()} boxItem={boxItem} />
        ))}
    </BoxList>
  );
}
const BoxList = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

export default RewardBoxList;
