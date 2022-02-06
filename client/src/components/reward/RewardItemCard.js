import React from "react";
import styled from "styled-components";

function RewardItemCard({ itemName, selectedItem, setSelectedItem }) {
  return (
    <ItemCard
      onClick={() => {
        setSelectedItem(itemName);
      }}
      className={itemName === selectedItem ? "isSelect" : ""}
    >
      <img
        src={require("assets/reward/reward_item_coffee.png")}
        alt={itemName}
      />
      <span>{itemName}</span>
      <button className={itemName === selectedItem ? "isSelect" : ""}>
        {itemName === selectedItem ? "선택됨" : "선택"}
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
  img {
    width: calc(80 / 160 * 100%);
    margin-bottom: 6px;
  }
  span {
    margin-bottom: 8px;
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
