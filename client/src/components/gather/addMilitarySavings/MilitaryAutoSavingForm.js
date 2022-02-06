import Dropdown from "components/common/Dropdown";
import moment from "moment";
import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";
function MilitaryAutoSavingForm({
  userMonthOptions,
  savingType,
  savingData,
  formData,
  setFormData,
}) {
  // todo - 예상원금 / 이자 계산해서 표시
  const [expectAmount, setExpectAmount] = useState(0);
  const [expectInterest, setExpectInterest] = useState(0);
  const [endDay, setEndDay] = useState("");
  useEffect(() => {
    const exAmount =
      Number(formData.formDataAmount) * Number(formData.formDataMonth);
    const exInterest = exAmount * (33 + savingData.highestInterest);
    setExpectAmount(exAmount);
    setExpectInterest(exInterest);
  }, [formData.formDataMonth, formData.formDataAmount]);

  useEffect(() => {
    const now = moment();
    const end = now.add(formData.formDataMonth, "months");
    setEndDay(end.format("YYYY.MM.DD"));
  }, [formData.formDataMonth]);
  function funcCheckIsNumInput(value) {
    if (Number(value)) {
      setFormData((preData) => ({
        ...preData,
        formDataAmount: value,
      }));
    } else {
      setFormData((preData) => ({
        ...preData,
        formDataAmount: "",
      }));
    }
  }
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
        <span>은 </span>
        <span className="bold">월급</span>
        <span>으로 </span>
        <span className="bold">입금</span>
        <span>됩니다.</span>
      </div>
      <div className="marginBox">
        <div className="title">
          <span>기간</span>
          <span className="green">만기일자:{endDay}</span>
        </div>
        <Dropdown
          valueName={"formDataMonth"}
          setValue={setFormData}
          suffix={"개월"}
          selectValue={formData.formDataMonth}
          placeHolder={"적금하실 기간을 선택해주세요"}
          options={userMonthOptions}
        />
      </div>
      <div className="title">월 납입액</div>
      <div className="inputBox">
        <input
          onChange={(e) => {
            funcCheckIsNumInput(e.target.value);
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
                0 === expectAmount ? "green roboto empty" : "green roboto "
              }
            >
              {0 === expectAmount ? "-" : expectAmount.toLocaleString()}
            </span>
            <span> 원</span>
          </span>
        </div>
        <div className="boxItem">
          <span className="title">만기예상이자(모든 지원금 포함)</span>
          <span className="boxNum">
            <span
              className={
                0 === expectInterest ? "green roboto empty" : "green roboto "
              }
            >
              {0 === expectInterest
                ? "-"
                : Number(expectInterest.toFixed(0)).toLocaleString()}
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
