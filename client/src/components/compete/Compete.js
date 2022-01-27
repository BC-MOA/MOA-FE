import React from "react";
import { Header } from "../common/Header";
import Body from "./CompBody";
import CompeteContext from "./context/CompContext";
import NavBar from "components/common/NavBar";
import styled from "styled-components";

//임시 하단 nav
const StyledNavBar = styled(NavBar)`
  position: fixed;
  bottom: 0;
`;

//전체 챌린지 리스트
//단 사용자가 참여한 챌린지와 데이터 분리 필요
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
      pick: true,
      win: true,
    },
    {
      key: "A2",
      due: new Date("2022-03-15T21:00:00"),
      thumb: "worldsoccer.png",
      title: "월드컵 예선 승자는?",
      versus: ["벨기에", "스페인"],
      total: 50,
      bet: 1,
      pick: false,
      win: false,
    },
    {
      key: "A4",
      due: new Date("2022-01-28T21:00:00"),
      thumb: "soccer.png",
      title: "프리미어리그 경기 승자는?",
      versus: ["맨시티", "리버풀"],
      total: 320,
      bet: 4,
      pick: true,
      win: false,
    },
    {
      key: "A5",
      due: new Date("2022-01-28T21:00:00"),
      thumb: "soccer.png",
      title: "프리미어리그 경기 승자는?",
      versus: ["맨시티", "리버풀"],
      total: 320,
      bet: 4,
      pick: true,
      win: false,
    },
    {
      key: "A6",
      due: new Date("2022-01-28T21:00:00"),
      thumb: "soccer.png",
      title: "프리미어리그 경기 승자는?",
      versus: ["맨시티", "리버풀"],
      total: 320,
      bet: 4,
      pick: true,
      win: false,
    },
    {
      key: "A7",
      due: new Date("2022-01-26T21:00:00"),
      thumb: "game.png",
      title: "롤챔스 경기 승자는?",
      versus: ["NS", "DK"],
      total: 300,
      bet: 4,
      pick: true,
      win: false,
    },
  ],
};

function Compete() {
  return (
    <>
      <CompeteContext.Provider value={data.compList}>
        <Header title={false} keys={3000} alarm={true}></Header>
        <Body></Body>
      </CompeteContext.Provider>
      <StyledNavBar></StyledNavBar>
    </>
  );
}

export default Compete;
