import { createContext, useState } from "react";

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
    bet: 2,
    pick: true,
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
    bet: 1,
    pick: true,
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
    bet: 3,
    pick: true,
  },
  {
    key: "4",
    due: new Date("2022-01-14T03:00:00"),
    thumb: "game.png",
    title: "롤챔스 경기 승자는?",
    versus: ["T1", "DK"],
    totalkey: [15, 29],
    total: 300,
    win: false,
    bet: 2,
    pick: true,
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
    bet: 5,
    pick: false,
  },
];

//context
const MyCompete = createContext({
  myCompList: [],
  setMyCompListWrapper: () => {},
});

function MyCompeteContext({ children }) {
  const [myCompList, setMyCompList] = useState(data);

  function removeItem(key) {
    const result = myCompList.filter((obj) => {
      return obj.key !== key;
    });

    setMyCompList(result);
  }

  function updateItem({ pick, bet, key }) {
    let temp = [...myCompList];

    temp.map((obj) => {
      if (obj.key === key) {
        obj.pick = pick;
        obj.bet = bet;
      }
    });
    setMyCompList(temp);
  }

  function searchItem(key) {
    const result = myCompList.filter((obj) => obj.key === key);

    //key와 일치하는걸 찾으면 true
    return result;
  }

  function addItem(obj) {
    let temp = [...myCompList];
    temp.push(obj);
    setMyCompList(temp);
  }

  return (
    <MyCompete.Provider
      value={{ myCompList, removeItem, updateItem, searchItem, addItem }}
    >
      {children}
    </MyCompete.Provider>
  );
}

export { MyCompeteContext, MyCompete };
