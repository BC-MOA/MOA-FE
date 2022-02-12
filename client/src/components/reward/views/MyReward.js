import BackHeader from "components/common/BackHeader";
import Container from "components/common/Container";
import ScrollBox from "components/common/ScrollBox";
import React, { useContext, useState } from "react";
import { UserInventoryData } from "store/UserInventory";
import styled from "styled-components";
import MyBoxList from "../MyBoxList";
import MyProductList from "../MyProductList";
const tabList = ["MOA 박스", "상품"];

function MyReward() {
  const [tabName, setTabName] = useState(tabList[0]);
  const { userBoxList, userRewardList, getUserBoxList } =
    useContext(UserInventoryData);

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
          {tabList[0]}({userBoxList.length})
        </div>
        <div
          onClick={() => {
            setTabName(tabList[1]);
          }}
          className={tabList[1] === tabName ? "isSelect" : ""}
        >
          {tabList[1]}({userRewardList.length})
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
