import React, { useState } from "react";
import styled from "styled-components";
import { hideScrollBar } from "style/common";
import Card from "./CompCard";
import { SetType, Type } from "./CompSetType";

//전체 챌린지 리스트
const dataAll = {
  compList: [
    {
      due: Date("2021-01-14T21:00:00"),
      thumb: "assets/compete/music.png",
      title: "오늘 뮤직뱅크 1위는?",
      versus: ["아이유", "BTS"],
      total: 420,
    },
    {
      due: Date("2021-01-17T21:00:00"),
      thumb: "assets/compete/worldsoccer.png",
      title: "월드컵 예선 승자는?",
      versus: ["벨기에", "스페인"],
      total: 357,
    },
    {
      due: Date("2021-01-11T21:00:00"),
      thumb: "assets/compete/soccer.png",
      title: "프리미어리그 경기 승자는?",
      versus: ["맨시티", "리버풀"],
      total: 320,
    },
    {
      due: Date("2021-01-26T21:00:00"),
      thumb: "assets/compete/game.png",
      title: "롤챔스 경기 승자는?",
      versus: ["NS", "DK"],
      total: 300,
    },
  ],
};

//사용자가 참여중인 챌린지 리스트
const dataUser = {};

//조건을 전달받아 가공된 리스트 return하는 함수
function filterList() {
  let list = [];

  for (let i = 0; i < 5; i++) {
    list.push(<Card key={i}></Card>);
  }

  console.log(list);

  return list;
}

//리스트-전체
const AllList = (props) => <StyledAllList>{filterList()}</StyledAllList>;

const StyledAllList = styled.div`
  background-color: red;
  height: 400px;

  padding: 0 20px 49px;

  ${hideScrollBar}
`;

//리스트-참여중
const MyList = styled.div`
  background-color: orange;
  height: 600px;

  padding-bottom: 49px;

  ${hideScrollBar}
`;

function CompList(props) {
  const [filter, setFilter] = useState("pop");

  function setFilterWrapper(input) {
    setFilter(input);
  }

  return (
    <>
      {props.category ? (
        <>
          <SetType>
            <Type
              disabled={filter === "popular"}
              onClick={() => setFilterWrapper("popular")}
            >
              인기순
            </Type>
            <Type
              disabled={filter === "recent"}
              onClick={() => setFilterWrapper("recent")}
            >
              최신순
            </Type>
            <Type
              disabled={filter === "done"}
              onClick={() => setFilterWrapper("done")}
            >
              마감
            </Type>
          </SetType>
          <AllList cond={filter}></AllList>
        </>
      ) : (
        <MyList></MyList>
      )}
    </>
  );
}

export default CompList;
