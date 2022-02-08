import styled from "styled-components";
import { hideScrollBar } from "style/common";
import AllCompContext from "../context/AllCompContext";
import { useContext } from "react";

import FilterList from "../function/FilterList";

//[styled comp] : 리스트 컨테이너
const StyledAllList = styled.div`
  ${hideScrollBar}
  background-color: var(--Surface);
  padding: 0 20px;
  height: calc(100vh - 280px);
`;

/**
 * [comp]
 * AllList
 *
 * [state]
 * none
 *
 * [props]
 * cond : 챌린지 필터링 조건
 */
const AllList = (props) => {
  const compList = useContext(AllCompContext);
  //챌린지 없을 때 테스트
  // const compList = [];

  return <StyledAllList>{FilterList(props.cond, compList)}</StyledAllList>;
};

export default AllList;
