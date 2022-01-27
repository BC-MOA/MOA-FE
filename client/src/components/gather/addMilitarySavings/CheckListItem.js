import React from "react";
import styled from "styled-components";

function CheckListItem({ index, checkList, setCheckList, item }) {
  return (
    <CheckListItemStyle>
      <label
        onClick={() => {
          const temp = [...checkList];
          temp[index].isCheck = !temp[index].isCheck;
          setCheckList(temp);
        }}
      >
        <img
          src={require(`assets/gather/ic_term_check${
            item.isCheck ? "_active" : ""
          }.svg`)}
          alt={`${item.name}+동의`}
        />
        <span className="itemName">{item.name}</span>
        <span>{item.necessary ? "[필수]" : "[선택]"}</span>
      </label>
      <img
        className="nextIcon"
        src={require("assets/gather/ic_term_next.svg").default}
        alt="약관이동"
      />
    </CheckListItemStyle>
  );
}

const CheckListItemStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 0;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  line-height: 22px;
  color: var(--Title_02);
  text-align: start;
  .checkIcBox {
    width: 24px;
    height: 24px;
  }
  label {
    display: flex;
    align-items: flex-end;
    &:hover {
      cursor: pointer;
    }
  }
  .itemName {
    margin-left: 4px;
    margin-right: 6px;
  }
  .nextIcon {
    cursor: pointer;
  }
`;
export default CheckListItem;
