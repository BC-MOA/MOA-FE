import styled from "styled-components";
import { BetCompCard, BetEndCompCard } from "./common/Card";
import { hideScrollBar } from "style/common";
import CompContext from "./context/CompContext";
import React, { useContext } from "react";

function filterList(cond, compList) {
  let filterdList;
  let cardList = [];

  //ing
  if (!cond) {
    const now = new Date();
    filterdList = compList.filter((obj) => obj.due > now);

    for (const obj of filterdList) {
      cardList.push(<BetCompCard key={obj.key} obj={obj}></BetCompCard>);
    }
  }
  //done
  else {
    const now = new Date();
    filterdList = compList.filter((obj) => obj.due < now);

    for (const obj of filterdList) {
      cardList.push(<BetEndCompCard key={obj.key} obj={obj}></BetEndCompCard>);
    }
  }

  return cardList;
}

//리스트-참여중
const MyList = styled.div`
  background-color: var(--Surface);
  height: 550px;

  padding: 0 20px 49px;

  ${hideScrollBar}
`;

const Result = (props) => {
  const compList = useContext(CompContext);

  return <MyList>{filterList(props.cond, compList)}</MyList>;
};

export default Result;
