import moment from "moment";
import React, { createContext, useEffect, useState } from "react";
import { v1 as uuid } from "uuid";
export const BoxListData = createContext({
  boxList: [],
});
function BoxList({ children }) {
  const [boxList, setBoxList] = useState([]);
  useEffect(() => {
    getBoxList();
  }, []);
  function getBoxList() {
    setBoxList([
      {
        boxId: uuid(),
        boxName: "MOA박스",
        boxPrice: 7,
        boxDescription: ["다양한 PX 간식", "(냉동 식품 제외)"],
        boxImageUrl: "",
        productList: [
          {
            productId: "",
            productName: "아카페라 라떼",
            productType: "PX 간식",
            productImageUrl: "",
            exchangeStore: "부대 안 PX",
            expiryDate: moment().format("YYYY.MM.DD"),
            barcodeNum: "1234 1234 1234",
            armyInOut: "in",
          },
          {
            productId: uuid(),
            productName: "포스틱",
            productType: "PX 간식",
            productImageUrl: "",
            exchangeStore: "부대 안 PX",
            expiryDate: moment().format("YYYY.MM.DD"),
            barcodeNum: "1234 1234 1234",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "바나나킥",
            productType: "PX 간식",
            productImageUrl: "",
            exchangeStore: "부대 안 PX",
            expiryDate: moment().format("YYYY.MM.DD"),
            barcodeNum: "1234 1234 1234",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "자갈치",
            productType: "PX 간식",
            productImageUrl: "",
            exchangeStore: "부대 안 PX",
            expiryDate: moment().format("YYYY.MM.DD"),
            barcodeNum: "1234 1234 1234",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "칠성 사이다",
            productType: "PX 간식",
            productImageUrl: "",
            exchangeStore: "부대 안 PX",
            expiryDate: moment().format("YYYY.MM.DD"),
            barcodeNum: "1234 1234 1234",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "바나나 우유",
            productType: "PX 간식",
            productImageUrl: "",
            exchangeStore: "부대 안 PX",
            expiryDate: moment().format("YYYY.MM.DD"),
            barcodeNum: "1234 1234 1234",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "슈팅스타 콘",
            productType: "PX 간식",
            productImageUrl: "",
            exchangeStore: "부대 안 PX",
            expiryDate: moment().format("YYYY.MM.DD"),
            barcodeNum: "1234 1234 1234",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "끌레도르콘 쿠키앤크림",
            productType: "PX 간식",
            productImageUrl: "",
            exchangeStore: "부대 안 PX",
            expiryDate: moment().format("YYYY.MM.DD"),
            barcodeNum: "1234 1234 1234",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "불닭볶음면 컵라면",
            productType: "PX 간식",
            productImageUrl: "",
            exchangeStore: "부대 안 PX",
            expiryDate: moment().format("YYYY.MM.DD"),
            barcodeNum: "1234 1234 1234",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "짜파게티 컵라면",
            productType: "PX 간식",
            productImageUrl: "",
            exchangeStore: "부대 안 PX",
            expiryDate: moment().format("YYYY.MM.DD"),
            barcodeNum: "1234 1234 1234",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "오징어짬뽕 컵라면",
            productType: "PX 간식",
            productImageUrl: "",
            exchangeStore: "부대 안 PX",
            expiryDate: moment().format("YYYY.MM.DD"),
            barcodeNum: "1234 1234 1234",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "몽쉘 딸기케이크",
            productType: "PX 간식",
            productImageUrl: "",
            exchangeStore: "부대 안 PX",
            expiryDate: moment().format("YYYY.MM.DD"),
            barcodeNum: "1234 1234 1234",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "공화춘 컵라면",
            productType: "PX 간식",
            productImageUrl: "",
            exchangeStore: "부대 안 PX",
            expiryDate: moment().format("YYYY.MM.DD"),
            barcodeNum: "1234 1234 1234",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "새우깡",
            productType: "PX 간식",
            productImageUrl: "",
            exchangeStore: "부대 안 PX",
            expiryDate: moment().format("YYYY.MM.DD"),
            barcodeNum: "1234 1234 1234",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "신라면 컵라면",
            productType: "PX 간식",
            productImageUrl: "",
            exchangeStore: "부대 안 PX",
            expiryDate: moment().format("YYYY.MM.DD"),
            barcodeNum: "1234 1234 1234",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "요맘때 콘",
            productType: "PX 간식",
            productImageUrl: "",
            exchangeStore: "부대 안 PX",
            expiryDate: moment().format("YYYY.MM.DD"),
            barcodeNum: "1234 1234 1234",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "코카콜라캔",
            productType: "PX 간식",
            productImageUrl: "",
            exchangeStore: "부대 안 PX",
            expiryDate: moment().format("YYYY.MM.DD"),
            barcodeNum: "1234 1234 1234",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "보석바",
            productType: "PX 간식",
            productImageUrl: "",
            exchangeStore: "부대 안 PX",
            expiryDate: moment().format("YYYY.MM.DD"),
            barcodeNum: "1234 1234 1234",
            armyInOut: "in",
          },
        ],
      },
      {
        boxId: "2",
        boxName: "야금야금MOA박스",
        boxPrice: 12,
        boxDescription: ["PX 냉동식품", "PC방 2천원 금액권", "카페 기프티콘"],
        boxImageUrl: "",
        productList: [
          {
            productId: "",
            productName: "슈넬치킨",
            productType: "PX 간식",
            productImageUrl: "",
            exchangeStore: "부대 안 PX",
            expiryDate: moment().format("YYYY.MM.DD"),
            barcodeNum: "1234 1234 1234",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "크림우동",
            productType: "PX 간식",
            productImageUrl: "",
            exchangeStore: "부대 안 PX",
            expiryDate: moment().format("YYYY.MM.DD"),
            barcodeNum: "1234 1234 1234",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "짬탕면",
            productType: "PX 간식",
            productImageUrl: "",
            exchangeStore: "부대 안 PX",
            expiryDate: moment().format("YYYY.MM.DD"),
            barcodeNum: "1234 1234 1234",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "콤비네이션 피자",
            productType: "PX 간식",
            productImageUrl: "",
            exchangeStore: "부대 안 PX",
            expiryDate: moment().format("YYYY.MM.DD"),
            barcodeNum: "1234 1234 1234",
            armyInOut: "in",
          },
        ],
      },
      {
        boxId: "3",
        boxName: "왕창MOA박스",
        boxPrice: 20,
        boxDescription: ["PX 50% 할인권", "PC방 2천원 금액권", "카페 기프티콘"],
        boxImageUrl: "",
        productList: [
          {
            productId: "",
            productName: "아카페라 라떼",
            productType: "PX 간식",
            productImageUrl: "",
            exchangeStore: "부대 안 PX",
            expiryDate: moment().format("YYYY.MM.DD"),
            barcodeNum: "1234 1234 1234",
            armyInOut: "in",
          },
        ],
      },
      {
        boxId: "4",
        boxName: "영끌MOA박스",
        boxPrice: 30,
        boxDescription: [
          "PX 1만원 금액권",
          "PC방 1만원 금액권",
          "치킨, 피자 기프티콘",
        ],
        boxImageUrl: "",
        productList: [
          {
            productId: "",
            productName: "아카페라 라떼",
            productType: "PX 간식",
            productImageUrl: "",
            exchangeStore: "부대 안 PX",
            expiryDate: moment().format("YYYY.MM.DD"),
            barcodeNum: "1234 1234 1234",
            armyInOut: "in",
          },
        ],
      },
    ]);
  }
  return (
    <BoxListData.Provider value={{ boxList }}>{children}</BoxListData.Provider>
  );
}

export default BoxList;
