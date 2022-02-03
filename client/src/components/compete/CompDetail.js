import { useLocation } from "react-router-dom";
import styled from "styled-components";
import BackHeader from "components/common/BackHeader";
import { Count, Date } from "./comp/Card";
import kFormatter from "./function/kFormatter";
import formatDate from "./function/DateChanger";
import PercentBar from "./comp/PercentBar";
import React, { useState } from "react";
import { Timer, TimerBox } from "./comp/Timer";
import { PickUp, PickupSection, Pickupbox } from "./comp/DetailPickup";
import { KeyPicker, options } from "./comp/Picker";
import ExpectKey from "./comp/KeyExpect";

const Detail = styled.div`
  height: 650px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BetCard = styled.div`
  background-color: white;
  height: 270px;
  padding: 15px 20px;
  border-radius: 12px;

  .title {
    font-size: 18px;
    font-family: "Pretendard-Regular";
    font-weight: 600;
  }

  .top {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    height: 90px;

    ${Date} {
      font-size: 14px;
    }
  }
`;

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

function CompDetail() {
  //챌린지 정보 state
  const { state } = useLocation();
  const comp = state;

  //베팅 선택용 state - true면 왼쪽, false 면 오른쪽 선택
  const [isBetted, setIsBetted] = useState(comp.bet != undefined);
  const [pickUped, setPickUped] = useState(isBetted ? comp.pick : false);

  const pickup = (input) => {
    setIsBetted(true);
    setPickUped(input);
  };

  const pickupProps = {
    pick: pickUped,
    func: pickup,
    isbet: isBetted,
  };

  //베팅 열쇠 개수 관련 state
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

  return (
    <>
      <BackHeader isScrolled={false} title={false} path={-1}></BackHeader>
      <Detail>
        <BetCard>
          <div className="top">
            <Count>{kFormatter(comp.total)}명 참여 중</Count>
            <p className="title">{comp.title}</p>
            <Date>{formatDate(comp.due)} 마감</Date>
          </div>
          <PickupSection>
            <PickUp
              versus={comp.versus[0]}
              type={true}
              info={pickupProps}
            ></PickUp>
            <PickUp
              versus={comp.versus[1]}
              type={false}
              info={pickupProps}
            ></PickUp>
          </PickupSection>
          <PercentBar totalkey={comp.totalkey}></PercentBar>
        </BetCard>
        {isBetted && (
          <>
            <ExpectKey
              bet={keyCount.valueGroups.number}
              pick={pickUped}
              keys={comp.totalkey}
            ></ExpectKey>
            <KeyPicker onchange={handleChange} count={keyCount}></KeyPicker>
          </>
        )}
        <div>
          <TimerBox>
            <Timer due={comp.due}></Timer>
          </TimerBox>
          <Button disabled={!isBetted}>배팅하기</Button>
        </div>
      </Detail>
    </>
  );
}

export default CompDetail;
