import BackHeader from "components/common/BackHeader";
import React from "react";
import { useLocation } from "react-router-dom";
import { hideScrollBar } from "style/common";
import styled from "styled-components";

function AddMilitarySavingsTerm() {
  const { state: item } = useLocation();

  return (
    <Container>
      <BackHeader path={-1} title={item.적금명} isScrolled={true}></BackHeader>
      <ScrollBox>
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
      </ScrollBox>
    </Container>
  );
}
const Container = styled.div`
  padding: 8px 20px;
  box-sizing: border-box;
  background: var(--Surface);
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const ScrollBox = styled.div`
  ${hideScrollBar}
  height: 100%;
  padding-top: 16px;
  box-sizing: border-box;
`;
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
    color: var(--a3);
  }
`;

export default AddMilitarySavingsTerm;
