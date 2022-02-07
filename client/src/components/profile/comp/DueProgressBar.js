import { calc_days } from "components/gather/addGoal/utils";
import styled from "styled-components";

const Speechbubble = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 5px;

  .bubble {
    width: 52px;
    height: 25px;
    background-color: var(--a3-15);

    border-radius: 20px;
    font-size: 12px;
    line-height: 25px;
    font-family: Roboto;
    font-weight: 500;
    font-size: 12px;
    color: var(--a5);
  }

  .pointer {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;

    border-top: 5px solid var(--a3-15);

    margin-left: 21px;
  }
`;

const Bar = styled.div`
  padding: 0 15px;

  * {
    border-radius: 24px;
  }

  .bar-back {
    background-color: var(--Line_03);
    height: 12px;
    position: relative;
  }

  .bar {
    width: ${({ ratio }) => ratio}%;
    background-color: var(--a5);
    height: 12px;
    position: absolute;
  }

  ${Speechbubble} {
    padding-left: calc(${({ ratio }) => ratio}% - 26px);
  }
`;

const Date = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 10px 15px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  .left {
    text-align: left;
  }

  .right {
    text-align: right;
  }

  .type {
    color: var(--Body_02);
    margin-bottom: 3px;
  }
`;

const DueProgressBar = ({ type, join }) => {
  //실제로는 전역일을 계산해서 처리
  //남은 일자, 전역일, 퍼센트 변환

  const percent = 50;

  return (
    <div>
      <Bar ratio={percent}>
        <Speechbubble>
          <div className="bubble">D-411</div>
          <div className="pointer"></div>
        </Speechbubble>
        <div className="bar-back">
          <div className="bar"></div>
        </div>
      </Bar>
      <Date>
        <div className="left">
          <p className="type">입대일</p>
          <p>2021.09.16</p>
        </div>
        <div className="right">
          <p className="type">전역일</p>
          <p>2021.09.16</p>
        </div>
      </Date>
    </div>
  );
};

export default DueProgressBar;
