import React from "react";
import styled, { css } from "styled-components";
import { styleTitle, styleSubTitle, styleNotice } from "style/common";
import Category from "./Category";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px 20px 0;
  box-sizing: border-box;
  text-align: left;

  .Title {
    ${styleTitle}
  }
  .SubTitle {
    ${styleSubTitle}
  }
  .Notice {
    ${styleNotice}
  }
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
    </Container>
  );
}

export default Goal;
