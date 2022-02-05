import { useLocation } from "react-router-dom";
import styled from "styled-components";
import BackHeader from "components/common/BackHeader";
import { Count, Date } from "../comp/Card/CardComps";
import kFormatter from "../function/kFormatter";
import formatDate from "../function/DateChanger";
import PercentBar from "../comp/PercentBar";
import React, { useState } from "react";
import { Timer, TimerBox } from "../comp/Timer";
import { PickUp } from "../comp/ChalOption";
import { KeyPicker, options } from "../comp/KeyPicker";
import ExpectedKey from "../comp/KeyExpect";

//[styled comp] : 페이지 컨테이너
const Detail = styled.div`
  height: 650px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

//[styled comp] : 베팅 카드 컨테이너/내부 디자인 설정
const BetCard = styled.div`
  background-color: white;
  height: 270px;
  padding: 15px 20px;
  border-radius: 12px;

  .header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    height: 90px;

    ${Date} {
      font-size: 14px;
      max-width: 150px;
    }

    .title {
      font-size: 18px;
      font-family: "Pretendard-Regular";
      font-weight: 600;
    }
  }

  .picks {
    display: flex;
    height: 75px;
    margin: 15px auto;
    justify-content: space-around;
  }
`;

//[styled comp] : 배팅하기 버튼
const Button = styled.button`
  height: 49px;
  width: 100%;
  border: none;
  border-radius: 12px;

  background-color: var(--a5);
  font-family: "Pretendard-SemiBold";
  color: white;

  transition: 1s all;
  :hover {
    opacity: 0.8;
  }

  :disabled {
    background-color: var(--Line_02);
    color: var(--Body_03);
  }
`;

/**
 * [comp]
 * CompDetail
 *
 * [state]
 * isBetted : 베팅 여부 관련 state
 * pickUped : 선택 여부 관련 state
 * state : 챌린지 정보 - useLocation 통해 정보전달
 * keyCount: 열쇠 선택 관련 state
 *
 * [props]
 * none
 */
function CompDetail() {
  //챌린지 정보 state
  const { state } = useLocation();
  const comp = state;

  //베팅 여부 state
  const [isBetted, setIsBetted] = useState(comp.bet != undefined);

  //베팅 대상 선택 state
  const [pick, setPick] = useState(isBetted ? comp.pick : false);

  //pick했다면
  const pickup = (input) => {
    setIsBetted(true);
    setPick(input);
  };

  //베팅 열쇠 개수 관리
  const [keyCount, setKeyCount] = useState({
    valueGroups: {
      number: comp.bet == undefined ? 1 : comp.bet,
    },
    optionGroups: options,
  });

  const handleChange = (name, value) => {
    setKeyCount(() => ({
      valueGroups: {
        [name]: value,
      },
      optionGroups: options,
    }));
  };

  //베팅 버튼 클릭
  //API 추가 필요
  const clickBet = () => {
    console.log("bet!");
  };

  return (
    <>
      <BackHeader isScrolled={false} title={false} path={-1}></BackHeader>
      <Detail>
        <BetCard>
          <div className="header">
            <Count>{kFormatter(comp.total)}명 참여 중</Count>
            <p className="title">{comp.title}</p>
            <Date>{formatDate(comp.due)} 마감</Date>
          </div>
          <div className="picks">
            <div
              onClick={() => {
                pickup(true);
              }}
            >
              <PickUp
                versus={comp.versus[0]}
                type={true}
                pick={pick}
                isbet={isBetted}
              ></PickUp>
            </div>
            <div
              onClick={() => {
                pickup(false);
              }}
            >
              <PickUp
                versus={comp.versus[1]}
                type={false}
                pick={pick}
                isbet={isBetted}
              ></PickUp>
            </div>
          </div>
          <PercentBar totalkey={comp.totalkey}></PercentBar>
        </BetCard>
        {isBetted && (
          <>
            <ExpectedKey
              bet={keyCount.valueGroups.number}
              pick={pick}
              keys={comp.totalkey}
            ></ExpectedKey>
            <KeyPicker onchange={handleChange} count={keyCount}></KeyPicker>
          </>
        )}
        <div>
          <TimerBox>
            <Timer due={comp.due}></Timer>
          </TimerBox>
          <Button onClick={clickBet} disabled={!isBetted}>
            배팅하기
          </Button>
        </div>
      </Detail>
    </>
  );
}

export default CompDetail;
