import React, { createContext, useEffect, useState } from "react";

export const UserInventoryData = createContext({
  userBoxList: [],
  setUserBoxList: () => {},
  getUserBoxList: () => {},
  userRewardList: [],
  setUserRewardList: () => {},
  getUserRewardList: () => {},
});

function UserInventory({ children }) {
  const [userBoxList, setUserBoxList] = useState([]);
  const [userRewardList, setUserRewardList] = useState([]);

  useEffect(() => {
    getUserBoxList();
    getUserRewardList();
  }, []);

  // todo api - get 사용자 박스 리스트
  function getUserBoxList() {
    const getted = JSON.parse(localStorage.getItem("userBoxList"))
      ? JSON.parse(localStorage.getItem("userBoxList"))
      : [];
    setUserBoxList(getted);
  }
  // todo api - get 사용자 상품 리스트
  function getUserRewardList() {
    const getted = JSON.parse(localStorage.getItem("userRewardList"))
      ? JSON.parse(localStorage.getItem("userRewardList"))
      : [];
    setUserRewardList(getted);
  }
  return (
    <UserInventoryData.Provider
      value={{
        userBoxList,
        setUserBoxList,
        getUserBoxList,
        userRewardList,
        setUserRewardList,
        getUserRewardList,
      }}
    >
      {children}
    </UserInventoryData.Provider>
  );
}

export default UserInventory;
