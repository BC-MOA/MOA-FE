import BackHeader from "components/common/BackHeader";
import Container from "components/common/Container";
import SubmitButton from "components/common/SubmitButton";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserData } from "store/User";
import styled from "styled-components";

function AddMoaSaving() {
  const history = useNavigate();
  const { state: savingType } = useLocation();
  const { userData } = useContext(UserData);
  return (
    <Container>
      <BackHeader path={-1} isScrolled={true} title={""} />
      <Title className="first">{userData.name}님,</Title>
      <Title>
        첫 {savingType}
        {"목표" === savingType ? "를" : "을"} 세우시는군요!
      </Title>
      <SubTitle>
        목표 금액과 비상금은 KEB 하나은행과 모아(MOA)가 함께 제휴해 제공하는
        통장에 모아져요
      </SubTitle>
      <img src={require("assets/gather/제휴통장.png")} alt="모아제휴통장" />
      <SavingName>
        <span>모아 (MOA)</span>
        <img src={require("assets/ic_close.svg").default} alt="엑스" />
        <span>KEB 하나은행</span>
      </SavingName>
      <BtnStyle>
        <SubmitButton
          title={"통장 개설하기"}
          onClickFunc={() => {
            history("term", { state: savingType });
          }}
          isActive={true}
        />
      </BtnStyle>
    </Container>
  );
}
const Title = styled.div`
  &.first {
    margin-top: 4px;
  }
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

const SavingName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Pretendard-SemiBold";
  font-size: 18px;
  line-height: 28px;
  color: var(--Title_02);
  margin-top: 16px;
  img {
    margin: 0 12px;
    width: 12px;
  }
`;
const BtnStyle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
export default AddMoaSaving;
