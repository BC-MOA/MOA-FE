import styled from "styled-components";
import StyledLink from "components/common/StyledLink";
import kFormatter from "../compete/function/kFormatter";
import { UserData } from "store/User";
import React, { useContext } from "react";

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

const BellWrapper = ({ alarm, children }) =>
  alarm ? (
    <StyledLink to="/notice">{children}</StyledLink>
  ) : (
    <div>{children}</div>
  );

//알람
const Bell = ({ alarm }) => (
  <BellWrapper alarm={alarm}>
    <img
      src={
        alarm
          ? require("assets/compete/alarm-on.svg").default
          : require("assets/compete/alarm-off.svg").default
      }
    />
  </BellWrapper>
);

function Header({ $title }) {
  const User = useContext(UserData);
  const userData = User.userData;

  return (
    <StyledHeader $title={$title}>
      {$title && <img src={require("assets/compete/moa.svg").default} />}
      <div className="content">
        <LinkedKey count={kFormatter(userData.key)}></LinkedKey>
        <Bell alarm={userData.id !== ""}></Bell>
      </div>
    </StyledHeader>
  );
}

export { Header, LinkedKey, NotLinkedKey };
