import { createContext, useState } from "react";

//data
const data_case1 = {
  account_deposit: [
    {
      key: "a1",
      account: "KB나라사랑우대통장",
      thumb: require("assets/interlock/bank_kb.png"),
      sum: 500000,
      bank: "KB국민은행",
    },
  ],
  account_install: [],
  account_partner: [],
};

const data_case2 = {
  account_deposit: [
    {
      key: "a1",
      account: "KB나라사랑우대통장",
      thumb: require("assets/interlock/bank_kb.png"),
      sum: 500000,
      bank: "KB국민은행",
    },
  ],
  account_install: [
    {
      key: "a2",
      account: "KB장병내일준비적금",
      thumb: require("assets/interlock/bank_kb.png"),
      sum: 500000,
      bank: "KB국민은행",
    },
  ],
  account_partner: [],
};

const data_case3 = {
  account_deposit: [
    {
      key: "a1",
      account: "KB나라사랑우대통장",
      thumb: require("assets/interlock/bank_kb.png"),
      sum: 500000,
      bank: "KB국민은행",
    },
  ],
  account_install: [
    {
      key: "a2",
      account: "KB장병내일준비적금",
      thumb: require("assets/interlock/bank_kb.png"),
      sum: 500000,
      bank: "KB국민은행",
    },
    {
      key: "a3",
      account: "IBK군인적금",
      thumb: require("assets/interlock/bank_ibk.png"),
      sum: 500000,
      bank: "IBK기업은행",
    },
  ],
  account_partner: [],
};

//context
const UserAccount = createContext({
  userAccount: {},
  setCompListWrapper: () => {},
});

function UserAccountContext({ children }) {
  const [userAccount, setUserAccount] = useState(data_case2);

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
