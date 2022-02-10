import { createContext, useEffect, useState, useContext } from "react";
import { UserData } from "store/User";

export const GatherList = createContext({
  gatherList: [],
  setGatherList: () => {},
});

function GatherListContext({ children }) {
  // 초기 화면 더미데이터
  const { updateUserData } = useContext(UserData);
  const [gatherList, setGatherList] = useState(
    JSON.parse(localStorage.getItem("userData"))?.userGatherList || []
  );

  useEffect(() => {
    updateUserData({ userGatherList: gatherList });
  }, [gatherList]);

  return (
    <GatherList.Provider value={{ gatherList, setGatherList }}>
      {children}
    </GatherList.Provider>
  );
}

export default GatherListContext;
