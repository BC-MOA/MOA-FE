import React from "react";
import styled from "styled-components";

function RewardItemCard({ item, selectedItem, setSelectedItem }) {
  return (
    <ItemCard
      onClick={() => {
        setSelectedItem(item);
      }}
      className={
        item.productName === selectedItem.productName ? "isSelect" : ""
      }
    >
      <img src={item.productImageUrl} alt={item.productName} />
      <div className="itemName">{item.productName}</div>
      <button
        className={
          item.productName === selectedItem.productName ? "isSelect" : ""
        }
      >
        {item.productName === selectedItem.productName ? "선택됨" : "선택"}
      </button>
    </ItemCard>
  );
}
const ItemCard = styled.div`
  width: calc(160 / 335 * 100%);
  border-radius: 10px;
  padding: 16px;
  box-sizing: border-box;
  background-color: var(--Line_03);
  font-family: "Pretendard-SemiBold";
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .itemName {
    margin: 0 -16px 8px -16px;
  }
  img {
    width: 100%;
    margin-bottom: 6px;
  }
  button {
    line-height: 22px;
    padding: 3px 24px;
    background-color: var(--Body_01);
    border-radius: 10px;
    color: #fff;
    border: none;
  }
  &.isSelect {
    background-color: rgba(76, 175, 91, 0.15);
    button {
      background-color: var(--a2);
    }
  }
`;
export default RewardItemCard;
