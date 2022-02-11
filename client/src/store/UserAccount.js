import { createContext, useEffect, useState } from "react";
import filterAccount from "components/profile/function/filterAccount";

/**
 *  id: 1,
    bankName: "KB국민",
    accountName: "KB나라사랑우대통장",
    accountNumber: "112-0330-0201",
    currentAmount: 500000,
    accountType: "입출금",
    bankImageUrl: "",
 */

//data
const data = [
  {
    id: 1,
    bankName: "KB국민",
    accountName: "KB나라사랑우대통장",
    accountNumber: "112-0330-0201",
    currentAmount: 500000,
    accountType: "입출금",
    bankImageUrl:
      "https://raw.githubusercontent.com/BuenCamino3rd/test/0e4636ad19708f8cb18cecc869e0a7ef618c0adf/image/kb.svg",
  },
  // {
  //   id: 2,
  //   bankName: "IBK기업",
  //   productName: "IBK장병내일우대적금",
  //   accountNumber: "112-0330-0201",
  //   currentAmount: 100000,
  //   goalAmount: 2500000,
  //   accountType: "예적금",
  //   bankImageUrl: require("assets/interlock/bank_ibk.png"),
  //   createdDate: "Sun Oct 10 2021 15:11:39 GMT+0900",
  //   expirationDate: "Fri Mar 10 2023 23:59:59 GMT+0900",
  // },
  {
    id: 3,
    bankName: "KB국민",
    productName: "KB장병내일우대적금",
    accountNumber: "112-0330-0201",
    currentAmount: 100000,
    goalAmount: 2500000,
    accountType: "예적금",
    bankImageUrl:
      "https://raw.githubusercontent.com/BuenCamino3rd/test/0e4636ad19708f8cb18cecc869e0a7ef618c0adf/image/kb.svg",
    createdDate: "Sun Oct 10 2021 15:11:39 GMT+0900",
    expirationDate: "Fri Mar 10 2023 23:59:59 GMT+0900",
  },
];

//context
const UserAccount = createContext({
  userAccount: {},
  setUserAccount: () => {},
  setUserAccountWrapper: () => {},
});

function UserAccountContext({ children }) {
  const [userAccount, setUserAccount] = useState(
    localStorage.getItem("userData")
      ? {
          inout: JSON.parse(localStorage.getItem("userData")).userAccountList,
          install: JSON.parse(localStorage.getItem("userData")).userSavingList,
          interlock: JSON.parse(localStorage.getItem("userData")).userInterlock,
        }
      : filterAccount(data)
  );
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const accountData = {
      inout: userData.userAccountList
        ? userData.userAccountList
        : filterAccount(data).inout,
      install: userData.userSavingList
        ? userData.userSavingList
        : filterAccount(data).install,
      interlock: userData.userInterlock ? userData.userInterlock : [],
    };
    setUserAccount(userData.id ? accountData : filterAccount(data));
  }, []);
  function setUserAccountWrapper(accounts) {
    setUserAccount(accounts);
  }

  return (
    <UserAccount.Provider
      value={{ setUserAccount, userAccount, setUserAccountWrapper }}
    >
      {children}
    </UserAccount.Provider>
  );
}

export { UserAccountContext, UserAccount };
