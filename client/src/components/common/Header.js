import React from "react";
import styled from "styled-components";
import StyledLink from "components/common/StyledLink";
import kFormatter from "../compete/function/kFormatter";

//Header-상단공간
const StyledHeader = styled.div`
  min-height: 44px;

  display: flex;
  justify-content: ${({ $title }) => ($title ? "space-between" : "flex-end")};
  align-items: center;

  .content {
    width: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledKeyBox = styled.div`
  width: 70px;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  .text {
    margin-left: 3px;
    font-family: Roboto;
    font-size: 14px;
  }
`;

//링크인 키
const LinkedKey = ({ count }) => (
  <StyledLink to="/reward">
    <StyledKeyBox>
      <img src={require("assets/compete/key.svg").default} />
      <div className="text">{count}개</div>
    </StyledKeyBox>
  </StyledLink>
);

//링크가 아닌 키
const NotLinkedKey = ({ count }) => (
  <StyledKeyBox>
    <img src={require("assets/compete/key.svg").default} />
    <div className="text">{count}개</div>
  </StyledKeyBox>
);

//알람
const Bell = ({ alarm }) => (
  <StyledLink to="/notice">
    <img
      src={
        alarm
          ? require("assets/compete/alarm-on.svg").default
          : require("assets/compete/alarm-off.svg").default
      }
    />
  </StyledLink>
);

function Header({ $title, keys, alarm }) {
  return (
    <StyledHeader $title={$title}>
      {$title && <img src={require("assets/compete/moa.svg").default} />}
      <div className="content">
        <LinkedKey count={kFormatter(keys)}></LinkedKey>
        <Bell alarm={alarm}></Bell>
      </div>
    </StyledHeader>
  );
}

export { Header, LinkedKey, NotLinkedKey };
