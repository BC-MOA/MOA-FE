import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { styleTitle, styleSubTitle, styleNotice } from "style/common";
import { useLocation } from "react-router-dom";
import BackHeader from "components/common/BackHeader";
import SliderInput from "../SliderInput";
import CustomInput from "components/common/CustomInput";
import CustomBtn from "../../addGoal/CustomBtn";
import { accountList } from "components/common/dummyData";
import { v1 as uuid } from "uuid";
import { UserAccount } from "store/UserAccount";

const Container = styled.div`
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

function SafeBox() {
  const avgSafeAmount = 200000;
  const { inout } = useContext(UserAccount).userAccount;
  const { state } = useLocation();

  const [safeInputs, setSafeInputs] = useState({
    id: uuid(),
    savingMode: "비상금",
    goalName: "비상금 모으기",
    category: "",
    currentAmount: 0,
    goalAmount: 0,
    account: {
      bankName: inout[0].bankName,
      productName: "",
      accountNumber: inout[0].accountNumber,
      accountCurrentAmount: inout[0].currentAmount,
      bankImageUrl: inout[0].bankImageUrl,
    },
    sDate: "",
    eDate: "",
    depositMethod: "",
    limitCycle: "",
    amountPerCycle: 0,
    transactions: [],
  });

  const [amount, setAmount] = useState(0);
  useEffect(() => {
    setSafeInputs({
      ...safeInputs,
      currentAmount: amount,
    });
  }, [amount]);

  useEffect(() => {
    if (state) {
      setAmount(Number(state));
    }
  }, [state]);

  return (
    <Container>
      <BackHeader path={"/gather"} />
      <Content>
        <div className="Title">비상금 만들기</div>
        <div className="Text">
          다른 장병들은 비상금으로 평균
          <span className="l_space green">{avgSafeAmount} 원</span>을 모아요.
        </div>
        <InputEl>
          <div className="SubTitle">보관금액</div>
          <SliderInput amount={amount} setAmount={setAmount} />
        </InputEl>
        <InputEl>
          <div className="SubTitle">출금계좌</div>
          <CustomInput disabled={true} value={inout[0].accountName} />
        </InputEl>
      </Content>
      <CustomBtn
        path={"complete"}
        data={{ props: safeInputs, name: "비상금" }}
        active={
          safeInputs.account.bankName !== "" && safeInputs.currentAmount !== 0
        }
      >
        비상금 만들기 완료
      </CustomBtn>
    </Container>
  );
}

export default SafeBox;
