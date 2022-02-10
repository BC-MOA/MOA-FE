import { createContext, useEffect, useState } from "react";

export const UserData = createContext({
  userData: {},
  setUserData: () => {},
  login: () => {},
  logOut: () => {},
  updateUserData: () => {},
  getUserInfo: () => {},
});

function User({ children }) {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || { id: "", key: 0 }
  );
  useEffect(() => {
    getUserInfo();
  }, []);
  // 로그인 함수
  function login(newData) {
    const newUserData = { ...userData, ...newData };
    localStorage.setItem("userData", JSON.stringify(newUserData));
    setUserData(newUserData);
  }
  // 유저 정보 수정 함수
  function updateUserData(newData) {
    const temp = JSON.parse(localStorage.getItem("userData"))
      ? JSON.parse(localStorage.getItem("userData"))
      : { id: "", key: 0 };
    const newUserData = { ...temp, ...newData };
    localStorage.setItem("userData", JSON.stringify(newUserData));
    setUserData(newUserData);
  }
  // 로그아웃 함수
  function logOut() {
    localStorage.removeItem("userData");
    localStorage.removeItem("userRewardList");
    localStorage.removeItem("userBoxList");
    setUserData({ id: "", key: 0 });
  }

  // todo api 호출 함수로 바꿀 것
  function getUserInfo() {
    // api 요청 코드로 변경 예정
    const temp = JSON.parse(localStorage.getItem("userData"))
      ? JSON.parse(localStorage.getItem("userData"))
      : { id: "", key: 0 };
    setUserData(temp);
  }

  return (
    <UserData.Provider
      value={{
        userData,
        setUserData,
        login,
        logOut,
        updateUserData,
        getUserInfo,
      }}
    >
      {children}
    </UserData.Provider>
  );
}
export default User;
