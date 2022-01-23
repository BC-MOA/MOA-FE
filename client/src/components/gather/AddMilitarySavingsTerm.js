import BackHeader from "components/common/BackHeader";
import Container from "components/common/Container";
import ScrollBox from "components/common/ScrollBox";
import SubmitButton from "components/common/SubmitButton";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import TermCheckBox from "./TermCheckBox";
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
function AddMilitarySavingsTerm() {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [checkList, setCheckList] = useState(checkLists);
  const { state: item } = useLocation();
  const history = useNavigate();
  useEffect(() => {
    resetAllCheck();
  }, []);
  function resetAllCheck() {
    const temp = [...checkList];
    temp.map((item, index) => {
      item.isCheck = false;

      return item;
    });
    setCheckList(temp);
    setIsAllChecked(false);
  }
  return (
    <Container>
      <BackHeader path={-1} title={item.적금명} isScrolled={true}></BackHeader>
      <ScrollBox paddingValue={"16px 0 0 0"}>
        <TermPageNum>
          <span className="bold">1</span>
          <span>/</span>
          <span>2</span>
        </TermPageNum>
        <TermPageTitle>약관동의</TermPageTitle>
        <TermPageNotice>
          <span>적금계좌 개설을 위한 </span>
          <span className="highLight">약관 및 동의서</span>
          <span>를 확인합니다.</span>
        </TermPageNotice>
        <TermCheckBox
          checkList={checkList}
          setCheckList={setCheckList}
          isAllChecked={isAllChecked}
          setIsAllChecked={setIsAllChecked}
        ></TermCheckBox>
      </ScrollBox>
      <SubmitButton
        title={"다음"}
        onClickFunc={() => {
          history("form", { state: item });
        }}
        isActive={isAllChecked}
      ></SubmitButton>
    </Container>
  );
}
const TermPageNum = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: var(--Body_02);
  margin-bottom: 4px;
  .bold {
    font-weight: 500;
    color: var(--Title_02);
  }
`;
const TermPageTitle = styled.div`
  font-family: "Pretendard-SemiBold";
  font-weight: 600;
  font-size: 21px;
  line-height: 33px;
  color: var(--Title_01);
  text-align: start;
  margin-bottom: 4px;
`;
const TermPageNotice = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 14px;
  line-height: 22px;
  color: var(--Body_01);
  text-align: start;
  margin-bottom: 28px;

  .highLight {
    color: var(--a2);
  }
`;

export default AddMilitarySavingsTerm;
