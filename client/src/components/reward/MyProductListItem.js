import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

function MyProductListItem({ item, listControl }) {
  const history = useNavigate();
  const { pathname } = useLocation();

  return (
    <MyRewardListItemStyle>
      {/* todo 이미지 변경 */}
      <img src={require("./example.png")} alt={item.name} />
      <span className="itemName">{item.name}</span>
      {/* todo item의 id값을 넣어주는 것으로 변경 id라는 변수 명을 넣어줘야함 */}
      <label
        onClick={() => {
          history(`${pathname}/${item.id}`, { state: { item } });
        }}
      >
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
      </label>
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
  label {
    position: relative;
    &:hover {
      cursor: pointer;
    }
  }
  .magnify {
    position: absolute;
    bottom: -4px;
    right: -4px;
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
