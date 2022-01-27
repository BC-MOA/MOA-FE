import ContentControlBtn from "components/common/ContentControlBtn";
import ScrollBox from "components/common/ScrollBox";
import MyProductListItem from "./MyProductListItem";
import React, { useState } from "react";
import styled from "styled-components";
import { v1 as uuid } from "uuid";
const controlNameList = ["부대 내", "부대 외"];
function MyProductList({ tabName, tabList }) {
  const [listControl, setListControl] = useState(controlNameList[0]);
  const [inReward, setInReward] = useState([
    { name: "불닭볶음면" },
    { name: "바나나우유" },
  ]);
  const [outReward, setOutReward] = useState([
    { name: "불닭볶음면" },
    { name: "포스틱" },
    { name: "커피" },
    { name: "짜파게티" },
    { name: "아이스크림" },
  ]);

  // todo - 사용자 리워드 내역을 받아와 부대내외로 값을 나눠 저장
  return (
    <MyRewardListStyle className={tabList[1] === tabName ? "isSelect" : ""}>
      <ContentControlBtn
        btnGap="20px"
        marginBottom="0"
        listControl={listControl}
        setListControl={setListControl}
        controlNameList={controlNameList}
      />
      <ScrollBox paddingValue={"20px 0"}>
        <div className="itemList">
          {controlNameList[0] === listControl &&
            inReward &&
            inReward.map((item) => (
              <MyProductListItem
                key={uuid()}
                item={item}
                listControl={listControl}
              ></MyProductListItem>
            ))}
        </div>
        <div className="itemList">
          {controlNameList[1] === listControl &&
            outReward &&
            outReward.map((item) => (
              <MyProductListItem
                key={uuid()}
                item={item}
                listControl={listControl}
              ></MyProductListItem>
            ))}
        </div>
      </ScrollBox>
    </MyRewardListStyle>
  );
}
const MyRewardListStyle = styled.div`
  display: none;
  &.isSelect {
    display: block;
  }
  .itemList {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }
`;

export default MyProductList;
