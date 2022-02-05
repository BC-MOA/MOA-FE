import React from "react";
import styled from "styled-components";

function BubbleContent({ savingNum }) {
  return (
    <SpeechBubble value={savingNum}>
      <img className="bubbleImg" src={require("assets/말풍선.png")} alt="" />
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
      <img
        className="character"
        src={require("assets/army_character.png")}
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
  margin-top: 32px;
  .bubbleImg {
    width: 226px;
    height: 60px;
  }
  .character {
    margin-top: 10px;
    width: 68px;
    height: 100px;
  }
  .bubbleText {
    position: absolute;
    right: ${(props) => {
      if (0 === props.value) return "77px";
      else {
        return "81px";
      }
    }};
    top: 11px;

    color: #ffffff;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
export default BubbleContent;
