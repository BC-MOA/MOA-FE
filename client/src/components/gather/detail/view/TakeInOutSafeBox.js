import React, { useState, useContext } from "react";
import styled from "styled-components";
import { styleTitle, styleSubTitle, styleNotice } from "style/common";
import { useLocation } from "react-router-dom";
import BackHeader from "components/common/BackHeader";
import SliderInput from "components/gather/safebox/SliderInput";
import CustomInput from "components/common/CustomInput";
import CustomBtn from "components/gather/addGoal/CustomBtn";
import KeypadModal from "components/gather/safebox/KeypadModal";
import { UserAccount } from "store/UserAccount";

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
  const { inout, interlock } = useContext(UserAccount).userAccount;
  const { state } = useLocation();
  const { props, usage } = state;

  const [safeInputs, setSafeInputs] = useState({
    ...props,
    account: {
      bankName: inout[0].bankName,
      productName: "",
      accountNumber: inout[0].accountNumber,
      accountCurrentAmount: inout[0].currentAmount,
      bankImageUrl: inout[0].bankImageUrl,
    },
  });

  const [amount, setAmount] = useState(0);

  return (
    <Container>
      <BackHeader path={"/gather"} />
      <Content>
        <div className="Title">
          {usage === "takeIn" ? "????????? ?????????" : "????????? ?????????"}
        </div>
        <InputEl>
          <div className="SubTitle">
            {usage === "takeIn" ? "????????????" : "????????????"}
          </div>
          <SliderInput
            amount={amount}
            setAmount={setAmount}
            usage={"additional"}
            setModal={setModal}
          />
        </InputEl>
        <InputEl>
          <div className="SubTitle">
            {usage === "takeIn" ? "????????????" : "????????????"}
          </div>
          <CustomInput
            disabled={true}
            value={
              usage === "takeIn"
                ? inout[0].accountName
                : interlock[0].accountName
            }
          />
        </InputEl>
      </Content>
      {usage === "takeIn" ? (
        <CustomBtn
          path={"complete"}
          data={{ props: safeInputs, inOutMoney: amount }}
          active={safeInputs.account.bankName !== "" && amount !== 0}
        >
          ?????????
        </CustomBtn>
      ) : (
        <CustomBtn
          active={safeInputs.account.bankName !== "" && amount !== 0}
          path={"check-password"}
          data={{ props: safeInputs, inOutMoney: -amount }}
        >
          ?????????
        </CustomBtn>
      )}
      {modal ? (
        <KeypadModal
          amount={amount}
          setAmount={setAmount}
          setModal={setModal}
        />
      ) : (
        <></>
      )}
    </Container>
  );
}

export default TakeInOutSafeBox;
