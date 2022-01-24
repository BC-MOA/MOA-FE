import Dropdown from "components/common/Dropdown";
import React from "react";
import styled from "styled-components";
const userSavingDay = ["1일", "10일", "25일"];
function MilitaryAutoSavingForm({
  userMonthOptions,
  savingType,
  item,
  formData,
  setFormData,
  userAccountList,
}) {
  // todo - 예상원금 / 이자 계산해서 표시
  const expectAmount = 20000;
  const expectInterest = 916800;

  return (
    <AutoSavingForm className={savingType === "자동이체" ? "isSelect" : ""}>
      <div className="message">
        <span className="bold">자동이체</span>
        <span>하시면, </span>
        <span className="bold">최고 금리 </span>
        {/* todo item의 최대금리 값 출력 표시 */}
        <span className="bold roboto">5.2%</span>
        <span> 를 받을 수 있습니다.</span>
      </div>
      <div className="title">기간</div>
      <Dropdown
        valueName={"formDataMonth"}
        setValue={setFormData}
        selectValue={formData.formDataMonth}
        placeHolder={"적금하실 기간을 선택해주세요"}
        options={userMonthOptions}
      />
      {/* todo - 사용자 이름 개월 수 최고금리 표시 */}
      <div className="message">
        <div>
          <span>민수님은 </span>
          <span className="bold roboto">6</span>
          <span className="bold">개월 </span>
          <span>이상부터 </span>
          <span className="bold roboto">14</span>
          <span className="bold">개월</span>
          <span>까지 가입 가능합니다.</span>
        </div>
        <div>
          <span className="bold">12</span>
          <span className="bold">개월 </span>
          <span className="bold">이상</span>
          <span>하시면, </span>
          <span className="bold">최고 금리 </span>
          <span className="bold roboto">5.2%</span>
          <span>를 받을 수 있습니다.</span>
        </div>
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
      <div className="message">
        <span className="bold roboto">1</span>
        <span>만원부터 </span>
        <span className="bold roboto">20</span>
        <span>만원까지 납입할 수 있습니다</span>
      </div>
      <div className="interestBox">
        <div className="boxItem">
          <span className="title">만기예상원금</span>
          <span className="boxNum">
            <span className="green roboto">
              {expectAmount.toLocaleString()}
            </span>
            <span> 원</span>
          </span>
        </div>
        <div className="boxItem">
          <span className="title">만기예상이자(모든 지원금 포함)</span>
          <span className="boxNum">
            <span className="green roboto">
              {expectInterest.toLocaleString()}
            </span>
            <span> 원</span>
          </span>
        </div>
      </div>
      <div className="marginBox">
        <div className="title">자동이체 납입일</div>
        <Dropdown
          valueName={"formDataDay"}
          setValue={setFormData}
          placeHolder={"자동이체하실 납입일을 선택해주세요."}
          selectValue={formData.formDataDay}
          options={userSavingDay}
        ></Dropdown>
      </div>
      <div className="title">자동이체 출금계좌</div>
      <Dropdown
        valueName={"formDataAccount"}
        setValue={setFormData}
        selectValue={formData.formDataAccount}
        options={userAccountList}
      ></Dropdown>
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
