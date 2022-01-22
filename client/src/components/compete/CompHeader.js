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
  background-color: gray;
  height: 44px;
  padding: 0 20px;

  display: felx;
  justify-content: flex-end;
  align-items: center;
`;

//Key
const Key = ({ className }) => (
  <div className={className}>
    <img src={require("assets/compete/key-simple.svg").default} />
    <div className="text">{data.keyCount}개</div>
  </div>
);

const StyledKey = styled(Key)`
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
const Bell = ({ className }) => (
  <div className={className}>
    <Link to="/home">
      <img
        src={
          data.alarm
            ? require("assets/compete/alarm.svg").default
            : require("assets/compete/key-simple.svg").default
        }
      />
    </Link>
  </div>
);

const StyledBell = styled(Bell)`
  width: 24px;
  height: 24px;
`;

function CompHeader(props) {
  return (
    <Header>
      <StyledKey></StyledKey>
      <StyledBell></StyledBell>
    </Header>
  );
}

export default CompHeader;
