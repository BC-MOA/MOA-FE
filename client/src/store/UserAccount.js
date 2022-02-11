import { createContext, useState } from "react";

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
    bankImageUrl: require("assets/interlock/bank_kb.png"),
  },
  {
    id: 2,
    bankName: "IBK기업",
    productName: "IBK군인적금",
    accountNumber: "112-0330-0201",
    currentAmount: 100000,
    goalAmount: 2500000,
    accountType: "예적금",
    bankImageUrl: require("assets/interlock/bank_ibk.png"),
    createdDate: "Sun Oct 10 2021 15:11:39 GMT+0900",
    expirationDate: "Fri Mar 10 2023 23:59:59 GMT+0900",
  },
  {
    id: 3,
    bankName: "KB국민",
    productName: "KB군인적금",
    accountNumber: "112-0330-0201",
    currentAmount: 100000,
    goalAmount: 2500000,
    accountType: "예적금",
    bankImageUrl: require("assets/interlock/bank_kb.png"),
    createdDate: "Sun Oct 10 2021 15:11:39 GMT+0900",
    expirationDate: "Fri Mar 10 2023 23:59:59 GMT+0900",
  },
];

//context
const UserAccount = createContext({
  userAccount: {},
  setCompListWrapper: () => {},
});

function UserAccountContext({ children }) {
  const [userAccount, setUserAccount] = useState(data);

  function setUserAccountWrapper(accounts) {
    setUserAccount(accounts);
  }

  return (
    <UserAccount.Provider value={{ userAccount, setUserAccountWrapper }}>
      {children}
    </UserAccount.Provider>
  );
}

export { UserAccountContext, UserAccount };
