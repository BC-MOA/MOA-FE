import styled from "styled-components";
import React, { useEffect } from "react";

const Background = styled.div`
  width: calc(100% + 40px);
  margin-left: -20px;
  margin-top: -8px;
  height: calc(100vh);
  background-color: var(--surface);
  font-size: 24px;
  font-weight: 600;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .count {
    display: flex;
    justify-content: center;

    span {
      color: var(--a3);
    }
  }

  //체크 애니메이션: https://stackoverflow.com/questions/41078478/css-animated-checkmark
  .checkmark__circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: #7ac142;
    fill: none;
    animation: stroke 3s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  }

  .checkmark {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: block;
    stroke-width: 2;
    stroke: #fff;
    stroke-miterlimit: 10;
    margin: 10% auto;
    box-shadow: inset 0px 0px 0px #7ac142;
    animation: fill 2s ease-in-out 0.4s forwards,
      scale 0.3s ease-in-out 0.9s both;
  }

  .checkmark__check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke 3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
  }

  @keyframes stroke {
    100% {
      stroke-dashoffset: 0;
    }
  }
  @keyframes scale {
    0%,
    100% {
      transform: none;
    }
    50% {
      transform: scale3d(1.1, 1.1, 1);
    }
  }
  @keyframes fill {
    100% {
      box-shadow: inset 0px 0px 0px 30px #7ac142;
    }
  }
`;

const AccountFound = ({ name, count, func }) => {
  //render된 이후에
  useEffect(() => {
    setTimeout(() => {
      func(2);
    }, 5000);
  });

  return (
    <Background>
      <p>{name}님의 군 관련 계좌</p>
      <div className="count">
        <span>{count}</span>개를 찾았어요
      </div>
      <svg
        className="checkmark"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        <circle
          className="checkmark__circle"
          cx="26"
          cy="26"
          r="25"
          fill="none"
        />
        <path
          className="checkmark__check"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>
    </Background>
  );
};

export default AccountFound;
