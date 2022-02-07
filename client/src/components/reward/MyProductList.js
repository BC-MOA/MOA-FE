import ContentControlBtn from "components/common/ContentControlBtn";
import ScrollBox from "components/common/ScrollBox";
import MyProductListItem from "./MyProductListItem";
import React, { Fragment, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { v1 as uuid } from "uuid";
import { UserInventoryData } from "store/UserInventory";
const controlNameList = ["부대 내", "부대 외"];
function MyProductList({ tabName, tabList }) {
  const [listControl, setListControl] = useState(controlNameList[0]);
  const { userRewardList } = useContext(UserInventoryData);
  const [inReward, setInReward] = useState([]);
  const [outReward, setOutReward] = useState([]);
  useEffect(() => {
    setInReward(userRewardList.filter((item) => item.armyInOut === "in"));
    setOutReward(userRewardList.filter((item) => item.armyInOut === "out"));
  }, []);

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
        {[inReward, outReward].map((rewardList, index) => (
          <Fragment key={uuid()}>
            <div className="itemList">
              {controlNameList[index] === listControl &&
                0 < rewardList.length &&
                rewardList.map((item) => (
                  <MyProductListItem
                    key={uuid()}
                    item={item}
                    listControl={listControl}
                  ></MyProductListItem>
                ))}
            </div>
            {controlNameList[index] === listControl && 0 >= rewardList.length && (
              <div className="emptyList">
                <img
                  src={require("assets/reward/character_head.svg").default}
                  alt="캐릭터"
                />
                <div>아직 받은 상품이 없어요</div>
              </div>
            )}
          </Fragment>
        ))}
      </ScrollBox>
    </MyRewardListStyle>
  );
}
const MyRewardListStyle = styled.div`
  display: none;
  &.isSelect {
    margin: 0 auto;
    height: inherit;
    flex: 1;
    display: block;
  }
  .itemList {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    align-items: center;
  }
  .emptyList {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: inherit;
    color: var(--Body_01);
    font-family: "Pretendard-Medium";
    font-size: 16px;
    line-height: 25px;
    img {
      filter: grayscale();
      margin-bottom: 8px;
    }
  }
`;

export default MyProductList;
