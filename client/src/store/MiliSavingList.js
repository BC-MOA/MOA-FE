import { createContext, useState } from "react";

export const MiliSavingListData = createContext({
  availableSavingList: {
    id: "",
    bank: { id: "", bankName: "", bankImageUrl: "" },
    productName: "",
    highestInterest: 0,
    basicInterest: 0,
    amountExplanation: "",
    subscriptionPeriod: "",
    subscriptionLimit: "",
  },
  setAvailableSavingList: () => {},
  getSavingList: () => {},
});

function MiliSavingList({ children }) {
  const [availableSavingList, setAvailableSavingList] = useState([]);
  // todo - api로 변경

  // api - 가입가능한 군적금 리스트를 받아오는 함수
  function getSavingList() {
    setAvailableSavingList([
      {
        id: "1",
        bank: {
          id: "1",
          bankName: "신한",
          bankImageUrl:
            "https://cdn.jsdelivr.net/gh/BuenCamino3rd/test/image/shinhan.svg",
        },
        productName: "장병내일준비적금",
        highestInterest: 5.2,
        basicInterest: 4.5,
        amountExplanation: "월 20만원 이하/n/r(전 금융기관 합산 40만원 이내)",
        subscriptionPeriod: "12개월",
        subscriptionLimit: "6개월 이상 2개월 이하",
      },
      {
        id: "2",
        bank: {
          id: "2",
          bankName: "제주은행",
          bankImageUrl:
            "https://cdn.jsdelivr.net/gh/BuenCamino3rd/test/image/shinhan.svg",
        },
        productName: "장병내일준비적금",
        highestInterest: 4.5,
        basicInterest: 4.5,
        amountExplanation: "월 20만원 이하/n/r(전 금융기관 합산 40만원 이내)",
        subscriptionPeriod: "12개월",
        subscriptionLimit: "6개월 이상 2개월 이하",
      },
      {
        id: "3",
        bank: {
          id: "3",
          bankName: "하나",
          bankImageUrl:
            "https://cdn.jsdelivr.net/gh/BuenCamino3rd/test/image/shinhan.svg",
        },
        productName: "장병내일준비적금",
        highestInterest: 4.5,
        basicInterest: 4.0,
        amountExplanation: "월 20만원 이하/n/r(전 금융기관 합산 40만원 이내)",
        subscriptionPeriod: "12개월",
        subscriptionLimit: "6개월 이상 2개월 이하",
      },
      {
        id: "4",
        bank: {
          id: "4",
          bankName: "DGB",
          bankImageUrl:
            "https://cdn.jsdelivr.net/gh/BuenCamino3rd/test/image/shinhan.svg",
        },
        productName: "장병내일준비적금",
        highestInterest: 5.2,
        basicInterest: 4.5,
        amountExplanation: "월 20만원 이하/n/r(전 금융기관 합산 40만원 이내)",
        subscriptionPeriod: "12개월",
        subscriptionLimit: "6개월 이상 2개월 이하",
      },
      {
        id: "5",
        bank: {
          id: "5",
          bankName: "NH",
          bankImageUrl:
            "https://cdn.jsdelivr.net/gh/BuenCamino3rd/test/image/shinhan.svg",
        },
        productName: "장병내일준비적금",
        highestInterest: 4.5,
        basicInterest: 4.5,
        amountExplanation: "월 20만원 이하/n/r(전 금융기관 합산 40만원 이내)",
        subscriptionPeriod: "12개월",
        subscriptionLimit: "6개월 이상 2개월 이하",
      },

      {
        id: "6",
        bank: {
          id: "6",
          bankName: "우리",
          bankImageUrl:
            "https://cdn.jsdelivr.net/gh/BuenCamino3rd/test/image/shinhan.svg",
        },
        productName: "장병내일준비적금",
        highestInterest: 4.5,
        basicInterest: 4.0,
        amountExplanation: "월 20만원 이하/n/r(전 금융기관 합산 40만원 이내)",
        subscriptionPeriod: "12개월",
        subscriptionLimit: "6개월 이상 2개월 이하",
      },
      {
        id: "7",
        bank: {
          id: "7",
          bankName: "IBK",
          bankImageUrl:
            "https://cdn.jsdelivr.net/gh/BuenCamino3rd/test/image/shinhan.svg",
        },
        productName: "장병내일준비적금",
        highestInterest: 5.0,
        basicInterest: 4.5,
        amountExplanation: "월 20만원 이하/n/r(전 금융기관 합산 40만원 이내)",
        subscriptionPeriod: "12개월",
        subscriptionLimit: "6개월 이상 2개월 이하",
      },
      {
        id: "8",
        bank: {
          id: "8",
          bankName: "KJB",
          bankImageUrl:
            "https://cdn.jsdelivr.net/gh/BuenCamino3rd/test/image/shinhan.svg",
        },
        productName: "장병내일준비적금",
        highestInterest: 5.0,
        basicInterest: 4.5,
        amountExplanation: "월 20만원 이하/n/r(전 금융기관 합산 40만원 이내)",
        subscriptionPeriod: "12개월",
        subscriptionLimit: "6개월 이상 2개월 이하",
      },
      {
        id: "9",
        bank: {
          id: "9",
          bankName: "우체국",
          bankImageUrl:
            "https://cdn.jsdelivr.net/gh/BuenCamino3rd/test/image/shinhan.svg",
        },
        productName: "장병내일준비적금",
        highestInterest: 5.0,
        basicInterest: 4.5,
        amountExplanation: "월 20만원 이하/n/r(전 금융기관 합산 40만원 이내)",
        subscriptionPeriod: "12개월",
        subscriptionLimit: "6개월 이상 2개월 이하",
      },
    ]);
  }
  return (
    <MiliSavingListData.Provider
      value={{ availableSavingList, getSavingList, setAvailableSavingList }}
    >
      {children}
    </MiliSavingListData.Provider>
  );
}

export default MiliSavingList;
