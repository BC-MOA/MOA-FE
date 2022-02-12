import React from "react";
import styled from "styled-components";
import { styleNotice, styleSubTitle } from "style/common";

const Container = styled.div`
  padding: 12px 16px;
  background-color: #fff;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;
  text-align: left;

  .date {
    ${styleNotice}
    margin-bottom: 8px;
  }
  .contentBox {
    ${styleSubTitle}
    display: flex;
    gap: 12px;
    align-items: center;
  }
  & + & {
    margin-top: 8px;
  }
`;

function NoticeEl({ props }) {
  return (
    <Container>
      <div className="date">{props.date}</div>
      <div className="contentBox">
        <img
          src={require(`assets/notice/ic_notice_${props.category}.svg`)}
          alt="알림 아이콘"
        />
        <div className="content">{props.content}</div>
      </div>
    </Container>
  );
}

export default NoticeEl;
