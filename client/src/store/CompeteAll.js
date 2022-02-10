import { createContext, useState } from "react";

//data
const data = [
  {
    key: "1",
    due: new Date("2022-03-14T21:00:00"),
    thumb: "music.png",
    title: "오늘 뮤직뱅크 1위는?",
    versus: ["아이유", "BTS"],
    totalkey: [13, 29],
    total: 100,
    win: true,
  },
  {
    key: "2",
    due: new Date("2022-04-15T02:00:00"),
    thumb: "worldsoccer.png",
    title: "월드컵 예선 승자는?",
    versus: ["벨기에", "스페인"],
    totalkey: [84, 59],
    total: 50,
    win: false,
  },
  {
    key: "3",
    due: new Date("2022-04-28T08:00:00"),
    thumb: "soccer.png",
    title: "프리미어리그 경기 승자는1?",
    versus: ["맨시티", "리버풀"],
    totalkey: [77, 29],
    total: 320,
    win: false,
  },
  {
    key: "4",
    due: new Date("2022-07-14T03:00:00"),
    thumb: "game.png",
    title: "롤챔스 경기 승자는?",
    versus: ["T1", "DK"],
    totalkey: [15, 29],
    total: 300,
    win: false,
  },
  {
    key: "5",
    due: new Date("2022-03-21T17:00:00"),
    thumb: "game.png",
    title: "롤챔스 경기 승자는?",
    versus: ["BRI", "KDF"],
    totalkey: [15, 29],
    total: 50,
    win: false,
  },
  {
    key: "6",
    due: new Date("2022-01-12T03:00:00"),
    thumb: "game.png",
    title: "롤챔스 경기 승자는?",
    versus: ["T1", "KDF"],
    totalkey: [15, 29],
    total: 200,
    win: false,
  },
  {
    key: "7",
    due: new Date("2022-03-27T15:00:00"),
    thumb: "game.png",
    title: "롤챔스 경기 승자는?",
    versus: ["BRI", "DK"],
    totalkey: [15, 29],
    total: 275,
    win: false,
  },
  {
    key: "8",
    due: new Date("2022-05-11T11:00:00"),
    thumb: "game.png",
    title: "롤챔스 경기 승자는?",
    versus: ["BRI", "T1"],
    totalkey: [15, 29],
    total: 500,
    win: false,
  },
];

//context
const AllCompete = createContext({
  allCompList: [],
  setCompListWrapper: () => {},
});

function AllCompeteContext({ children }) {
  const [allCompList, setAllCompList] = useState(data);

  function setAllCompListWrapper(newCompList) {
    setAllCompList(newCompList);
  }

  return (
    <AllCompete.Provider value={{ allCompList, setAllCompListWrapper }}>
      {children}
    </AllCompete.Provider>
  );
}

export { AllCompeteContext, AllCompete };
