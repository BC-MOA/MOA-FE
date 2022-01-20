import React from "react";
import styled, { css } from "styled-components";

const styleTitle = css`
  font-family: "Pretendard-SemiBold";
  font-size: 21px;
  line-height: 33px;
  color: var(--Title_01);
`;

const styleSubTitle = css`
  font-family: "Pretendard-Medium";
  font-size: 14px;
  line-height: 22px;
  color: var(--Title_02);
`;

const styleNotice = css`
  font-family: "Pretendard-Regular";
  font-size: 12px;
  line-height: 19px;
  color: var(--Body_01);
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px 20px 0;
  box-sizing: border-box;

  .Title {
    ${styleTitle}
  }
  .SubTitle {
    ${styleSubTitle}
  }
`;

function Goal() {
  return (
    <Container>
      <div className="Title">목표 세우기</div>
      <div className="SubTitle">무엇을 위해서?</div>
    </Container>
  );
}

export default Goal;
