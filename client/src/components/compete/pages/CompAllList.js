import styled from "styled-components";
import { hideScrollBar } from "style/common";
import { AllCompete } from "store/CompeteAll";
import { useContext } from "react";
import FilterList from "../function/FilterList";

//[styled comp] : 리스트 컨테이너
const StyledAllList = styled.div`
  ${hideScrollBar}
  background-color: var(--Surface);
  padding: 0 20px;
  height: calc(100vh - 280px);
`;

//cond : 챌린지 필터링 조건
const AllList = ({ cond }) => {
  const compList = useContext(AllCompete).allCompList;
  //챌린지 없을 때 테스트
  // const compList = [];

  return <StyledAllList>{FilterList(cond, compList)}</StyledAllList>;
};

export default AllList;
