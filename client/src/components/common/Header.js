import React from "react";
import styled from "styled-components";
import StyledLink from "components/common/StyledLink";
import kFormatter from "../compete/function/kFormatter";

//Header-상단공간
const StyledHeader = styled.div`
  min-height: 44px;

  display: felx;
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
const LinkedKey = (props) => (
  <StyledLink to="/reward">
    <StyledKeyBox>
      <img src={require("assets/compete/key.svg").default} />
      <div className="text">{props.count}개</div>
    </StyledKeyBox>
  </StyledLink>
);

//링크가 아닌 키
const NotLinkedKey = (props) => (
  <StyledKeyBox>
    <img src={require("assets/compete/key.svg").default} />
    <div className="text">{props.count}개</div>
  </StyledKeyBox>
);

//알람
const Bell = (props) => (
  <StyledLink to="/compete">
    <img
      src={
        props.alarm
          ? require("assets/compete/alarm-on.svg").default
          : require("assets/compete/alarm-off.svg").default
      }
    />
  </StyledLink>
);

function Header(props) {
  return (
    <StyledHeader $title={props.$title}>
      {props.$title && <img src={require("assets/compete/moa.svg").default} />}
      <div className="content">
        <LinkedKey count={kFormatter(props.keys)}></LinkedKey>
        <Bell alarm={props.alarm}></Bell>
      </div>
    </StyledHeader>
  );
}

export { Header, LinkedKey, NotLinkedKey };
