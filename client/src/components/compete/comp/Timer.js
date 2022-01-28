import styled from "styled-components";
import moment from "moment";
import Countdown from "react-countdown";

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

export { Timer, TimerBox };
