import ContentControlBtn from "components/common/ContentControlBtn";
import ScrollBox from "components/common/ScrollBox";
import React, { useState } from "react";
import styled from "styled-components";
const controlNameList = ["부대 내", "부대 외"];
function MyRewardList({ tabName, tabList }) {
  const [listControl, setListControl] = useState(controlNameList[0]);
  return (
    <MyRewardListStyle className={tabList[1] === tabName ? "isSelect" : ""}>
      <ContentControlBtn
        btnGap="20px"
        marginBottom="0"
        listControl={listControl}
        setListControl={setListControl}
        controlNameList={controlNameList}
      ></ContentControlBtn>
      <ScrollBox paddingValue={"20px 0"}></ScrollBox>
    </MyRewardListStyle>
  );
}
const MyRewardListStyle = styled.div`
  display: none;
  &.isSelect {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }
`;

export default MyRewardList;
