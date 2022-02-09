import { createContext, useState } from "react";

export const GatherList = createContext({
  gatherList: [],
  setGatherList: () => {},
  editGatherList: () => {},
});

function GatherListContext({ children }) {
  const [gatherList, setGatherList] = useState([
    {
      id: 1,
      savingMode: "군적금",
      goalName: "1000만원 모으기",
      category: "",
      currentAmount: 800000,
      goalAmount: 3600000,
      account: {
        bankName: "KB국민",
        productName: "KB 장병내일준비적금",
        accountNumber: "112-0330-0201",
        accountCurrentAmount: 0,
        bankImageUrl: "",
      },
      sDate: "Sun Oct 10 2021 15:11:39 GMT+0900",
      eDate: "Fri Mar 10 2023 23:59:59 GMT+0900",
      depositMethod: "자동이체",
      limitCycle: "매월 10일",
      amountPerCycle: 200000,
      transactions: [],
    },
    {
      id: 2,
      savingMode: "목표",
      goalName: "뉴욕여행 준비",
      category: "여행",
      currentAmount: 170000,
      goalAmount: 1000000,
      account: {
        bankName: "KB국민",
        productName: "KB 장병내일준비적금",
        accountNumber: "112-0330-0201",
        accountCurrentAmount: 0,
        bankImageUrl: "",
      },
      sDate: "Sun Oct 10 2021 15:11:39 GMT+0900",
      eDate: "Fri Mar 10 2023 23:59:59 GMT+0900",
      depositMethod: "자동이체",
      limitCycle: "매월 10일",
      amountPerCycle: 200000,
      transactions: [],
    },
    {
      id: 3,
      savingMode: "목표",
      goalName: "맥북 프로 사고 싶다",
      category: "전자기기",
      currentAmount: 1000000,
      goalAmount: 2230000,
      account: {
        bankName: "KB국민",
        productName: "KB 장병내일준비적금",
        accountNumber: "112-0330-0201",
        accountCurrentAmount: 0,
        bankImageUrl: "",
      },
      sDate: "Sun Oct 10 2021 15:11:39 GMT+0900",
      eDate: "Fri Mar 10 2023 23:59:59 GMT+0900",
      depositMethod: "자동이체",
      limitCycle: "매월 10일",
      amountPerCycle: 200000,
      transactions: [],
    },
    {
      id: 4,
      savingMode: "목표",
      goalName: "조카 선물😎",
      category: "선물",
      currentAmount: 150000,
      goalAmount: 150000,
      account: {
        bankName: "KEB 하나",
        productName: "KB 장병내일준비적금",
        accountNumber: "123-356-78-910111",
        accountCurrentAmount: 0,
        bankImageUrl: "",
      },
      sDate: "Wed Nov 10 2021 15:11:39 GMT+0900",
      eDate: "Wed Jan 26 2022 23:59:59 GMT+0900",
      depositMethod: "자유입금",
      limitCycle: "",
      amountPerCycle: 50000,
      transactions: [],
    },
    {
      id: 5,
      savingMode: "목표",
      goalName: "나이키 던크 운동화",
      category: "의류",
      currentAmount: 300000,
      goalAmount: 300000,
      account: {
        bankName: "KEB 하나",
        productName: "KB 장병내일준비적금",
        accountNumber: "123-356-78-910111",
        accountCurrentAmount: 0,
        bankImageUrl: "",
      },
      sDate: "Wed Nov 10 2021 15:11:39 GMT+0900",
      eDate: "Wed Jan 26 2022 23:59:59 GMT+0900",
      depositMethod: "자유입금",
      limitCycle: "",
      amountPerCycle: 50000,
      transactions: [],
    },
    {
      id: 6,
      savingMode: "목표",
      goalName: "제주도 여행",
      category: "여행",
      currentAmount: 250000,
      goalAmount: 500000,
      account: {
        bankName: "KEB 하나",
        productName: "KB 장병내일준비적금",
        accountNumber: "123-356-78-910111",
        accountCurrentAmount: 0,
        bankImageUrl: "",
      },
      sDate: "Wed Nov 10 2021 15:11:39 GMT+0900",
      eDate: "Wed Jan 26 2022 23:59:59 GMT+0900",
      depositMethod: "자유입금",
      limitCycle: "",
      amountPerCycle: 50000,
      transactions: [],
    },
  ]);

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
