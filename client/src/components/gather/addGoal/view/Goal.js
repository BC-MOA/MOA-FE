import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { styleTitle, styleSubTitle, styleNotice } from "style/common";
import Category from "components/gather/addGoal/Category";
import SelectBox from "components/gather/addGoal/SelectBox";
import CustomBtn from "components/gather/addGoal/CustomBtn";
import { calcAmount } from "components/gather/addGoal/utils";
import BackHeader from "components/common/BackHeader";
import { hideScrollBar } from "style/common";
import DatePick from "../DatePick";
import { v1 as uuid } from "uuid";
import { UserAccount } from "store/UserAccount";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
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

    span {
      color: var(--a2);
    }
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
`;

const Content = styled.div`
  ${hideScrollBar}
  padding-bottom: 10px;
`;

const InputEl = styled.div`
  margin-top: 24px;
`;

const GoalName = styled.div`
  margin-top: 24px;
`;

const CustomInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  border-radius: 8px;
  border: none;
  padding: 10px 16px;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  line-height: 25px;
  color: var(--Title_01);

  &::placeholder {
    color: #c5c5c5;
  }
  &:disabled {
    background-color: #ebebeb;
  }
`;

const SubSelectBox = styled.div`
  margin-top: 16px;
`;

function Goal() {
  const avgCnt = 2;
  const { inout } = useContext(UserAccount).userAccount;
  console.log(inout[0]);
  const [inputs, setInputs] = useState({
    id: uuid(),
    savingMode: "목표",
    goalName: "",
    category: "여행",
    currentAmount: 0,
    goalAmount: 0,
    account: {
      bankName: inout[0].bankName,
      productName: "",
      accountNumber: inout[0].accountNumber,
      accountCurrentAmount: inout[0].currentAmount,
      bankImageUrl: inout[0].bankImageUrl,
    },
    sDate: new Date(),
    eDate: "",
    depositMethod: "자동이체",
    limitCycle: "매월 10일",
    amountPerCycle: 0,
    transactions: [],
  });

  useEffect(() => {
    if (
      inputs.eDate !== "" &&
      inputs.depositMethod === "자동이체" &&
      inputs.amountPerCycle !== ""
    ) {
      setInputs({
        ...inputs,
        goalAmount: calcAmount(inputs),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs.limitCycle, inputs.eDate]);

  useEffect(() => {
    if (inputs.depositMethod === "자동이체") {
      setInputs({
        ...inputs,
        depositMethod: "자동이체",
        limitCycle: "매월 10일",
        amountPerCycle: 0,
        goalAmount: 0,
      });
    } else {
      setInputs({
        ...inputs,
        depositMethod: "자유입금",
        limitCycle: "",
        amountPerCycle: 0,
        goalAmount: 0,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs.depositMethod]);

  const onChange = (event) => {
    const { name, value } = event.target;

    setInputs({
      ...inputs,
      [name]: ["amountPerCycle", "goalAmount"].includes(name)
        ? Number(value)
        : value,
    });
  };

  const isActive = (method) => {
    if (method === "자동이체") {
      return !Object.keys(inputs).filter(
        (x) => x !== "currentAmount" && ["", 0].includes(inputs[x])
      ).length;
    } else {
      return !Object.keys(inputs).filter(
        (x) =>
          !["amountPerCycle", "limitCycle", "currentAmount"].includes(x) &&
          ["", 0].includes(inputs[x])
      ).length;
    }
  };

  return (
    <Container>
      <BackHeader path={-1} />
      <Content>
        <div className="Title">목표 세우기</div>
        <div className="Text">
          다른 장병들은 <span className="l_space">평균 {avgCnt}개</span>의
          목표를 세웠어요.
        </div>
        <InputEl>
          <div className="SubTitle">목표 종류</div>
          <Category inputs={inputs} setInputs={setInputs} />
        </InputEl>
        <GoalName>
          <div className="SubTitle">목표 이름</div>
          <CustomInput
            name="goalName"
            placeholder="목표 이름을 입력해주세요"
            onChange={onChange}
            value={inputs.goalName}
          />
          <div className="Notice">예) 폰바꾸기</div>
        </GoalName>
        <InputEl>
          <div className="SubTitle">목표 날짜</div>
          <DatePick inputs={inputs} setInputs={setInputs} />
          <div className="Notice">
            <span className="Empasis">1</span>개월 후의 날짜부터 선택이
            가능합니다.
          </div>
        </InputEl>
        <InputEl>
          <div className="SubTitle">이제 방식</div>
          <SelectBox name="depositMethod" inputs={inputs} setInputs={setInputs}>
            <div>자동이체</div>
            <div>자유입금</div>
          </SelectBox>
          <div className="Notice">
            <span className="Empasis r_space">자동이체</span> 하시면, 더 많은
            <span className="Empasis l_space">리워드</span>를 받을 수 있어요!
          </div>
          {inputs.depositMethod === "자동이체" && (
            <>
              <SubSelectBox>
                <SelectBox
                  name="limitCycle"
                  inputs={inputs}
                  setInputs={setInputs}
                >
                  <div>매월 10일</div>
                  <div>매주 월요일</div>
                  <div>매일</div>
                </SelectBox>
              </SubSelectBox>
              <InputEl>
                <div className="SubTitle">납입액</div>
                <CustomInput
                  type="number"
                  name="amountPerCycle"
                  placeholder="정기적으로 넣을 금액을 입력해주세요."
                  onChange={onChange}
                  onBlur={() => {
                    setInputs({
                      ...inputs,
                      goalAmount: inputs.eDate !== "" ? calcAmount(inputs) : 0,
                    });
                  }}
                  value={
                    inputs.amountPerCycle === 0 ? "" : inputs.amountPerCycle
                  }
                />
              </InputEl>
            </>
          )}
        </InputEl>
        <InputEl>
          <div className="SubTitle">목표 금액</div>
          <CustomInput
            type="number"
            placeholder="모을 금액을 입력해주세요."
            disabled={inputs.depositMethod === "자동이체"}
            value={inputs.goalAmount === 0 ? "" : inputs.goalAmount}
            onChange={onChange}
            name="goalAmount"
          />
          <div className="Notice">
            최소 <span className="Empasis l_space">10 만원</span>부터 모을 수
            있어요.
          </div>
        </InputEl>
        <InputEl>
          <div className="SubTitle">출금계좌</div>
          <CustomInput disabled={true} value={inout[0].accountName} />
        </InputEl>
      </Content>

      <CustomBtn
        path={"complete"}
        data={{ props: inputs, name: "목표" }}
        active={isActive(inputs.depositMethod)}
      >
        목표 세우기 완료
      </CustomBtn>
    </Container>
  );
}

export default Goal;
