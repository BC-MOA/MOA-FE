import React from "react";
import styled from "styled-components";

function MyProductListItem({ item, listControl }) {
  return (
    <MyRewardListItemStyle>
      {/* todo 이미지 변경 */}
      <img src={require("./example.png")} alt={item.name} />
      <span className="itemName">{item.name}</span>
      <img
        className="barcode"
        src={require("assets/reward/barcode.svg").default}
        alt="바코드"
      />
      <img
        className="magnify"
        src={require("assets/reward/ic_magnify.svg").default}
        alt=""
      />
      <span>바코드를 누르면 결제창이</span>
      <span>활성화 됩니다</span>
    </MyRewardListItemStyle>
  );
}
const MyRewardListItemStyle = styled.div`
  width: 160px;
  height: 261px;
  padding: 24px 10px 14px;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 16px;
  color: var(--Body_03);
  img {
    margin-bottom: 8px;
  }
  .magnify {
    margin: -22px -42px 6px 0;
  }
  .itemName {
    font-family: "Pretendard-SemiBold";
    font-weight: 600;
    font-size: 16px;
    line-height: 25px;
    margin-bottom: 8px;
    color: var(--Title_01);
  }
  .barcode {
    width: 52px;
  }
`;
export default MyProductListItem;
