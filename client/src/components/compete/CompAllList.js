import styled from "styled-components";
import { BasicCompCard, BetEndCompCard } from "./common/Card";
import { hideScrollBar } from "style/common";
import CompeteContext from "./context/CompContext";
import { useContext } from "react";

//만료된 챌린지 분류
function filterDone(wantDone, compList) {
  let result = [];

  const now = new Date();

  if (wantDone) {
    result = compList.filter((obj) => obj.due < now);
  } else {
    result = compList.filter((obj) => obj.due >= now);
  }

  return result;
}

//화면에서 선택한 조건에 따라 다르게 보여줌
function filterList(cond, compList) {
  let filterdList;
  let cardList = [];

  if (cond != "done") {
    //마감 분류
    filterdList = filterDone(false, compList);

    //popular
    if (cond === "popular") {
      filterdList = filterdList.sort(
        (a, b) => parseInt(b.total) - parseInt(a.total)
      );
    }
    //recent
    else if (cond === "recent") {
      filterdList = filterdList.sort((a, b) => b.due - a.due);
    }

    for (const obj of filterdList) {
      cardList.push(<BasicCompCard key={obj.key} obj={obj}></BasicCompCard>);
    }
  } else {
    //done

    //마감 분류
    filterdList = filterDone(true, compList);
    //최신 정렬
    filterdList = filterdList.sort((a, b) => b.due - a.due);

    for (const obj of filterdList) {
      cardList.push(
        <BetEndCompCard type={true} key={obj.key} obj={obj}></BetEndCompCard>
      );
    }
  }

  return cardList;
}

const StyledAllList = styled.div`
  background-color: var(--Surface);
  height: 385px;

  padding: 0 20px 49px;

  ${hideScrollBar}
`;

//리스트-전체
const AllList = (props) => {
  const compList = useContext(CompeteContext);

  return <StyledAllList>{filterList(props.cond, compList)}</StyledAllList>;
};

export default AllList;
