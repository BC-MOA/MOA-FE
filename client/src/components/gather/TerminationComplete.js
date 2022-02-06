import React from "react";
import styled, { css } from "styled-components";
import { styleTitle, styleSubTitle } from "style/common";
import CustomBtn from "components/gather/addGoal/CustomBtn";
import { useLocation } from "react-router-dom";

const styleText = css`
  ${styleSubTitle}
  font-family: "Pretendard-Regular";
  color: var(--Body_01);
  padding-top: 8px;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .Title {
    ${styleTitle}
    margin-top: 12px;
    font-size: 24px;
    line-height: 38px;
  }
`;

const Content = styled.div`
  padding-bottom: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  z-index: 1;

  .check {
    width: 72px;
    height: 72px;
    margin: 80px auto 0;
  }
`;

const CheckInfo = styled.div`
  position: relative;
  padding: 20px 24px;
  margin-top: 80px;
  background: #fff;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;

  .character {
    position: absolute;
    top: -62px;
    right: 16px;
    z-index: -1;
  }

  .Text {
    ${styleText}

    &:first-child {
      padding-top: 0;
    }

    .bold {
      color: var(--Title_02);
      font-family: "Pretendard-Medium";
      &.green {
        color: var(--a2);
      }
    }
  }
`;

const InfoEl = styled.div`
  display: flex;
  justify-content: space-between;
`;

function TerminationComplete() {
  const { state: props } = useLocation();

  return (
    <Container>
      <Content>
        <img
          alt="성공"
          className="check animate__animated animate__flipInX"
          src={require("assets/goal/check.svg").default}
          data-micron="bounce"
        />
        <div className="Title">중도해지가 완료되었어요</div>

        <CheckInfo>
          {props.category === "군적금" ? (
            <>
              <InfoEl className="Text">
                <div>적금명</div>
                <div className="bold">{props.account}</div>
              </InfoEl>
              <InfoEl className="Text">
                <div>계좌번호</div>
                <div className="bold">{"112-0330-0201"}</div>
              </InfoEl>
              <InfoEl className="Text green">
                <div>{"해지예상금액"}</div>
                <div className="bold">{800266} 원</div>
              </InfoEl>
            </>
          ) : (
            <>
              <InfoEl className="Text">
                <div>목표명</div>
                <div className="bold">{props.name}</div>
              </InfoEl>
              <InfoEl className="Text">
                <div>{"해지예상금액"}</div>
                <div className="bold green">{800266} 원</div>
              </InfoEl>
              <InfoEl className="Text">
                <div>입금계좌</div>
                <div className="bold">{"KB나라사랑우대통장"}</div>
              </InfoEl>
            </>
          )}
          <img
            className="character"
            src={require("assets/army_character.svg").default}
            alt="character"
          />
        </CheckInfo>
      </Content>
      <CustomBtn active={true} path="/gather">
        확인
      </CustomBtn>
    </Container>
  );
}

export default TerminationComplete;
