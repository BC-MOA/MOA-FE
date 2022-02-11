import { v1 as uuid } from "uuid";

export const accountList = [
  {
    id: 1,
    bankName: "KB국민",
    accountName: "KB나라사랑우대통장",
    accountNumber: "112-0330-0201",
    currentAmount: 500000,
    owner: "김민수",
    accountType: "예적금",
    bankImageUrl: "",
  },
  {
    id: 2,
    bankName: "KEB 하나",
    accountName: "하나장병내일준비적금",
    accountNumber: "110-0551-0031",
    currentAmount: 100000,
    owner: "김민수",
    accountType: "예적금",
    bankImageUrl: "",
  },
];

export const noticeList = [
  {
    id: 8,
    category: "penalty",
    date: "2월 02일",
    content:
      "‘신한 장병내일준비적금' 중도해지 패널티로 열쇠 6개가 차감되었어요",
  },
  {
    id: 7,
    category: "reward",
    date: "1월 30일",
    content: "야금야금MOA박스를 구매했어요",
  },
  {
    id: 6,
    category: "challenge",
    date: "1월 29일",
    content: "‘프리미어리그 경기 승자는?’ 챌린지 내기에 성공했어요!",
  },
  {
    id: 5,
    category: "key",
    date: "1월 28일",
    content: "첫 비상금 개설로 열쇠 3개를 획득했어요",
  },
  {
    id: 4,
    category: "account",
    date: "1월 28일",
    content: "첫 비상금을 개설했어요",
  },
  {
    id: 3,
    category: "key",
    date: "1월 28일",
    content: "첫 목표 ‘뉴욕여행 준비' 개설로 열쇠 3개를 획득했어요",
  },
  {
    id: 2,
    category: "key",
    date: "1월 28일",
    content: "첫 목표 ‘뉴욕여행 준비'를 개설했어요",
  },
  {
    id: 1,
    category: "key",
    date: "1월 27일",
    content: "첫 목표 ‘뉴욕여행 준비'를 개설했어요",
  },
];

export const userAccountList = [
  {
    id: 1,
    bankName: "KB국민",
    accountName: "KB나라사랑우대통장",
    accountNumber: "112-0330-0201",
    currentAmount: 500000,
    accountType: "입출금",
    bankImageUrl: "",
  },
];
export const userSavingList = [
  // {
  //   id: 1,
  //   bankName: "KB국민",
  //   productName: "KB장병내일준비적금",
  //   accountNumber: "112-0330-0201",
  //   currentAmount: 200000,
  //   goalAmount: 3600000,
  //   accountType: "예적금",
  //   bankImageUrl: "",
  //   createdDate: "Sun Oct 10 2021 15:11:39 GMT+0900",
  //   expirationDate: "Fri Mar 10 2023 23:59:59 GMT+0900",
  // },
  {
    id: 2,
    bankName: "IBK기업",
    productName: "IBK군인적금",
    accountNumber: "112-0330-0201",
    currentAmount: 100000,
    goalAmount: 2500000,
    accountType: "예적금",
    bankImageUrl: "",
    createdDate: "Sun Oct 10 2021 15:11:39 GMT+0900",
    expirationDate: "Fri Mar 10 2023 23:59:59 GMT+0900",
  },
];

export const gatherFormat = (input) => {
  return {
    id: uuid(),
    savingMode: "군적금",
    goalName: "",
    category: "",
    currentAmount: input.currentAmount,
    goalAmount: input.goalAmount,
    account: {
      bankName: input.bankName,
      productName: input.productName,
      accountNumber: input.accountNumber,
      accountCurrentAmount: 0,
      bankImageUrl: "",
    },
    sDate: input.createdDate,
    eDate: input.expirationDate,
    depositMethod: "자유입금",
    limitCycle: "",
    amountPerCycle: 0,
    transactions: [],
  };
};
