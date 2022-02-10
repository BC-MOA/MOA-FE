import styled from "styled-components";
import moment from "moment";
import Countdown from "react-countdown";

//[styled comp] : 타이버 컨테이너
const TimerBox = styled.div`
  height: 25px;

  * {
    color: var(--a3);
    font-family: "Pretendard-Medium";
    font-size: 16px;
  }
`;

//[function] : 타이머를 위한 시간 표기 형식 변환 함수
//[args] : due-만료시간
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    //완료시 처리할 내용
    return <>done!</>;
  } else {
    //카운트 다운 출력
    return (
      <span>
        {days !== 0 && days + "일 "}
        {hours < 10 ? "0" + hours : hours}:
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds} 후 종료
      </span>
    );
  }
};

/**
 * [comp]
 * Timer
 *
 * [state]
 * none
 *
 * [props]
 * 챌린지 정보-만료일
 */

const Timer = ({ due }) => {
  const now = moment();

  return <Countdown date={now + (due - now)} renderer={renderer} />;
};

export { Timer, TimerBox };
