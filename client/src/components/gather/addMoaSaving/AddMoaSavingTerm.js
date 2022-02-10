import BackHeader from "components/common/BackHeader";
import Container from "components/common/Container";
import ScrollBox from "components/common/ScrollBox";
import SubmitButton from "components/common/SubmitButton";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import TermCheckBox from "../addMilitarySavings/TermCheckBox";
const checkLists = [
  { isCheck: false, name: "예금거래기본약관", necessary: true },
  { isCheck: false, name: "입출금이 자유로운 예금약관", necessary: true },
  { isCheck: false, name: "입출금통장 특약", necessary: true },
  { isCheck: false, name: "모아(MOA) 입출금통장 상품설명서", necessary: true },
  {
    isCheck: false,
    name: "불법/탈법 차명거래 금지 설명 확인",
    necessary: true,
  },
  { isCheck: false, name: "예금자보호법 설명 확인", necessary: true },
];
function AddMoaSavingTerm() {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [checkList, setCheckList] = useState(checkLists);
  const history = useNavigate();
  const { state: savingType } = useLocation();
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
      <BackHeader
        path={-1}
        title={"모아(MOA) 입출금 통장"}
        isScrolled={true}
      ></BackHeader>
      <ScrollBox paddingValue={"24px 0 0 0"}>
        <TermPageTitle>약관동의</TermPageTitle>
        <TermPageNotice>
          <span>입출금통장 개설을 위한 </span>
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
          history("passward", { state: savingType });
        }}
        isActive={isAllChecked}
      ></SubmitButton>
    </Container>
  );
}
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

export default AddMoaSavingTerm;
