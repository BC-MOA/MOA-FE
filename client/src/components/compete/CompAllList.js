import styled from "styled-components";
import { BasicCompCard } from "./Common/Card";
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
    },
    {
      key: "A2",
      due: new Date("2022-01-17T21:00:00"),
      thumb: "worldsoccer.png",
      title: "월드컵 예선 승자는?",
      versus: ["벨기에", "스페인"],
      total: 400,
    },
    {
      key: "A3",
      due: new Date("2022-01-11T21:00:00"),
      thumb: "soccer.png",
      title: "프리미어리그 경기 승자는?",
      versus: ["맨시티", "리버풀"],
      total: 320,
    },
    {
      key: "A4",
      due: new Date("2022-01-26T21:00:00"),
      thumb: "game.png",
      title: "롤챔스 경기 승자는?",
      versus: ["NS", "DK"],
      total: 300,
    },
  ],
};

function filterList(cond) {
  let filterdList;

  //popular
  if (cond === "popular") {
    filterdList = data.compList.sort(
      (a, b) => parseInt(b.total) - parseInt(a.total)
    );
  }
  //recent
  else if (cond === "recent") {
    filterdList = data.compList.sort((a, b) => b.due - a.due);
  }
  //done
  else {
    const now = new Date();
    filterdList = data.compList.filter((obj) => obj.due < now);
  }

  let cardList = [];

  for (const obj of filterdList) {
    cardList.push(<BasicCompCard key={obj.key} obj={obj}></BasicCompCard>);
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
const AllList = (props) => (
  <StyledAllList>{filterList(props.cond)}</StyledAllList>
);

export default AllList;
