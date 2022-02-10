import { createContext, useState } from "react";

export const GatherList = createContext({
  gatherList: [],
  setGatherList: () => {},
  editGatherList: () => {},
});

function GatherListContext({ children }) {
  // 초기 화면 더미데이터
  const [gatherList, setGatherList] = useState([]);

  function editGatherList(prev) {
    console.log("값 변경하기 전", prev.goalName);
  }

  return (
    <GatherList.Provider value={{ gatherList, setGatherList, editGatherList }}>
      {children}
    </GatherList.Provider>
  );
}

export default GatherListContext;
