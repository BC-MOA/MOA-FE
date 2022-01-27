import styled from "styled-components";
import { css } from "styled-components";
import React, { useState } from "react";
import { NoLinkKey } from "./KeyBellHeader";
import { StyledBetButtonBox, StyledBetButton } from "./BetCardButton";
import formatDate from "./DateChanger";
import StyledLink from "components/common/StyledLink";
import kFormatter from "./kFormatter";

//기본 카드 디자인
const CardDesign = css`
  background-color: white;
  width: 295px;
  height: 80px;
  margin: 15px 0;
  border-radius: 12px;
  padding: 10px 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

//공통 요소
const Date = styled.div`
  max-width: 120px;
  height: 19px;
  font-size: 12px;
  font-family: "Pretendard-Medium";
  color: var(--Body_01);
  margin-bottom: 5px;
`;

const ContentBox = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Thumb = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const TextBox = styled.div`
  width: 180px;
  height: 50px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Title = styled.div`
  min-width: 170px;
  font-size: 15px;
  font-family: "Pretendard-SemiBold";
  color: var(--Title_01);

  margin-bottom: 5px;
  text-align: left;
`;

const VersusCSS = css`
  span:nth-child(${({ pick }) => (pick ? 1 : 3)}) {
    color: var(--a3);
  }
`;

const Versus = styled.div`
  font-size: 14px;
  font-family: "Pretendard-Medium";
  color: var(--Body_01);

  ${VersusCSS};
`;

const Count = styled.div`
  width: 75px;
  min-width: 75px;
  height: 19px;
  background-color: rgba(76, 175, 91, 0.15);

  border-radius: 8px;
  margin-top: 10px;

  line-height: 19px;

  font-size: 12px;
  font-family: "Pretendard-Medium";
  color: var(--a2);
`;

//기본 카드 컨테이너
const Card = styled.div`
  ${CardDesign}
  transition: 0.1s all;

  :hover {
    opacity: 0.5;
    text-decoration: none;
  }
`;

//기본 카드
function BasicCompCard(props) {
  const obj = props.obj;

  return (
    <StyledLink to={"/compete/" + obj.key} state={{ info: obj }}>
      <Card>
        <Date>{formatDate(obj.due)} 마감</Date>
        <ContentBox>
          <Thumb src={require("assets/compete/" + obj.thumb)} />
          <TextBox>
            <Title>{obj.title}</Title>
            <Versus>
              {obj.versus[0]} vs {obj.versus[1]}
            </Versus>
          </TextBox>
          <Count>{kFormatter(obj.total)}명 참여</Count>
        </ContentBox>
      </Card>
    </StyledLink>
  );
}

//배팅 카드 컨테이너
const BetCard = styled.div`
  ${CardDesign}

  height: 124px;
`;

//배팅 카드
function BetCompCard(props) {
  const obj = props.obj;

  return (
    <BetCard>
      <Date>{formatDate(obj.due)} 마감</Date>
      <ContentBox>
        <Thumb src={require("assets/compete/" + obj.thumb)} />
        <TextBox>
          <Title>{obj.title}</Title>
          <Versus pick={obj.pick}>
            <span>{obj.versus[0]} </span>
            <span>vs</span>
            <span> {obj.versus[1]}</span>
          </Versus>
        </TextBox>
        <div>
          <NoLinkKey count={obj.bet}></NoLinkKey>
          <Count>{kFormatter(obj.total)}명 참여</Count>
        </div>
      </ContentBox>
      <StyledBetButtonBox>
        <StyledBetButton>배팅 수정</StyledBetButton>
        <StyledBetButton>배팅 취소</StyledBetButton>
      </StyledBetButtonBox>
    </BetCard>
  );
}

//배팅 종료 카드 컨테이너
const BetEndCard = styled.div`
  ${CardDesign}

  background-color: var(--Line_03);
  height: 60px;

  ${ContentBox} :not(:last-child) {
    filter: grayscale(1);
  }
`;

const GrayCover = styled.div`
  background-color: var(--Line_03);
  opacity: 0.5;

  border-radius: 12px;
`;

//결과
const Result = styled.div`
  width: 21px;
  height: 19px;
  color: white;
  border-radius: 8px;
  padding: 0 8px;
  font-family: "Pretendard-Regular";
  font-size: 12px;
  line-height: 19px;
  background-color: ${({ result }) => (result ? "var(--a2)" : "var(--alert)")};
`;

//배팅 종료 카드
function BetEndCompCard(props) {
  const obj = props.obj;

  const betResult = obj.pick === obj.win;

  return (
    <GrayCover>
      <BetEndCard>
        <ContentBox>
          <Thumb src={require("assets/compete/" + obj.thumb)} />
          <TextBox>
            <Title>{obj.title}</Title>
            {props.type ? (
              <Versus>
                {obj.versus[0]} vs {obj.versus[1]}
              </Versus>
            ) : (
              <Versus>{betResult ? obj.versus[0] : obj.versus[1]}</Versus>
            )}
          </TextBox>
          {props.type ? (
            <Count>{kFormatter(obj.total)}명 참여</Count>
          ) : (
            <Result result={betResult}>{betResult ? "성공" : "실패"}</Result>
          )}
        </ContentBox>
      </BetEndCard>
    </GrayCover>
  );
}

export { BasicCompCard, BetCompCard, BetEndCompCard, Count, Date };
