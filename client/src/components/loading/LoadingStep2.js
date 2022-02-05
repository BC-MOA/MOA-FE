import Container from "components/common/Container";
import SubmitButton from "components/common/SubmitButton";
import React from "react";
import styled from "styled-components";

function LoadingStep2({ setStep }) {
  return (
    <Container>
      <Content>
        <Title>
          <span>모아 사용을 위해</span>
          <span>{"민수"}님의 군 관련 계좌가</span>
          <span>지금부터 자동으로 연결됩니다</span>
        </Title>
        <SubTitle>
          <div className="mix">
            <span className="green">나라사랑</span>
            <span>계좌와</span>
            <span className="green">군적금</span>
            <span>계좌</span>
          </div>
          <div>2가지만 찾으면 돼요</div>
        </SubTitle>
        <div className="img">
          <img
            src={require("assets/loading/loading_bank.png")}
            alt={"군관련계좌찾기"}
          />
        </div>
        <SubmitButton
          onClickFunc={() => {
            setStep(3);
          }}
          isActive={true}
          title={"확인"}
        />
      </Content>
    </Container>
  );
}
const Title = styled.div`
  margin: 52px 12px 31px;

  display: flex;
  flex-direction: column;
  text-align: start;
  font-family: "Pretendard-SemiBold";
  font-size: 24px;
  line-height: 38px;
  color: var(--Title_01);
`;
const SubTitle = styled.div`
  font-family: "Pretendard-SemiBold";
  font-size: 18px;
  line-height: 28px;
  text-align: start;
  margin-left: 12px;
  color: var(--Title_01);
  .mix {
    display: flex;
    gap: 4px;
  }
  .green {
    color: var(--a3);
  }
`;
const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  .img {
    display: flex;
    justify-content: end;
    margin-right: -36px;
    align-items: center;
    flex-grow: 1;
  }
`;
export default LoadingStep2;
