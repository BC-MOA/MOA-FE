import { useLocation } from "react-router-dom";
import styled from "styled-components";
import BackHeader from "components/common/BackHeader";
import { Count, Date } from "./comp/Card";
import kFormatter from "./comp/kFormatter";
import formatDate from "./comp/DateChanger";
import PercentBar from "./comp/PercentBar";
import React, { useContext, useState } from "react";
import Picker from "react-scrollable-picker";
import Countdown from "react-countdown";
import moment from "moment";
import { PickUp, PickupSection, Pickupbox } from "./comp/DetailPickup";

const Detail = styled.div`
  height: 680px;

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

const KeySelctor = styled.div`
  height: 130px;
  padding: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: "Pretendard-SemiBold";
  font-size: 18px;

  img {
    width: 28px;
    margin-left: 20px;
    margin-right: -20px;
  }

  .pickerWrapper {
    width: 66px;
  }
`;

const TimerBox = styled.div`
  height: 25px;

  * {
    color: var(--a3);
    font-family: "Pretendard-Medium";
    font-size: 16px;
  }
`;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <>done!</>;
  } else {
    // Render a countdown
    return (
      <span>
        {days != 0 && days + "일 "}
        {hours < 10 ? "0" + hours : hours}:
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds} 후 종료
      </span>
    );
  }
};

const Timer = (props) => {
  const now = moment();
  const goal = moment();

  return <Countdown date={now + (props.due - now)} renderer={renderer} />;
};

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

const options = {
  number: [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
  ],
};

function CompDetail() {
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
            <KeySelctor>
              <img src={require("assets/compete/key.svg").default}></img>
              <p>베팅할 열쇠개수</p>
              <div className="pickerWrapper">
                <Picker
                  optionGroups={keyCount.optionGroups}
                  valueGroups={keyCount.valueGroups}
                  onChange={handleChange}
                  height={150}
                />
              </div>
              <p>개</p>
            </KeySelctor>
            <div>예상 획득 열쇠</div>
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
