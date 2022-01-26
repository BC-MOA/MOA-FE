import styled from "styled-components";
import { BasicCompCard, BetEndCompCard } from "./common/Card";
import { hideScrollBar } from "style/common";
import CompeteContext from "./context/CompContext";
import { useContext } from "react";

function filterList(cond, compList) {
  let filterdList;
  let cardList = [];

  if (cond != "done") {
    //popular
    if (cond === "popular") {
      filterdList = compList.sort(
        (a, b) => parseInt(b.total) - parseInt(a.total)
      );
    }
    //recent
    else if (cond === "recent") {
      filterdList = compList.sort((a, b) => b.due - a.due);
    }

    for (const obj of filterdList) {
      cardList.push(<BasicCompCard key={obj.key} obj={obj}></BasicCompCard>);
    }

    return cardList;
  }

  //done
  const now = new Date();
  let doneList = compList.filter((obj) => obj.due < now);
  filterdList = doneList.sort((a, b) => b.due - a.due);

  for (const obj of filterdList) {
    cardList.push(<BetEndCompCard key={obj.key} obj={obj}></BetEndCompCard>);
  }

  return cardList;
}

const StyledAllList = styled.div`
  background-color: var(--Surface);
  height: 400px;

  padding: 0 20px 49px;

  ${hideScrollBar}
`;

//리스트-전체
const AllList = (props) => {
  const compList = useContext(CompeteContext);

  return <StyledAllList>{filterList(props.cond, compList)}</StyledAllList>;
};

export default AllList;
