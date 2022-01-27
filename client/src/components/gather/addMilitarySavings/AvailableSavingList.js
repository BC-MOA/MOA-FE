import React, { useEffect, useState } from "react";
import AvailableSavingItem from "./AvailableSavingItem";
import { v1 as uuid } from "uuid";
import styled from "styled-components";

function AvailableSavingList({ listControl }) {
  const [availableSavingList, setAvailableSavingList] = useState([]);
  const [sortedSavingList, setSortedSavingList] = useState([]);
  useEffect(() => {
    const copyList = JSON.parse(JSON.stringify(availableSavingList));
    if ("최고금리순" === listControl) {
      copyList.sort((a, b) => {
        return b.최대금리 - a.최대금리;
      });
    } else {
      copyList.sort((a, b) => {
        return b.기본금리 - a.기본금리;
      });
    }
    setSortedSavingList(copyList);
  }, [listControl, availableSavingList]);
  useEffect(() => {
    getSavingList();
  }, []);
  // todo - api datas
  function getSavingList() {
    setAvailableSavingList([
      {
        은행명: "신한",
        은행코드: "088",
        적금명: "신한 장병내일준비적금",
        기본금리: 4.5,
        최대금리: 5.2,
        최소기간: 6,
        최대기간: 12,
      },
      {
        은행명: "제주은행",
        은행코드: "035",
        적금명: "제주은행 장병내일준비적금",
        기본금리: 4.5,
        최대금리: 4.5,
        최소기간: 6,
        최대기간: 12,
      },

      {
        은행명: "우체국",
        은행코드: "071",
        적금명: "우체국 장병내일준비적금",
        기본금리: 4.5,
        최대금리: 5.0,
        최소기간: 6,
        최대기간: 12,
      },
      {
        은행명: "하나",
        은행코드: "081",
        적금명: "하나 장병내일준비적금",
        기본금리: 4.0,
        최대금리: 4.5,
        최소기간: 6,
        최대기간: 12,
      },
      {
        은행명: "DGB",
        은행코드: "456",
        적금명: "DGB 장병내일준비적금",
        기본금리: 4.5,
        최대금리: 4.5,
        최소기간: 6,
        최대기간: 12,
      },
      {
        은행명: "NH",
        은행코드: "011",
        적금명: "NH 장병내일준비적금",
        기본금리: 4.0,
        최대금리: 4.5,
        최소기간: 6,
        최대기간: 12,
      },
      {
        은행명: "우리",
        은행코드: "020",
        적금명: "우리은행 장병내일준비적금",
        기본금리: 4.0,
        최대금리: 4.5,
        최소기간: 6,
        최대기간: 12,
      },
      {
        은행명: "IBK",
        적금명: "IBK 장병내일준비적금",
        은행코드: "225",
        기본금리: 4.5,
        최대금리: 5.0,
        최소기간: 6,
        최대기간: 12,
      },
    ]);
  }
  return (
    <SavingList>
      {sortedSavingList.map((item) => {
        return <AvailableSavingItem item={item} key={uuid()} />;
      })}
    </SavingList>
  );
}
const SavingList = styled.div`
  .item {
    margin-bottom: 12px;
  }
  .item:last-child {
    margin-bottom: 0;
  }
`;

export default AvailableSavingList;
