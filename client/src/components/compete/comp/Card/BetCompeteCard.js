import styled from "styled-components";
import formatDate from "../../function/DateChanger";
import StyledLink from "components/common/StyledLink";
import kFormatter from "../../function/kFormatter";
import { PopUp } from "../PopUp";
import { NotLinkedKey } from "components/common/Header";
import React, { useState } from "react";

import {
  ContentBox,
  Count,
  Date,
  Thumb,
  CardDesign,
  TextBox,
  Title,
  Versus,
  StyledBetButtonBox,
  StyledBetButton,
} from "./CardComps";

//[styled comp] : 배팅 카드 컨테이너
const BetCard = styled.div`
  ${CardDesign}

  height: 124px;
`;

/**
 * [comp]
 * BetCompeteCard
 *
 * [state]
 * pop : 팝업창 관련 state
 *
 * [props]
 * 챌린지 정보
 */
function BetCompeteCard(props) {
  const obj = props.obj;

  const [pop, setPop] = useState(false);

  const togglePop = () => {
    setPop(!pop);
  };

  const popupProp = {
    onclick: togglePop,
    title: obj.title,
  };

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
          <NotLinkedKey count={obj.bet}></NotLinkedKey>
          <Count>{kFormatter(obj.total)}명 참여</Count>
        </div>
      </ContentBox>
      {pop && <PopUp obj={popupProp}></PopUp>}
      <StyledBetButtonBox>
        <StyledLink to={"/compete/" + obj.key} state={obj}>
          <StyledBetButton>배팅 수정</StyledBetButton>
        </StyledLink>
        <StyledBetButton onClick={togglePop}>배팅 취소</StyledBetButton>
      </StyledBetButtonBox>
    </BetCard>
  );
}

export default BetCompeteCard;
