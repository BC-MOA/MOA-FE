import styled from "styled-components";
import { css } from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { Key } from "./KeyBellHeader";
import { BetButtonBox, StyledBetButton } from "./BetCardButton";
import formatDate from "./DateChanger";

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

//기본 카드
const Card = styled.div`
  ${CardDesign}
  transition: 0.1s all;

  :hover {
    opacity: 0.5;
    text-decoration: none;
  }
`;

//배팅 카드
const BetCard = styled.div`
  ${CardDesign}

  height: 124px;
`;

//배팅 종료 카드
const BetEndCard = styled.div`
  ${CardDesign}

  filter: grayscale(80%);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Date = styled.div`
  width: 108px;
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

const Versus = styled.div`
  font-size: 14px;
  font-family: "Pretendard-Medium";
  color: var(--Body_01);
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

function BasicCompCard(props) {
  const obj = props.obj;

  //월 일 요일 시간
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
          <Count>{obj.total}명 참여</Count>
        </ContentBox>
      </Card>
    </StyledLink>
  );
}

function BetCompCard(props) {
  const obj = props.obj;

  //월 일 요일 시간
  return (
    <BetCard>
      <Date>{formatDate(obj.due)} 마감</Date>
      <ContentBox>
        <Thumb src={require("assets/compete/" + obj.thumb)} />
        <TextBox>
          <Title>{obj.title}</Title>
          <Versus>
            {obj.versus[0]} vs {obj.versus[1]}
          </Versus>
        </TextBox>
        <div>
          <Key count={obj.bet}></Key>
          <Count>{obj.total}명 참여</Count>
        </div>
      </ContentBox>
      <BetButtonBox>
        <StyledBetButton type={true}></StyledBetButton>
        <StyledBetButton type={false}></StyledBetButton>
      </BetButtonBox>
    </BetCard>
  );
}

function BetEndCompCard(props) {
  const obj = props.obj;

  return (
    <BetEndCard>
      <ContentBox>
        <Thumb src={require("assets/compete/" + obj.thumb)} />
        <TextBox>
          <Title>{obj.title}</Title>
          <Versus>
            {obj.versus[0]} vs {obj.versus[1]}
          </Versus>
        </TextBox>
        <div>
          <Count>{obj.total}명 참여</Count>
        </div>
      </ContentBox>
    </BetEndCard>
  );
}

export { BasicCompCard, BetCompCard, BetEndCompCard };
