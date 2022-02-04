import styled from "styled-components";
import { hideScrollBar } from "style/common";
import AllCompContext from "../context/AllCompContext";
import { useContext } from "react";

import createCardList from "../function/FilterList";

//[styled comp] : 리스트 컨테이너
const StyledAllList = styled.div`
  background-color: var(--Surface);
  height: 450px;

  padding: 0 20px;

  ${hideScrollBar}
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

  return <StyledAllList>{createCardList(props.cond, compList)}</StyledAllList>;
};

export default AllList;