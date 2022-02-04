import BackHeader from "components/common/BackHeader";
import Container from "components/common/Container";
import ScrollBox from "components/common/ScrollBox";
import React from "react";
import styled from "styled-components";
import ProcessStateBox from "./ProcessStateBox";
const stateList = ["신청 접수", "군 정보 확인", "은행 심사", "개설 완료"];

function MilitaryDetail() {
  return (
    <Container>
      {/* todo - title 변경하기 - 목표명 있을 때는 목표명 / 없을 때는 ''  */}
      <BackHeader
        path={"/gather"}
        title={"1000만원 모으기"}
        isScrolled={true}
      />
      <ScrollBox paddingValue={"12px 0 "}>
        {/* todo - 해당 군적금 정보 받아서 변경 */}
        <StateBox>
          <div className="tag">{"군적금"}</div>
          <div className="title">{"신한 장병내일준비적금"}</div>
          <ProcessStateBox stateList={stateList} currentState={stateList[2]} />
        </StateBox>
      </ScrollBox>
    </Container>
  );
}
const StateBox = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;
  padding: 32px 21px 8px;
  font-family: "Pretendard-SemiBold";
  margin-bottom: 16px;
  .tag {
    padding: 2px 8px;
    display: inline-block;
    background: rgba(76, 175, 91, 0.15);
    border-radius: 8px;
    color: var(--a2);
    font-size: 12px;
    line-height: 19px;
    margin-bottom: 8px;
  }
  .title {
    color: var(--Title_01);
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 28px;
  }
`;
export default MilitaryDetail;
