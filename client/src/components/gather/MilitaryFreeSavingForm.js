import Dropdown from "components/common/Dropdown";
import React from "react";
import styled from "styled-components";

function MilitaryFreeSavingForm({
  userMonthOptions,
  savingType,
  item,
  formData,
  setFormData,
  userAccountList,
}) {
  return (
    <FreeSavingForm className={savingType === "자유입금" ? "isSelect" : ""}>
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
      <div className="title">출금계좌</div>
      <Dropdown
        valueName={"formDataAccount"}
        setValue={setFormData}
        selectValue={formData.formDataAccount}
        options={userAccountList}
      ></Dropdown>
    </FreeSavingForm>
  );
}
const FreeSavingForm = styled.div`
  display: none;
  &.isSelect {
    display: block;
  }
`;

export default MilitaryFreeSavingForm;
