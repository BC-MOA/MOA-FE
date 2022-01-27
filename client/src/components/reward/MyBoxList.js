import React from "react";
import styled from "styled-components";
import MyBoxListItem from "./MyBoxListItem";
import { v1 as uuid } from "uuid";
function MyBoxList({ tabName, tabList, userBoxList }) {
  return (
    <MyBoxListStyle className={tabList[0] === tabName ? "isSelect" : ""}>
      {userBoxList &&
        userBoxList.map((item) => <MyBoxListItem key={uuid()} itme={item} />)}
    </MyBoxListStyle>
  );
}

const MyBoxListStyle = styled.div`
  display: none;
  gap: 15px;
  flex-wrap: wrap;
  &.isSelect {
    display: felx;
  }
`;
export default MyBoxList;
