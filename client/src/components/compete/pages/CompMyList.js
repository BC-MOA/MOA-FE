import styled from "styled-components";
import { hideScrollBar } from "style/common";
import MyCompContext from "../context/MyCompContext";
import React, { useContext } from "react";

import FilterList from "../function/FilterList";

//[styled comp] : 리스트 컨테이너
const StyledMyList = styled.div`
  background-color: var(--Surface);
  height: calc(100vh - 185px);

  padding: 0 20px;

  ${hideScrollBar}
`;

/**
 * [comp]
 * MyList
 *
 * [state]
 * none
 *
 * [props]
 * cond : 챌린지 필터링 조건
 */
const MyList = (props) => {
  // const compList = useContext(MyCompContext);
  //챌린지 없을 때 테스트
  const compList = [];

  return <StyledMyList>{FilterList(props.cond, compList)}</StyledMyList>;
};

export default MyList;
