import { useState } from "react";
import styled from "styled-components";
import prediction from "../function/PredictKey";

//[styled comp] : 배팅 결과
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

/**
 * [props]
 * bet : int/ 베팅한 개수
 * pick : bool/선택한 대상
 * keys: 전체 베팅된 키 리스트
 */
const ExpectedKey = ({ bet, pick, keys }) => {
  const [pop, setPop] = useState(false);

  const handleClick = () => {
    setPop(!pop);
  };

  const expect = prediction(keys, pick, bet);

  return (
    <Expect>
      <div className="text">
        배팅 성공 시 열쇠 <p className="num"> {expect} </p> 개 획득
      </div>
      <img
        alt="none"
        className="button"
        onClick={handleClick}
        src={require("assets/compete/Question_fill.svg").default}
      ></img>
      {pop && (
        <img
          alt="none"
          src={require("assets/compete/popup.png")}
          className="pop"
        ></img>
      )}
    </Expect>
  );
};

export default ExpectedKey;
