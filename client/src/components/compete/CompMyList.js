import styled from "styled-components";
import { BetCompCard, BetEndCompCard } from "./common/Card";
import { hideScrollBar } from "style/common";

//전체 챌린지 리스트
const data = {
  compList: [
    {
      //key
      key: "A1",
      due: new Date("2022-01-14T21:00:00"),
      thumb: "music.png",
      title: "오늘 뮤직뱅크 1위는?",
      versus: ["아이유", "BTS"],
      total: 100,
      bet: 3,
    },
    {
      key: "A2",
      due: new Date("2022-01-17T21:00:00"),
      thumb: "worldsoccer.png",
      title: "월드컵 예선 승자는?",
      versus: ["벨기에", "스페인"],
      total: 400,
      bet: 1,
    },
    {
      key: "A3",
      due: new Date("2022-01-28T21:00:00"),
      thumb: "soccer.png",
      title: "프리미어리그 경기 승자는?",
      versus: ["맨시티", "리버풀"],
      total: 320,
      bet: 4,
    },
  ],
};

function filterList(cond) {
  let filterdList;
  let cardList = [];

  //ing
  if (!cond) {
    const now = new Date();
    filterdList = data.compList.filter((obj) => obj.due > now);

    for (const obj of filterdList) {
      cardList.push(<BetCompCard key={obj.key} obj={obj}></BetCompCard>);
    }
  }
  //done
  else {
    const now = new Date();
    filterdList = data.compList.filter((obj) => obj.due < now);

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

const Result = (props) => <MyList>{filterList(props.cond)}</MyList>;

export default Result;
