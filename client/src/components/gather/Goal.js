import React from "react";
import styled, { css } from "styled-components";
import { styleTitle, styleSubTitle, styleNotice } from "style/common";
import Category from "./Category";
import DatePick from "components/gather/DatePick";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px 20px 0;
  box-sizing: border-box;
  text-align: left;
  position: relative;

  .Title {
    ${styleTitle}
  }
  .SubTitle {
    ${styleSubTitle}
    padding: 0 0 4px 4px;
  }
  .Notice {
    ${styleNotice}
    padding: 8px 0 0 4px;
  }
  .Empasis {
    ${styleNotice}
    color: var(--Title_02);
  }
`;

const GoalName = styled.div`
  margin-top: 24px;
  input {
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    border-radius: 8px;
    border: none;
    padding: 10px 16px;
    font-family: "Pretendard-Regular";
    font-size: 16px;
    line-height: 25px;

    &::placeholder {
      color: #c5c5c5;
    }
  }
`;

const DeadLine = styled.div`
  margin-top: 24px;
`;

function Goal() {
  const avgCnt = 2;

  return (
    <Container>
      <div className="Title">목표 세우기</div>
      <div>
        다른 장병들은 <span>평균 {avgCnt}개</span>의 목표를 세웠어요.
      </div>
      <Category />
      <GoalName>
        <div className="SubTitle">목표 이름</div>
        <input placeholder="목표 이름을 입력해주세요" />
        <div className="Notice">예) 폰바꾸기</div>
      </GoalName>
      <DeadLine>
        <div className="SubTitle">언제까지</div>
        <DatePick />
        <div className="Notice">
          <spa className="Empasis">1</spa> 개월 후의 날짜부터 선택이 가능합니다.{" "}
        </div>
      </DeadLine>
    </Container>
  );
}

export default Goal;
