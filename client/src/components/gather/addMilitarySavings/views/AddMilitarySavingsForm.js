import BackHeader from "components/common/BackHeader";
import Container from "components/common/Container";
import ScrollBox from "components/common/ScrollBox";
import SubmitButton from "components/common/SubmitButton";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserAccount } from "store/UserAccount";
import styled from "styled-components";
import MilitaryFormBox from "../MilitaryFormBox";
const controlNameList = ["자동이체", "자유입금"];

function AddMilitarySavingsForm() {
  const { state: savingData } = useLocation();
  const history = useNavigate();
  const { inout: userAccountList } = useContext(UserAccount).userAccount;
  const FreeSavingFormTemp = {
    savingType: controlNameList[1],
    formDataAccount: userAccountList,
    formDataMonth: "",
  };
  const AutoSavingFormTemp = {
    savingType: controlNameList[0],
    formDataAccount: userAccountList,
    limitCycle: "매월 10일",
    formDataMonth: "",
    formDataAmount: "",
  };
  const [formData, setFormData] = useState(AutoSavingFormTemp);
  const [isAvildForm, setIsAvildForm] = useState(true);

  useEffect(() => {
    const test = Object.values(formData).findIndex(
      (data) => data === "" || data === null
    );
    if (test !== -1) {
      setIsAvildForm(false);
    } else {
      setIsAvildForm(true);
    }
  }, [formData]);
  function resetFormData(type) {
    if (type === controlNameList[1]) {
      setFormData(FreeSavingFormTemp);
    } else {
      setFormData(AutoSavingFormTemp);
    }
  }
  return (
    <Container>
      <BackHeader
        path={-1}
        title={`${savingData.bank.bankName} ${savingData.productName}`}
        isScrolled={true}
      ></BackHeader>
      <ScrollBox paddingValue={"16px 0 40px "}>
        <TermPageNum>
          <span className="bold">2</span>
          <span>/</span>
          <span>2</span>
        </TermPageNum>
        <TermPageTitle>정보입력</TermPageTitle>
        <TermPageNotice>
          <span>적금계좌 개설을 위한 </span>
          <span className="highLight">정보</span>
          <span>를 입력합니다.</span>
        </TermPageNotice>
        <MilitaryFormBox
          resetFormData={resetFormData}
          formData={formData}
          savingType={formData.savingType}
          controlNameList={controlNameList}
          setFormData={setFormData}
          savingData={savingData}
        />
      </ScrollBox>
      <SubmitButton
        title={"신청 완료"}
        onClickFunc={() => {
          history("passward", { state: { savingData, formData } });
        }}
        isActive={isAvildForm}
      ></SubmitButton>
    </Container>
  );
}
const TermPageNum = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: var(--Body_02);
  margin-bottom: 4px;
  .bold {
    font-weight: 500;
    color: var(--Title_02);
  }
`;
const TermPageTitle = styled.div`
  font-family: "Pretendard-SemiBold";
  font-weight: 600;
  font-size: 21px;
  line-height: 33px;
  color: var(--Title_01);
  text-align: start;
  margin-bottom: 4px;
`;
const TermPageNotice = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 14px;
  line-height: 22px;
  color: var(--Body_01);
  text-align: start;
  margin-bottom: 28px;

  .highLight {
    color: var(--a2);
  }
`;

export default AddMilitarySavingsForm;
