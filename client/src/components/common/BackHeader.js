import React from "react";
import { useNavigate } from "react-router-dom";
import { backButtonBox } from "style/common";
import styled from "styled-components";

function BackHeader({ isScrolled, title, path }) {
  const history = useNavigate();
  return (
    <Header className={isScrolled ? "isScrolled" : ""}>
      <div
        className="backBtn"
        onClick={() => {
          history(path);
        }}
      >
        <img src={require("assets/goal/ic_back.svg").default} alt="뒤로가기" />
      </div>
      {title && (
        <span className={isScrolled ? "headerTitle" : ""}>{title}</span>
      )}
    </Header>
  );
}
BackHeader.defaultProps = {
  title: "",
  isScrolled: false,
};
const Header = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  .backBtn {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    ${backButtonBox}
  }
  span {
    display: none;
  }
  .headerTitle {
    display: block;
    transform: translateX(50%);
    font-family: "Pretendard-semibold";
    font-size: calc(16rem / 16);
    line-height: 28px;
  }
`;
export default BackHeader;
