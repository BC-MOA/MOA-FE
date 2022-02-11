import Dropdown from "components/common/Dropdown";
import React from "react";
import styled from "styled-components";

function MilitaryFreeSavingForm({
  userMonthOptions,
  savingType,
  formData,
  setFormData,
  userAccountList,
}) {
  return (
    <FreeSavingForm className={savingType === "자유입금" ? "isSelect" : ""}>
      <div className="message">
        <span className="bold">자동이체</span>
        <span>하시면, </span>
        <span className="bold">우대 금리</span>
        <span>를 받을 수 있습니다</span>
      </div>
      <div className="marginBox">
        <div className="title">기간</div>
        <Dropdown
          valueName={"formDataMonth"}
          setValue={setFormData}
          suffix={"개월"}
          selectValue={formData.formDataMonth}
          placeHolder={"적금하실 기간을 선택해주세요"}
          options={userMonthOptions}
        />
      </div>

      <div className="title">출금계좌</div>
      {/* todo 유저에서 계좌 정보 불러와서 넣기*/}
      <div className="fixData">{userAccountList[0]}</div>
    </FreeSavingForm>
  );
}
const FreeSavingForm = styled.div`
  display: none;
  &.isSelect {
    display: block;
  }
  .marginBox {
    margin-bottom: 24px;
  }
  .fixData {
    font-family: "Pretendard-Regular";
    font-size: 16px;
    line-height: 25px;
    padding: 10px 0 10px 16px;
    background: #ffffff;
    border-radius: 8px;
    color: var(Title_01);
    text-align: start;
  }
`;

export default MilitaryFreeSavingForm;
