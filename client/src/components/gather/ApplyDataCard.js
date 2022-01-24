import React, { Fragment } from "react";
import styled from "styled-components";

function ApplyDataCard({ formData }) {
  // todo - formData 데이터의 값으로 표시할것
  // 적금 이름 / 기간 / 자동이체일 / 금액 / 출금계좌
  return (
    <ApplyDataCardStyle>
      <div className="cardItem">
        <span>군적금 이름</span>
        <span className="bold">적금</span>
      </div>
      <div className="cardItem">
        <span>기간</span>
        <div>
          <span className="bold">12</span>
          <span className="bold roboto">개월</span>
        </div>
      </div>
      {/* 자유입금일떄는? */}
      {"자동이체" === formData.savingType && (
        <>
          <div className="cardItem">
            <span>자동이체</span>
            <div>
              <span className="bold">매월 </span>
              <span className="bold roboto">10</span>
              <span className="bold">일</span>
            </div>
          </div>
          <div className="cardItem">
            <span>금액</span>
            <div>
              <span className="bold green roboto">2000</span>
              <span></span> <span className="bold green">원</span>
            </div>
          </div>
        </>
      )}
      <div className="cardItem">
        <span>출금계좌</span>
        <span className="bold">통장</span>
      </div>
    </ApplyDataCardStyle>
  );
}
const ApplyDataCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 24px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  line-height: 22px;
  color: var(--Body_01);
  .cardItem {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .bold {
      font-family: "Pretendard-Medium";
      color: var(--Title_02);
      &.roboto {
        font-family: "Roboto";
        font-weight: 500;
      }
      &.green {
        color: var(--a2);
      }
    }
  }
`;
export default ApplyDataCard;
