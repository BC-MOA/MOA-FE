import React from "react";
import styled from "styled-components";
import RewardBoxItem from "./RewardBoxItem";

function RewardBoxList({ boxItemList }) {
  return (
    <BoxList>
      {boxItemList &&
        boxItemList.map((boxItem) => <RewardBoxItem boxItem={boxItem} />)}
    </BoxList>
  );
}
const BoxList = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

export default RewardBoxList;
