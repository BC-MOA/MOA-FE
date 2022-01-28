import { useState } from "react";
import styled from "styled-components";

const Expect = styled.div`
  width: 244px;
  height: 33px;
  margin: 0 auto;
  padding: 0 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  .text {
    display: flex;
    align-items: center;
    background-color: white;
    justify-content: center;

    width: 210px;
    border-radius: 12px;
    font-family: "Pretendard-SemiBold";
    font-size: 16px;
    color: var(--Body_01);
  }

  .num {
    text-align: center;
    line-height: 33px;
    color: var(--a3);
    margin-left: 5px;
  }

  .button:hover {
    opacity: 0.5;
  }

  .pop {
    position: absolute;
    right: -15px;
    bottom: 35px;
  }
`;

const ExpectKey = () => {
  const [pop, setPop] = useState(false);

  const handleClick = () => {
    setPop(!pop);
  };

  return (
    <Expect>
      <div className="text">
        배팅 성공 시 열쇠 <p className="num"> {7} </p> 개 획득
      </div>
      <img
        className="button"
        onClick={handleClick}
        src={require("assets/compete/Question_fill.svg").default}
      ></img>
      {pop && (
        <img src={require("assets/compete/popup.png")} className="pop"></img>
      )}
    </Expect>
  );
};

export default ExpectKey;
