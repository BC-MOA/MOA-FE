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

const PickupSection = styled.div`
  display: flex;
  height: 75px;
  margin: 15px auto;
  justify-content: space-around;
`;

const Pickupbox = styled.div`
  display: flex;
  align-items: flex-start;

  .info p {
    margin-top: 5px;
    font-family: "Pretendard-Medium";
    font-size: 14px;
  }
`;

const PickUp = (props) => {
  const obj = props.info;

  const clickHandle = () => {
    props.func();
  };

  return (
    <Pickupbox>
      <div onClick={clickHandle}>
        <img
          src={
            obj.pick
              ? require("assets/compete/checked.svg").default
              : require("assets/compete/check.svg").default
          }
        ></img>
      </div>
      <div className="info">
        <img
          src={
            obj.first
              ? require("assets/compete/v2.png")
              : require("assets/compete/v1.png")
          }
        ></img>
        <p>{obj.first ? obj.versus[0] : obj.versus[1]}</p>
      </div>
    </Pickupbox>
  );
};

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
`;

function CompDetail(props) {
  const { state } = useLocation();
  const comp = state.info;

  const options = {
    number: [
      { value: 1, label: "1" },
      { value: 2, label: "2" },
      { value: 3, label: "3" },
      { value: 4, label: "4" },
      { value: 5, label: "5" },
    ],
  };

  const [count, setCount] = useState({
    valueGroups: {
      number: 1,
    },
    optionGroups: options,
  });

  const handleChange = (name, value) => {
    setCount(() => ({
      valueGroups: {
        [name]: value,
      },
      optionGroups: options,
    }));

    console.log(count.valueGroups);
  };

  //true면 왼쪽, false 면 오른쪽
  const [pickUped, setPickUped] = useState(comp.pick);

  const pickup = () => {
    setPickUped(!pickUped);
  };

  return (
    <>
      <BackHeader isScrolled={false} title={""} path={-1}></BackHeader>
      <Detail>
        <BetCard>
          <div className="top">
            <Count>{kFormatter(comp.total)}명 참여 중</Count>
            <p className="title">{comp.title}</p>
            <Date>{formatDate(comp.due)} 마감</Date>
          </div>
          <PickupSection>
            <PickUp
              disabled={pickUped}
              info={{
                versus: comp.versus,
                pick: pickUped,
                first: true,
              }}
              func={pickup}
            ></PickUp>
            <PickUp
              disabled={!pickUped}
              info={{
                versus: comp.versus,
                pick: !pickUped,
                first: false,
              }}
              func={pickup}
            ></PickUp>
          </PickupSection>
          <PercentBar totalKey={[12, 37]}></PercentBar>
        </BetCard>
        {true && (
          <>
            <KeySelctor>
              <img src={require("assets/compete/key.svg").default}></img>
              <p>베팅할 열쇠개수</p>
              <div className="pickerWrapper">
                <Picker
                  optionGroups={count.optionGroups}
                  valueGroups={count.valueGroups}
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
          <Button>배팅하기</Button>
        </div>
      </Detail>
    </>
  );
}

export default CompDetail;
