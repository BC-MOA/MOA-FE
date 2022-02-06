import React from "react";
import styled from "styled-components";
import MyBoxListItem from "./MyBoxListItem";
import { v1 as uuid } from "uuid";
function MyBoxList({ tabName, tabList, userBoxList }) {
  return (
    <MyBoxListStyle className={tabList[0] === tabName ? "isSelect" : ""}>
      {0 < userBoxList.length &&
        userBoxList.map((item) => <MyBoxListItem key={uuid()} itme={item} />)}
      {0 >= userBoxList.length && (
        <div className="emptyList">
          <img
            src={require("assets/reward/character_head.svg").default}
            alt="캐릭터"
          />
          <div>아직 받은 MOA 박스가 없어요</div>
        </div>
      )}
    </MyBoxListStyle>
  );
}

const MyBoxListStyle = styled.div`
  display: none;
  &.isSelect {
    margin: 0 auto;
    height: inherit;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    align-items: center;
    .emptyList {
      text-align: center;
      color: var(--Body_01);
      font-family: "Pretendard-Medium";
      font-size: 16px;
      line-height: 25px;
      img {
        filter: grayscale();
        margin-bottom: 8px;
      }
    }
  }
`;
export default MyBoxList;
