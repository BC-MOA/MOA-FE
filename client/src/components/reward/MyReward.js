import BackHeader from "components/common/BackHeader";
import Container from "components/common/Container";
import ScrollBox from "components/common/ScrollBox";
import React from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
const tabList = ["MOA 박스", "리워드"];
function MyReward() {
  const [tabName, setTabName] = useState(tabList[0]);
  return (
    <Container>
      <BackHeader
        path={"/reward"}
        title={"내 보관함"}
        isScrolled={true}
      ></BackHeader>
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
      <ScrollBox paddingValue={"36px 0 0 0"}></ScrollBox>
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
