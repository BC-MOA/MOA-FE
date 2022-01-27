import Dropdown from "components/common/Dropdown";
import React from "react";
import styled from "styled-components";
function MilitaryAutoSavingForm({
  userMonthOptions,
  savingType,
  item,
  formData,
  setFormData,
}) {
  // todo - 예상원금 / 이자 계산해서 표시
  const expectAmount = 0;
  const expectInterest = 916800;

  return (
    <AutoSavingForm className={savingType === "자동이체" ? "isSelect" : ""}>
      <div className="message">
        <span className="bold">자동이체</span>
        <span>하시면, </span>
        <span className="bold">국군재정단</span>
        <span>이 적금 통장에 </span>
        <span className="bold">매달 이체</span>
        <span>를 해주고 </span>
        <span className="bold">차액</span>
        <span>은</span>
        <span className="bold">월급</span>
        <span>으로 </span>
        <span className="bold">입금</span>
        <span>됩니다.</span>
      </div>
      <div className="marginBox">
        <div className="title">기간</div>
        <Dropdown
          valueName={"formDataMonth"}
          setValue={setFormData}
          selectValue={formData.formDataMonth}
          placeHolder={"적금하실 기간을 선택해주세요"}
          options={userMonthOptions}
        />
      </div>
      <div className="title">월 납입액</div>
      <div className="inputBox">
        <input
          onChange={(e) => {
            setFormData((preData) => ({
              ...preData,
              formDataAmount: e.target.value,
            }));
          }}
          placeholder="월 납입액을 입력해주세요"
          type="text"
        />
        <span className="unit">{formData.formDataAmount ? "원" : " "}</span>
      </div>
      {/* todo 적금 상품 별 최소 금액 표시 */}
      <div className="message">
        <span className="bold roboto">1</span>
        <span>만원부터 </span>
        <span className="bold roboto">20</span>
        <span>만원까지 납입할 수 있습니다</span>
      </div>
      {/* todo 예상원금 및 이자 표시  */}
      <div className="interestBox">
        <div className="boxItem">
          <span className="title">만기예상원금</span>
          <span className="boxNum">
            <span
              className={
                expectAmount === 0 ? "green roboto empty" : "green roboto "
              }
            >
              {expectAmount === 0 ? "-" : expectAmount}
            </span>
            <span> 원</span>
          </span>
        </div>
        <div className="boxItem">
          <span className="title">만기예상이자(모든 지원금 포함)</span>
          <span className="boxNum">
            <span
              className={
                expectInterest === 0 ? "green roboto empty" : "green roboto "
              }
            >
              {expectInterest === 0 ? "-" : expectInterest}
            </span>
            <span> 원</span>
          </span>
        </div>
      </div>
    </AutoSavingForm>
  );
}
const AutoSavingForm = styled.div`
  display: none;
  &.isSelect {
    display: block;
  }
  .marginBox {
    margin-bottom: 24px;
  }
`;
export default MilitaryAutoSavingForm;
