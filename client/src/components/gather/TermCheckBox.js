import React, { useMemo } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import styled from "styled-components";
import CheckListItem from "./CheckListItem";
import { v1 as uuid } from "uuid";

const checkLists = [
  { isCheck: false, name: "예금거래기본약관", necessary: true },
  { isCheck: false, name: "적립식예금약관", necessary: true },
  { isCheck: false, name: "군적금 특약", necessary: true },
  { isCheck: false, name: "군적금 상품 설명서", necessary: true },
  {
    isCheck: false,
    name: "불법/탈법 차명거래 금지 설명 확인",
    necessary: true,
  },
  { isCheck: false, name: "예금자보호법 설명 확인", necessary: true },
];
function TermCheckBox() {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [checkList, setCheckList] = useState(checkLists);
  const checks = useMemo(() => {
    return checkList.map((item) => {
      return item.isCheck;
    });
  }, [checkList]);
  useEffect(() => {
    setIsAllChecked(checks.reduce((a, b) => a * b));
  }, [checks]);

  function funcMakeAllCheck() {
    const temp = [...checkList];
    temp.map((item, index) => {
      if (isAllChecked) {
        item.isCheck = false;
      } else {
        item.isCheck = true;
      }
      return item;
    });
    setCheckList(temp);
    setIsAllChecked(!isAllChecked);
  }

  return (
    <TermCheckBoxStyle>
      <AllCheckBox onClick={funcMakeAllCheck}>
        <img
          src={require(`assets/gather/ic_term_allcheck${
            isAllChecked ? "_active" : ""
          }.svg`)}
          alt="전체 동의"
        />
        <span>전체동의</span>
      </AllCheckBox>
      <CheckListBox>
        {checkList.map((item, index) => {
          return (
            <CheckListItem
              item={item}
              index={index}
              key={uuid()}
              checkList={checkList}
              setCheckList={setCheckList}
            ></CheckListItem>
          );
        })}
      </CheckListBox>
    </TermCheckBoxStyle>
  );
}
const TermCheckBoxStyle = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 12px;
`;
const AllCheckBox = styled.div`
  padding: 12px 20px;

  text-align: start;
  display: flex;
  align-items: center;
  color: var(--Titel_02);
  font-family: "Pretendard-Medium";
  border-bottom: 1px solid var(--Line_03);
  font-size: 16px;
  line-height: 25px;
  :hover {
    cursor: pointer;
  }
  img {
    padding: 0.5px;
    margin-right: 4px;
  }
`;
const CheckListBox = styled.div`
  padding: 12px 20px;
  text-align: start;
`;

export default TermCheckBox;
