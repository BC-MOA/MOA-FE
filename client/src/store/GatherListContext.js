import { createContext, useState } from "react";

export const GatherList = createContext({
  gatherList: [],
  setGatherList: () => {},
});

function GatherListContext({ children }) {
  const [gatherList, setGatherList] = useState([]);

  return (
    <GatherList.Provider value={{ gatherList, setGatherList }}>
      {children}
    </GatherList.Provider>
  );
}

export default GatherListContext;
