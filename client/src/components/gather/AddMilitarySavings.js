import React from "react";
import { useNavigate } from "react-router-dom";
import { backButtonBox } from "style/common";
import styled from "styled-components";

function AddMilitarySavings() {
  const history = useNavigate();
  // todo - api datas
  const userName = "민수";
  const avgApplyNum = 1234;

  return (
    <Container>
      <BackButton
        onClick={() => {
          history(-1);
        }}
      >
        <img
          src={require("assets/gather/ic_back.svg").default}
          alt="뒤로가기"
        />
      </BackButton>
      <MessageBox>
        <div className="title">
          <span>{userName}님이 가입 가능한</span>
          <span>군적금 상품들이에요.</span>
        </div>
        <div className="notice">
          <span>
            이번달 새로 군적금을 신청한 장병은{" "}
            <span className="noticeBold">{avgApplyNum.toLocaleString()}</span>{" "}
            명 입니다.
          </span>
        </div>
      </MessageBox>
    </Container>
  );
}
const Container = styled.div`
  margin: 8px 20px;
`;
const BackButton = styled.div`
  ${backButtonBox}
  margin-bottom:12px;
`;
const MessageBox = styled.div`
  .title {
    font-family: "Pretendard-SemiBold";
    font-size: 21px;
    line-height: 33px;
    color: var(--Title_01);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .notice {
    font-family: "Pretendard-Regular";
    font-size: 14px;
    line-height: 22px;
    color: var(--Body_01);

    display: flex;
    align-items: flex-start;
  }
  .noticeBold {
    font-family: "Pretendard-Medium";
    font-size: 16px;
    line-height: 25px;
    color: var(--Title_02);
  }
`;

export default AddMilitarySavings;
