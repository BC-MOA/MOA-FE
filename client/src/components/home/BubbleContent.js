import React from "react";
import styled from "styled-components";

function BubbleContent({ savingNum }) {
  return (
    <SpeechBubble>
      {0 === savingNum && (
        <div className="bubbleText">
          <span>군적금이 없는 {"민수"}님을 위해 추천드려요</span>
          <span>군적금 가입하고 최대금리와 열쇠 받아가세요!</span>
        </div>
      )}
      {1 === savingNum && (
        <div className="bubbleText">
          <span>군적금을 1개 더 가입하거나</span>
          <span>목표를 잡아 추가 저축하고 열쇠 받아가세요!</span>
        </div>
      )}
      {2 === savingNum && (
        <div className="bubbleText">
          <span>군적금은 이미 꽉 채워서 들고 계시네요</span>
          <span>목표를 잡아 추가 저축하고 열쇠 받아가세요!</span>
        </div>
      )}
      <div className="tail"></div>
      <img
        className="character"
        src={require("assets/army_character.svg").default}
        alt="군인캐릭터"
      />
    </SpeechBubble>
  );
}
const SpeechBubble = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 75px;
  overflow: hidden;
  font-family: "Pretendard-SemiBold";
  font-size: 12px;
  line-height: 19px;
  position: relative;
  padding-top: 21px;

  .bubbleImg {
    width: 226px;
    height: 60px;
  }
  .character {
    margin-top: 10px;
    margin-right: 16px;
    width: 68px;
    height: 100px;
  }
  .bubbleText {
    height: fit-content;
    color: #ffffff;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--a2);
    padding: 10px;
    border-radius: 16px;
  }
  .tail {
    width: 0px;
    height: 0px;
    border-right: 14px solid var(--a2);
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    position: absolute;
    right: 80px;
    bottom: 15px;
    transform: rotate(-143deg);
  }
`;
export default BubbleContent;
