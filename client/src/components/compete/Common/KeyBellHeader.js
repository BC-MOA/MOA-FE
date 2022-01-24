import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//임시 data
const data = {
  keyCount: 30,
  alarm: true,
};

//Header
const Header = styled.div`
  height: 44px;
  padding: 0 20px;

  display: felx;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--Surface);
`;

//Key
const Key = (props) => (
  <StyledKeyBox>
    <img src={require("assets/compete/key-simple.svg").default} />
    <div className="text">{props.count}개</div>
  </StyledKeyBox>
);

const StyledKeyBox = styled.div`
  width: 69px;
  height: 24px;
  margin-right: 8px;

  display: flex;

  font-family: Roboto;
  font-size: 14px;

  .text {
    margin-left: 3px;
  }
`;

//Bell
//Home 컴포넌트로 이동하는 링크로 설정
const Bell = (props) => (
  <StyledBellBox>
    <Link to="/compete">
      <img
        src={
          props.alarm
            ? require("assets/compete/alarm-on.svg").default
            : require("assets/compete/alarm-off.svg").default
        }
      />
    </Link>
  </StyledBellBox>
);

const StyledBellBox = styled.div`
  width: 24px;
  height: 24px;

  transition: 1s all;

  :hover {
    opacity: 0.5;
  }
`;

function CompHeader(props) {
  return (
    <Header>
      <Key count={data.keyCount}></Key>
      <Bell alarm={data.alarm}></Bell>
    </Header>
  );
}

export default CompHeader;
