import styled from "styled-components";
import { css } from "styled-components";

//챌린지 카드 제작용 컴포넌트 모음

//[style] : 기본 카드 디자인
const CardDesign = css`
  background-color: white;
  width: 295px;
  height: 80px;
  margin: 15px 0;
  border-radius: 12px;
  padding: 10px 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

//[styled comp] : 날짜
const Date = styled.div`
  max-width: 120px;
  height: 19px;
  font-size: 12px;
  font-family: "Pretendard-Medium";
  color: var(--Body_01);
  margin-bottom: 5px;
`;

//[styled comp] : 카드 내용 배치용 box
const ContentBox = styled.div`
  display: flex;
  align-items: flex-end;
`;

//[styled comp] : 카드 썸네일
const Thumb = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

//[styled comp] : 텍스트 박스
const TextBox = styled.div`
  width: 180px;
  height: 50px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

//[styled comp] : 챌린지 제목
const Title = styled.div`
  min-width: 170px;
  font-size: 15px;
  font-family: "Pretendard-SemiBold";
  color: var(--Title_01);

  margin-bottom: 5px;
  text-align: left;
`;

//[styled comp] : 챌린지 대상
const Versus = styled.div`
  font-size: 14px;
  font-family: "Pretendard-Medium";
  color: var(--Body_01);

  span:nth-child(${({ pick }) => (pick ? 1 : 3)}) {
    color: var(--a3);
  }
`;

//[styled comp] : 챌린지 참여 인원
const Count = styled.div`
  width: 75px;
  min-width: 75px;
  height: 19px;
  background-color: rgba(76, 175, 91, 0.15);

  border-radius: 8px;
  margin-top: 10px;

  line-height: 19px;

  font-size: 12px;
  font-family: "Pretendard-Medium";
  color: var(--a2);
`;

//[styled comp] : 배팅 버튼 컨테이너
const StyledBetButton = styled.button`
  border: none;
  border-radius: 8px;
  width: 142px;
  height: 28px;
  font-size: 14px;
  font-family: "Pretendard-SemiBold";
  background-color: var(--Surface);

  transition: 0.5s all;
  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

//[styled comp] : 배팅 버튼
const StyledBetButtonBox = styled.div`
  width: 300px;
  height: 40px;
  margin: 5px auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${StyledBetButton}:nth-child(1) {
    color: var(--a5);
  }

  ${StyledBetButton}:nth-child(2) {
    color: var(--alert);
  }
`;

export {
  ContentBox,
  Count,
  Date,
  Thumb,
  CardDesign,
  TextBox,
  Title,
  Versus,
  StyledBetButtonBox,
  StyledBetButton,
};
