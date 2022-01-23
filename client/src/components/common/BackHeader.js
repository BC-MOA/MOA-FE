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
        <img
          src={require("assets/gather/ic_back.svg").default}
          alt="뒤로가기"
        />
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
  padding-bottom: 8px;
  position: relative;
  .backBtn {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    z-index: 10;
    ${backButtonBox}
  }
  span {
    display: none;
  }
  .headerTitle {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    font-family: "Pretendard-semibold";
    font-size: calc(16rem / 16);
    line-height: 28px;
  }
`;
export default BackHeader;
