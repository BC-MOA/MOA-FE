import { v1 as uuid } from "uuid";

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

export const gatherFormat = (input, newName) => {
  console.log(input, newName);
  const newValue = {
    savingMode: "군적금",
    goalName: `${newName ? newName : ""}`,
  };
  console.log(newValue);
  return {
    id: uuid(),
    savingMode: "군적금",
    goalName: `${newName ? newName : ""}`,
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
