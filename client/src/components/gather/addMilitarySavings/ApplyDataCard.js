import React from "react";
import styled from "styled-components";

function ApplyDataCard({ applyData }) {
  return (
    <ApplyDataCardStyle>
      <div className="cardItem">
        <span>군적금 이름</span>
        <span className="bold">
          {applyData.savingData.bank.bankName}{" "}
          {applyData.savingData.productName}
        </span>
      </div>
      <div className="cardItem">
        <span>적금방식</span>
        <div>
          <span className="bold">{applyData.formData.savingType}</span>
        </div>
      </div>
      <div className="cardItem">
        <span>기간</span>
        <div>
          <span className="bold">{applyData.formData.formDataMonth}</span>
          <span className="bold roboto">개월</span>
        </div>
      </div>
      {"자동이체" === applyData.formData.savingType && (
        <div className="cardItem">
          <span>월 납입액</span>
          <div>
            <span className="bold green roboto">
              {applyData.formData.formDataAmount}
            </span>
            <span></span> <span className="bold green">원</span>
          </div>
        </div>
      )}
      {"자유입금" === applyData.formData.savingType && (
        <div className="cardItem">
          <span>출금계좌</span>
          <span className="bold">{applyData.formData.formDataAccount}</span>
        </div>
      )}
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
