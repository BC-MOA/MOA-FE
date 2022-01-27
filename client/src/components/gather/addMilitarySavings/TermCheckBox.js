import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CheckListItem from "./CheckListItem";
import { v1 as uuid } from "uuid";

function TermCheckBox({
  checkList,
  setCheckList,
  isAllChecked,
  setIsAllChecked,
}) {
  const [checks, setChecks] = useState([]);
  useEffect(() => {
    const checksTemp = checkList.map((item) => {
      return item.isCheck;
    });
    setChecks(checksTemp);
  }, [checkList]);

  useEffect(() => {
    if (checks.length) {
      setIsAllChecked(checks.reduce((a, b) => a * b));
    }
  }, [checks]);

  function funcChangeAllCheck() {
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
      <AllCheckBox onClick={funcChangeAllCheck}>
        <img
          src={require(`assets/gather/ic_term_allcheck${
            isAllChecked ? "_active" : ""
          }.svg`)}
          alt="전체 동의"
        />
        <span>전체동의</span>
      </AllCheckBox>
      <img src={require("assets/gather/devider.svg").default} alt="구분선" />
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
