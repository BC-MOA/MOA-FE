import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { styleTitle, styleSubTitle, styleNotice } from "style/common";
import BackHeader from "components/common/BackHeader";
import CustomBtn from "components/gather/CustomBtn";
import CustomSelect from "components/gather/CustomSelect";
import SliderInput from "components/gather/safebox/SliderInput";
import { useLocation } from "react-router-dom";

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
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      setSafeInputs({
        ...safeInputs,
        amount: state,
      });
    }
  }, [state]);

  const avgSafeAmount = 200000;
  const accountList = [
    {
      bank: "KB국민",
      name: "KB 나라사랑통장",
      accountNumber: "123-456-78-910111",
    },
    {
      bank: "NH농협",
      name: "NH 장병내일준비적금",
      accountNumber: "356-0239-21-1208",
    },
    {
      bank: "IBK기업",
      name: "IBK 장병내일준비적금",
      accountNumber: "235-455372-02-011",
    },
    {
      bank: "제주은행",
      name: "제주은행 장병내일준비적금",
      accountNumber: "123-226-78-913511",
    },
  ];

  const [safeInputs, setSafeInputs] = useState({
    amount: 0,
    account: "",
    balance: 0,
  });
  const onChange = (event) => {
    const { name, value } = event.target;
    setSafeInputs({
      ...safeInputs,
      [name]: value,
    });
  };

  return (
    <Container>
      <BackHeader path={-1} />
      <Content>
        <div className="Title">비상금 만들기</div>
        <div className="Text">
          다른 장병들은 비상금으로 평균
          <span className="l_space green">{avgSafeAmount} 원</span>을 모아요.
        </div>
        <InputEl>
          <div className="SubTitle">보관금액</div>
          <SliderInput
            inputs={safeInputs}
            setInputs={setSafeInputs}
            onChange={onChange}
          />
        </InputEl>
        <InputEl>
          <div className="SubTitle">출금계좌</div>
          <CustomSelect
            name="account"
            onChange={onChange}
            accounts={accountList}
          ></CustomSelect>
        </InputEl>
      </Content>
      <CustomBtn
        path={"complete"}
        data={{ inputs: safeInputs, name: "비상금" }}
        active={!Object.values(safeInputs).filter((x) => x === "").length}
      >
        비상금 만들기 완료
      </CustomBtn>
    </Container>
  );
}

export default SafeBox;
