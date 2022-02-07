export let gatherList = [
  {
    id: 1,
    category: "군적금",
    name: "320만원 모으기",
    currentAmount: 800000,
    targetAmount: 3200000,
    account: {
      name: "KB국민",
      number: "112-0330-0201",
    },
    sDate: "Sun Oct 10 2021 15:11:39 GMT+0900",
    eDate: "Fri Mar 10 2023 23:59:59 GMT+0900",
    depositMethod: "자동이체",
    howOften: "매월 10일",
    amount: "200000",
    transactions: [],
  },
  //   {
  //     id: 2,
  //     category: "목표",
  //     goal_category: "여행",
  //     name: "유럽여행 준비",
  //     currentAmount: 170000,
  //     targetAmount: 1000000,
  //     account: {
  //       name: "하나은행",
  //       number: "123-456-78-910111",
  //     },
  //     sDate: "Wed Nov 10 2021 15:11:39 GMT+0900",
  //     eDate: "Sat Dec 10 2022 23:59:59 GMT+0900",
  //     depositMethod: "자동이체",
  //     howOften: "매월 10일",
  //     amount: "50000",
  //   },
  {
    id: 3,
    category: "비상금",
    name: "비상금",
    currentAmount: 100000,
    account: {
      name: "하나은행",
      number: "123-456-78-103556",
    },
    amount: 5000,
    balance: 0,
    transactions: [
      {
        date: "1월 10일",
        lists: [
          {
            name: "국군재정단",
            time: "20:00",
            amount: 200000,
            total: 800000,
          },
        ],
      },
    ],
  },
  // {
  //   category: "비상금",
  //   name: "비상금",
  //   currentAmount: 300000,
  //   account: {
  //     name: "NH국민",
  //     number: "123-456-78-103556",
  //   },
  // },
  // {
  //   category: "군적금",
  //   name: "100만원 모으기",
  //   currentAmount: 100000,
  //   targetAmount: 100000,
  //   account: {
  //     name: "IBK기업",
  //     number: "112-0330-0201-55",
  //   },
  //   sDate: "Sun Oct 10 2021 15:11:39 GMT+0900",
  //   eDate: "Sat Dec 10 2022 23:59:59 GMT+0900",
  //   depositMethod: "자동이체",
  // howOften: "매월 10일",
  //   amount: "200000",
  // },
  {
    id: 4,
    category: "목표",
    goal_category: "선물",
    name: "조카 선물😎",
    currentAmount: 150000,
    targetAmount: 150000,
    account: {
      name: "NH농협",
      number: "356-0915-7261-11",
    },
    sDate: "Wed Nov 10 2021 15:11:39 GMT+0900",
    eDate: "Wed Jan 26 2022 23:59:59 GMT+0900",
    depositMethod: "자유입금",
    howOften: "",
    amount: "50000",
    transactions: [],
  },
  //   {
  //     category: "군적금",
  //     name: "1000만원 모으기",
  //     currentAmount: 0,
  //     targetAmount: 2400000,
  //     account: {
  //       name: "신한",
  //       number: "112-0650-0987",
  //     },
  //     sDate: "Mon Jan 10 2022 15:11:39 GMT+0900",
  //     eDate: "Fri Mar 10 2023 23:59:59 GMT+0900",
  //     depositMethod: "자유입금",
  //     howOften: "",
  //     amount: "",
  //   },
];

export const accountList = [
  {
    bank: "KB국민",
    accountName: "KB나라사랑우대통장",
    accountNumber: "112-0330-0201",
    balance: 500000,
  },
  {
    bank: "하나은행",
    accountName: "하나장병내일준비적금",
    accountNumber: "110-0551-0031",
    balance: 100000,
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
