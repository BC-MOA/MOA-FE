import React from "react";
import kFormatter from "../../function/kFormatter";
import styled from "styled-components";

import {
  ContentBox,
  Count,
  Thumb,
  CardDesign,
  TextBox,
  Title,
  Versus,
} from "./CardComps";

//[styled comp] : 배팅 종료 카드 컨테이너
const BetEndCard = styled.div`
  ${CardDesign}

  background-color: var(--Line_03);
  height: 60px;

  ${ContentBox} :not(:last-child) {
    filter: grayscale(1);
  }
`;

//[styled comp] : 마감된 챌린지 흐리게 만드는 박스
const GrayCover = styled.div`
  background-color: var(--Line_03);
  opacity: 0.5;

  border-radius: 12px;
`;

//[styled comp] : 배팅 결과
const Result = styled.div`
  width: 21px;
  height: 19px;
  color: white;
  border-radius: 8px;
  padding: 0 8px;
  font-family: "Pretendard-Regular";
  font-size: 12px;
  line-height: 19px;
  background-color: ${({ $result }) =>
    $result ? "var(--a2)" : "var(--alert)"};
`;

/**
 * [comp]
 * EndCompeteCard
 *
 * [state]
 * none
 *
 * [props]
 * 챌린지 정보
 * type: 전체/내 챌린지 구분을 위한 bool
 */
function EndCompeteCard(props) {
  const obj = props.obj;

  const betResult = obj.pick === obj.win;

  return (
    <GrayCover>
      <BetEndCard>
        <ContentBox>
          <Thumb src={require("assets/compete/" + obj.thumb)} />
          <TextBox>
            <Title>{obj.title}</Title>

            <Versus>{betResult ? obj.versus[0] : obj.versus[1]}</Versus>
          </TextBox>
          {props.type ? (
            <Count>{kFormatter(obj.total)}명 참여</Count>
          ) : (
            <Result $result={betResult}>{betResult ? "성공" : "실패"}</Result>
          )}
        </ContentBox>
      </BetEndCard>
    </GrayCover>
  );
}

export default EndCompeteCard;
