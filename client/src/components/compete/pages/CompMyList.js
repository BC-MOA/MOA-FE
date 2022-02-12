import styled from "styled-components";
import { hideScrollBar } from "style/common";
import React, { useContext } from "react";
import { MyCompete } from "store/CompeteMy";

import FilterList from "../function/FilterList";

//[styled comp] : 리스트 컨테이너
const StyledMyList = styled.div`
  background-color: var(--Surface);
  height: calc(100vh - 185px);

  padding: 0 20px;

  ${hideScrollBar}
`;

//cond : 챌린지 필터링 조건
const MyList = ({ cond }) => {
  const compList = useContext(MyCompete).myCompList;

  //챌린지 없을 때 테스트
  // const compList = [];

  return <StyledMyList>{FilterList(cond, compList)}</StyledMyList>;
};

export default MyList;
