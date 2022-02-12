import React, { createContext, useEffect, useState } from "react";
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
        boxId: "",
        boxName: "MOA박스",
        boxPrice: 7,
        boxDescription: ["다양한 PX 간식", "(냉동 식품 제외)"],
        boxImageUrl:
          "https://github.com/BuenCamino3rd/test/blob/main/image/%EB%AA%A8%EC%95%84%EB%B0%95%EC%8A%A4.png?raw=true",
        productList: [
          {
            productId: "",
            productName: "아카페라 라떼",
            productType: "PX 간식",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EC%95%84%EC%B9%B4%ED%8E%98%EB%9D%BC%EB%B0%94%EB%8B%90%EB%9D%BC%EB%9D%BC%EB%96%BC.png?raw=true",
            exchangeStore: "부대 안 PX",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "포스틱",
            productType: "PX 간식",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%ED%8F%AC%EC%8A%A4%ED%8B%B1.png?raw=true",
            exchangeStore: "부대 안 PX",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "바나나킥",
            productType: "PX 간식",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EB%B0%94%EB%82%98%EB%82%98%ED%82%A5.png?raw=true",
            exchangeStore: "부대 안 PX",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "자갈치",
            productType: "PX 간식",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EC%9E%90%EA%B0%88%EC%B9%98.png?raw=true",
            exchangeStore: "부대 안 PX",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "칠성 사이다",
            productType: "PX 간식",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EC%B9%A0%EC%84%B1%EC%82%AC%EC%9D%B4%EB%8B%A4%EC%BA%94.png?raw=true",
            exchangeStore: "부대 안 PX",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "바나나 우유",
            productType: "PX 간식",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EB%B0%94%EB%82%98%EB%82%98%EC%9A%B0%EC%9C%A0.png?raw=true",
            exchangeStore: "부대 안 PX",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "슈팅스타 콘",
            productType: "PX 간식",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EC%8A%88%ED%8C%85%EC%8A%A4%ED%83%80%EC%BD%98.png?raw=true",
            exchangeStore: "부대 안 PX",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "끌레도르콘 쿠키앤크림",
            productType: "PX 간식",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EB%81%8C%EB%A0%88%EB%8F%84%EB%A5%B4%EC%BF%A0%ED%82%A4%EC%95%A4%ED%81%AC%EB%A6%BC.png?raw=true",
            exchangeStore: "부대 안 PX",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "불닭볶음면 컵라면",
            productType: "PX 간식",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EB%B6%88%EB%8B%AD%EB%B3%B6%EC%9D%8C%EB%A9%B4%EC%BB%B5%EB%9D%BC%EB%A9%B4.png?raw=true",
            exchangeStore: "부대 안 PX",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "짜파게티 컵라면",
            productType: "PX 간식",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EC%A7%9C%ED%8C%8C%EA%B2%8C%ED%8B%B0%EC%BB%B5%EB%9D%BC%EB%A9%B4.png?raw=true",
            exchangeStore: "부대 안 PX",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "오징어짬뽕 컵라면",
            productType: "PX 간식",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EC%98%A4%EC%A7%95%EC%96%B4%EC%A7%AC%EB%BD%95%EC%BB%B5%EB%9D%BC%EB%A9%B4.png?raw=true",
            exchangeStore: "부대 안 PX",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "몽쉘 딸기케이크",
            productType: "PX 간식",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EB%AA%BD%EC%89%98%EB%94%B8%EA%B8%B0%EC%BC%80%EC%9D%B4%ED%81%AC.png?raw=true",
            exchangeStore: "부대 안 PX",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "공화춘 컵라면",
            productType: "PX 간식",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EA%B3%B5%ED%99%94%EC%B6%98%EC%BB%B5%EB%9D%BC%EB%A9%B4.png?raw=true",
            exchangeStore: "부대 안 PX",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "새우깡",
            productType: "PX 간식",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EC%83%88%EC%9A%B0%EA%B9%A1.png?raw=true",
            exchangeStore: "부대 안 PX",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "신라면 컵라면",
            productType: "PX 간식",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EC%8B%A0%EB%9D%BC%EB%A9%B4%EC%BB%B5%EB%9D%BC%EB%A9%B4.png?raw=true",
            exchangeStore: "부대 안 PX",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "요맘때 콘",
            productType: "PX 간식",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EC%9A%94%EB%A7%98%EB%95%8C%EC%BD%98.png?raw=true",
            exchangeStore: "부대 안 PX",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "코카콜라캔",
            productType: "PX 간식",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EC%BD%94%EC%B9%B4%EC%BD%9C%EB%9D%BC%EC%BA%94.png?raw=true",
            exchangeStore: "부대 안 PX",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "보석바",
            productType: "PX 간식",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EB%B3%B4%EC%84%9D%EB%B0%94.png?raw=true",
            exchangeStore: "부대 안 PX",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "in",
          },
        ],
      },
      {
        boxId: "2",
        boxName: "야금야금MOA박스",
        boxPrice: 12,
        boxDescription: ["PX 냉동식품", "PC방 2천원 금액권", "카페 기프티콘"],
        boxImageUrl:
          "https://github.com/BuenCamino3rd/test/blob/main/image/%EC%95%BC%EA%B8%88%EC%95%BC%EA%B8%88%EB%AA%A8%EC%95%84%EB%B0%95%EC%8A%A4.png?raw=true",
        productList: [
          {
            productId: "",
            productName: "슈넬치킨",
            productType: "PX 냉동식품",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EC%8A%88%EB%84%AC%EC%B9%98%ED%82%A8.png?raw=true",
            exchangeStore: "부대 안 PX",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "누들 그라탕",
            productType: "PX 냉동식품",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EB%88%84%EB%93%A4%EA%B7%B8%EB%9D%BC%ED%83%95.png?raw=true",
            exchangeStore: "부대 안 PX",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "크림우동",
            productType: "PX 냉동식품",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%ED%81%AC%EB%A6%BC%EC%9A%B0%EB%8F%99.png?raw=true",
            exchangeStore: "부대 안 PX",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "짬탕면",
            productType: "PX 냉동식품",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EC%A7%AC%ED%83%95%EB%A9%B4.png?raw=true",
            exchangeStore: "부대 안 PX",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "콤비네이션 피자",
            productType: "PX 냉동식품",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EC%BD%A4%EB%B9%84%EB%84%A4%EC%9D%B4%EC%85%98%ED%94%BC%EC%9E%90.png?raw=true",
            exchangeStore: "부대 안 PX",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "불닭만두",
            productType: "PX 냉동식품",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EB%B6%88%EB%8B%AD%EB%A7%8C%EB%91%90.png?raw=true",
            exchangeStore: "부대 안 PX",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "PC방 금액권 2천원",
            productType: "PC방 금액권",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/PC%EB%B0%A92000%EC%9B%90%EA%B8%88%EC%95%A1%EA%B6%8C.png?raw=true",
            exchangeStore: "제휴 PC방",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
          },
          {
            productId: "",
            productName: "메가커피 아메리카노",
            productType: "기프티콘",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EB%A9%94%EA%B0%80%EC%BB%A4%ED%94%BC%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png?raw=true",
            exchangeStore: "메가커피",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
          },
          {
            productId: "",
            productName: "컴포즈커피 아메리카노",
            productType: "기프티콘",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EC%BB%B4%ED%8F%AC%EC%A6%88%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png?raw=true",
            exchangeStore: "컴포즈커피",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
          },
          {
            productId: "",
            productName: "이디야커피 아메리카노",
            productType: "기프티콘",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EC%9D%B4%EB%94%94%EC%95%BC%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png?raw=true",
            exchangeStore: "이디야커피",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
          },
          {
            productId: "",
            productName: "더벤티 아메리카노",
            productType: "기프티콘",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EB%8D%94%EB%B2%A4%ED%8B%B0%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png?raw=true",
            exchangeStore: "더벤티",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
          },
          {
            productId: "",
            productName: "빽다방 아메리카노",
            productType: "기프티콘",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EB%B9%BD%EB%8B%A4%EB%B0%A9%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png?raw=true",
            exchangeStore: "빽다방",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
          },
        ],
      },
      {
        boxId: "3",
        boxName: "왕창MOA박스",
        boxPrice: 20,
        boxDescription: ["PX 50% 할인권", "PC방 2천원 금액권", "카페 기프티콘"],
        boxImageUrl:
          "https://github.com/BuenCamino3rd/test/blob/main/image/%EC%99%95%EC%B0%BD%EB%AA%A8%EC%95%84%EB%B0%95%EC%8A%A4.png?raw=true",
        productList: [
          {
            productId: "",
            productName: "PC방 금액권 5천원",
            productType: "PC방 금액권",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/PC%EB%B0%A95000%EC%9B%90%EA%B8%88%EC%95%A1%EA%B6%8C.png?raw=true",
            exchangeStore: "제휴 PC방",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
          },
          {
            productId: "",
            productName: "PX 할인권 50%",
            productType: "PX 할인권",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/PX50%25%ED%95%A0%EC%9D%B8%EA%B6%8C.png?raw=true",
            exchangeStore: "부대 안 PX",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "스타벅스 아메리카노",
            productType: "기프티콘",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png?raw=true",
            exchangeStore: "스타벅스",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
          },
          {
            productId: "",
            productName: "스타벅스 가나슈 케이크",
            productType: "기프티콘",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4%EA%B0%80%EB%82%98%EC%8A%88%EC%BC%80%EC%9D%B4%ED%81%AC.png?raw=true",
            exchangeStore: "스타벅스",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
          },
          {
            productId: "",
            productName: "스타벅스 레드벨벳 케이크",
            productType: "기프티콘",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4%EB%A0%88%EB%93%9C%EB%B2%A8%EB%B2%B3%EC%BC%80%EC%9D%B4%ED%81%AC.png?raw=true",
            exchangeStore: "스타벅스",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
          },
          {
            productId: "",
            productName: "스타벅스 생크림 카스테라",
            productType: "기프티콘",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4%EC%83%9D%ED%81%AC%EB%A6%BC%EC%B9%B4%EC%8A%A4%ED%85%8C%EB%9D%BC.png?raw=true",
            exchangeStore: "스타벅스",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
          },
          {
            productId: "",
            productName: "투썸 아메리카노",
            productType: "기프티콘",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%ED%88%AC%EC%8D%B8%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png?raw=true",
            exchangeStore: "투썸플레이스",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
          },
          {
            productId: "",
            productName: "투썸 딸기 초코 생크림",
            productType: "기프티콘",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%ED%88%AC%EC%8D%B8%EB%94%B8%EA%B8%B0%EC%B4%88%EC%BD%94%EC%83%9D%ED%81%AC%EB%A6%BC.png?raw=true",
            exchangeStore: "투썸플레이스",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
          },
          {
            productId: "",
            productName: "투썸 아이스박스",
            productType: "기프티콘",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%ED%88%AC%EC%8D%B8%EC%95%84%EC%9D%B4%EC%8A%A4%EB%B0%95%EC%8A%A4.png?raw=true",
            exchangeStore: "투썸플레이스",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
          },
          {
            productId: "",
            productName: "투썸 티라미수",
            productType: "기프티콘",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%ED%88%AC%EC%8D%B8%ED%8B%B0%EB%9D%BC%EB%AF%B8%EC%88%98.png?raw=true",
            exchangeStore: "투썸플레이스",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
          },
          {
            productId: "",
            productName: "베스킨라빈스 파인트",
            productType: "기프티콘",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EB%B2%A0%EC%8A%A4%ED%82%A8%EB%9D%BC%EB%B9%88%EC%8A%A4%20%ED%8C%8C%EC%9D%B8%ED%8A%B8.png?raw=true",
            exchangeStore: "베스킨라빈스",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
          },
          {
            productId: "",
            productName: "공차 블랙밀크티 w펄",
            productType: "기프티콘",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EA%B3%B5%EC%B0%A8%EB%B8%94%EB%9E%99%EB%B0%80%ED%81%AC%ED%8B%B0w%ED%8E%84.png?raw=true",
            exchangeStore: "공차",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
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
        boxImageUrl:
          "https://github.com/BuenCamino3rd/test/blob/main/image/%EC%98%81%EB%81%8C%EB%AA%A8%EC%95%84%EB%B0%95%EC%8A%A4.png?raw=true",
        productList: [
          {
            productId: "",
            productName: "PC방 금액권 1만원",
            productType: "PC방 금액권",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/PC%EB%B0%A910000%EC%9B%90%EA%B8%88%EC%95%A1%EA%B6%8C.png?raw=true",
            exchangeStore: "제휴 PC방",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
          },
          {
            productId: "",
            productName: "PX 금액권 1만원",
            productType: "PX 금액권",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/PX10000%EC%9B%90%EA%B8%88%EC%95%A1%EA%B6%8C.png?raw=true",
            exchangeStore: "부대 안 PX",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "in",
          },
          {
            productId: "",
            productName: "교촌치킨 허니콤보",
            productType: "기프티콘",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EA%B5%90%EC%B4%8C%EC%B9%98%ED%82%A8%ED%97%88%EB%8B%88%EC%BD%A4%EB%B3%B4.png?raw=true",
            exchangeStore: "교촌치킨",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
          },
          {
            productId: "",
            productName: "BBQ 황금올리브 반반",
            productType: "기프티콘",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/bbq%ED%99%A9%EA%B8%88%EC%98%AC%EB%A6%AC%EB%B8%8C%EB%B0%98%EB%B0%98.png?raw=true",
            exchangeStore: "BBQ",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
          },
          {
            productId: "",
            productName: "bhc 뿌링클 치킨",
            productType: "기프티콘",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/bhc%EB%BF%8C%EB%A7%81%ED%81%B4%EC%B9%98%ED%82%A8.png?raw=true",
            exchangeStore: "bhc",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
          },
          {
            productId: "",
            productName: "푸라닭 고추마요치킨",
            productType: "기프티콘",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%ED%91%B8%EB%9D%BC%EB%8B%AD%EA%B3%A0%EC%B6%94%EB%A7%88%EC%9A%94%EC%B9%98%ED%82%A8.png?raw=true",
            exchangeStore: "푸라닭",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
          },
          {
            productId: "",
            productName: "굽네 고추바사삭",
            productType: "기프티콘",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EA%B5%BD%EB%84%A4%EA%B3%A0%EC%B6%94%EB%B0%94%EC%82%AC%EC%82%AD.png?raw=true",
            exchangeStore: "굽네",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
          },
          {
            productId: "",
            productName: "네네 스노윙치킨",
            productType: "기프티콘",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EB%84%A4%EB%84%A4%EC%8A%A4%EB%85%B8%EC%9C%99%EC%B9%98%ED%82%A8.png?raw=true",
            exchangeStore: "네네",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
          },
          {
            productId: "",
            productName: "도미노 베스트콰트로피자",
            productType: "기프티콘",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EB%8F%84%EB%AF%B8%EB%85%B8%EB%B2%A0%EC%8A%A4%ED%8A%B8%EC%BD%B0%ED%8A%B8%EB%A1%9C%ED%94%BC%EC%9E%90.png?raw=true",
            exchangeStore: "도미노",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
          },
          {
            productId: "",
            productName: "도미노 블랙타이거슈림프",
            productType: "기프티콘",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%EB%8F%84%EB%AF%B8%EB%85%B8%EB%B8%94%EB%9E%99%ED%83%80%EC%9D%B4%EA%B1%B0%EC%8A%88%EB%A6%BC%ED%94%84.png?raw=true",
            exchangeStore: "도미노",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
          },
          {
            productId: "",
            productName: "피자헛 티본스테이크피자",
            productType: "기프티콘",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%ED%94%BC%EC%9E%90%ED%97%9B%ED%8B%B0%EB%B3%B8%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC%ED%94%BC%EC%9E%90.png?raw=true",
            exchangeStore: "피자헛",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
          },
          {
            productId: "",
            productName: "피자헛 블랙알리오 피자",
            productType: "기프티콘",
            productImageUrl:
              "https://github.com/BuenCamino3rd/test/blob/main/image/%ED%94%BC%EC%9E%90%ED%97%9B%EB%B8%94%EB%9E%99%EC%95%8C%EB%A6%AC%EC%98%A4%ED%94%BC%EC%9E%90.png?raw=true",
            exchangeStore: "피자헛",
            expiryDate: "",
            barcodeNum: "",
            armyInOut: "out",
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
