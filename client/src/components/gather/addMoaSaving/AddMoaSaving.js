import BackHeader from "components/common/BackHeader";
import Container from "components/common/Container";
import React from "react";
import styled from "styled-components";

function AddMoaSaving() {
  return (
    <Container>
      <BackHeader path={-1} isScrolled={true} title={""} />
      <Title>{"민수"}님,</Title>
      <Title>첫 {"목표"}를 세우시는군요!</Title>
      <SubTitle>
        목표 금액과 비상금은 KEB 하나은행과 모아(MOA)가 함께 제휴해 제공하는
        통장에 모아져요
      </SubTitle>
    </Container>
  );
}
const Title = styled.div`
  font-family: "Pretendard-SemiBold";
  font-size: 21px;
  line-height: 33px;
  color: var(--Title_01);
  text-align: start;
`;
const SubTitle = styled.div`
  margin-top: 4px;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  line-height: 22px;
  color: var(--Body_01);
  text-align: start;
  margin-bottom: 84px;
`;
export default AddMoaSaving;
