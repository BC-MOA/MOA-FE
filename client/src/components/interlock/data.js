/**
 * [계좌 정보]
 *
 * 월급 계좌 1개
 * 군 적금 : 0개~2개
 *
 * account_deposit : 월급
 * account_install : 적금
 * account_partner : 제휴
 */
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

//사용자 정보
const user_data = {
  name: "민수",
};

export { data_case1, data_case2, data_case3, user_data };
