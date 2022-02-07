import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { styleTitle, styleSubTitle, styleNotice } from "style/common";
import { useLocation } from "react-router-dom";
import BackHeader from "components/common/BackHeader";
import SliderInput from "components/gather/safebox/SliderInput";
import CustomSelect from "components/gather/addGoal/CustomSelect";
import CustomBtn from "components/gather/addGoal/CustomBtn";
import KeypadModal from "components/gather/safebox/KeypadModal";
import { accountList } from "components/common/dummyData";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;

  .Title {
    ${styleTitle}
    margin-top: 12px;
  }
  .SubTitle {
    ${styleSubTitle}
    padding: 0 0 4px 4px;
  }
  .Text {
    ${styleSubTitle}
    font-family: "Pretendard-Regular";
    color: var(--Body_01);
    display: flex;
    padding-top: 4px;
  }
  .Notice {
    display: flex;
    ${styleNotice}
    padding: 8px 0 0 4px;
  }
  .Empasis {
    ${styleNotice}
    color: var(--Title_02);
  }

  .l_space {
    margin-left: 4px;
  }
  .r_space {
    margin-right: 4px;
  }
  .green {
    color: var(--a2);
  }
`;

const Content = styled.div`
  padding-bottom: 10px;
  flex: 1;
`;

const InputEl = styled.div`
  margin-top: 24px;
`;

function TakeInOutSafeBox() {
  const [modal, setModal] = useState(false);
  const { state } = useLocation();
  const { gatherInfo, usage } = state;

  const [bankInfo, setBankInfo] = useState({
    bankName: "",
    productName: "",
    accountNumber: "",
    accountCurrentAmount: 0,
    bankImageUrl: "",
  });
  const [safeInputs, setSafeInputs] = useState({
    ...gatherInfo,
    amountPerCycle: 0,
    account: bankInfo,
  });

  useEffect(() => {
    setSafeInputs({
      ...safeInputs,
      account: bankInfo,
    });
  }, [bankInfo.bankName]);

  const onChange = (event) => {
    const { name, value } = event.target;
    const selected = accountList.find((x) => x.bankName === value);

    setBankInfo({
      [name]: value,
      productName: selected.accountName,
      accountNumber: selected.accountNumber,
      accountCurrentAmount: selected.currentAmount,
      bankImageUrl: selected.bankImageUrl,
    });
  };

  return (
    <Container>
      <BackHeader path={"/gather"} />
      <Content>
        <div className="Title">
          {usage === "takeIn" ? "비상금 모으기" : "비상금 꺼내기"}
        </div>
        <InputEl>
          <div className="SubTitle">
            {usage === "takeIn" ? "보관금액" : "꺼낼금액"}
          </div>
          <SliderInput
            inputs={safeInputs}
            setInputs={setSafeInputs}
            usage={"additional"}
            setModal={setModal}
          />
        </InputEl>
        <InputEl>
          <div className="SubTitle">
            {usage === "takeIn" ? "출금계좌" : "입금계좌"}
          </div>
          <CustomSelect
            name="bankName"
            onChange={onChange}
            accounts={accountList}
            selected={safeInputs.account.bankName}
          ></CustomSelect>
        </InputEl>
      </Content>
      {usage === "takeIn" ? (
        <CustomBtn
          path={"complete"}
          data={{ props: safeInputs, inOutMoney: safeInputs.amountPerCycle }}
          active={
            safeInputs.account.bankName !== "" &&
            safeInputs.amountPerCycle !== 0
          }
        >
          모으기
        </CustomBtn>
      ) : (
        <CustomBtn
          active={
            safeInputs.account.bankName !== "" &&
            safeInputs.amountPerCycle !== 0
          }
          path={"check-password"}
          data={{ props: safeInputs, inOutMoney: -safeInputs.amountPerCycle }}
        >
          꺼내기
        </CustomBtn>
      )}
      {modal ? (
        <KeypadModal
          inputs={safeInputs}
          setInputs={setSafeInputs}
          setModal={setModal}
        />
      ) : (
        <></>
      )}
    </Container>
  );
}

export default TakeInOutSafeBox;
