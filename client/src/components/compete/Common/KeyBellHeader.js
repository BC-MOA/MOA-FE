import React from "react";
import styled from "styled-components";
import StyledLink from "components/common/StyledLink";

//임시 data-나중에 사용자 정보로 대체
const data = {
  keyCount: 30,
  alarm: true,
};

//Header-상단공간
const Header = styled.div`
  height: 44px;

  display: felx;
  justify-content: flex-end;
  align-items: center;
`;

//Container-키,알람 컨테이너
const Container = styled.div`
  width: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

//Key
const Key = (props) => (
  <StyledLink to="/compete">
    <StyledKeyBox>
      <img src={require("assets/compete/key-simple.svg").default} />
      <div className="text">{props.count}개</div>
    </StyledKeyBox>
  </StyledLink>
);

const NoLinkKey = (props) => (
  <StyledKeyBox>
    <img src={require("assets/compete/key-simple.svg").default} />
    <div className="text">{props.count}개</div>
  </StyledKeyBox>
);

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

//Bell
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

function CompHeader(props) {
  return (
    <Header>
      <Container>
        <Key count={data.keyCount}></Key>
        <Bell alarm={data.alarm}></Bell>
      </Container>
    </Header>
  );
}

export { CompHeader, Key, NoLinkKey };
