import React from "react";
import styled from "styled-components";

function ApplyDataCard() {
  return (
    <ApplyDataCardStyle>
      <div className="cardItem">
        <span>계좌명</span>
        <span className="bold">{"모아(MOA)입출금통장"}</span>
      </div>
      <div className="cardItem">
        <span>은행</span>
        <div>
          <span className="bold">{"KEB 하나은행"}</span>
        </div>
      </div>
      <div className="cardItem">
        <span>계좌번호</span>
        <div>
          <span className="bold roboto">{"123-456-78-910111"}</span>
        </div>
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
