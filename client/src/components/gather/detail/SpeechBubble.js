import React from "react";
import styled, { css } from "styled-components";

const TextBalloon = styled.div`
  width: fit-content;
  position: absolute;
  left: ${({ position }) => position}%;
  margin-left: -${({ mL }) => mL / 2}px;
  top: 0;

  .balloon {
    position: relative;
    border-radius: 10.5px;
    width: fit-content;
    padding: 1px 7px;
    background-color: #ddede2;
    margin-bottom: 16px;

    font-family: "Roboto";
    font-weight: 500;
    font-size: 12px;
    line-height: 19px;
    color: var(--a2);
  }
  .tail {
    width: 0px;
    height: 0px;
    border-right: 8px solid #ddede2;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    position: absolute;
    left: 50%;
    margin-left: -4px;
    bottom: -8px;
    transform: rotate(-90deg);
  }
`;

function SpeechBubble({ children, position }) {
  const marginLeft = {
    1: 32.61,
    2: 39.42,
    3: 46.25,
    4: 53.06,
  };
  return (
    <TextBalloon
      position={position}
      mL={marginLeft[String(children[1]).length]}
    >
      <div className="balloon">
        {children}
        <div className="tail" />
      </div>
    </TextBalloon>
  );
}

export default SpeechBubble;
