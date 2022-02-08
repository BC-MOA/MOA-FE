import styled from "styled-components";
import dateFormat from "../function/dateFormat";

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

const Date_ = styled.div`
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

const DueProgressBar = ({ join, end, now }) => {
  const diff = parseInt((end - now) / (1000 * 60 * 60 * 24));

  const percent = parseInt(((575 - diff) / 575) * 100);

  return (
    <div>
      <Bar ratio={percent}>
        <Speechbubble>
          <div className="bubble">D-{diff}</div>
          <div className="pointer"></div>
        </Speechbubble>
        <div className="bar-back">
          <div className="bar"></div>
        </div>
      </Bar>
      <Date_>
        <div className="left">
          <p className="type">입대일</p>
          <p>{dateFormat(join)}</p>
        </div>
        <div className="right">
          <p className="type">전역일</p>
          <p>{dateFormat(end)}</p>
        </div>
      </Date_>
    </div>
  );
};

export default DueProgressBar;
