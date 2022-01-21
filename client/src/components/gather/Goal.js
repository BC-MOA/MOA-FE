import React, { useState, createContext, useEffect } from "react";
import styled, { css } from "styled-components";
import { styleTitle, styleSubTitle, styleNotice } from "style/common";
import Category from "./Category";
import DatePick from "./DatePick";
import SelectBox from "./SelectBox";
import CustomBtn from "./CustomBtn";
import { calcAmount } from "./utils";
import CustomSelect from "./CustomSelect";
import BackHeader from "components/common/BackHeader";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px 20px 0;
  box-sizing: border-box;
  text-align: left;
  position: relative;

  .Title {
    ${styleTitle}
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

// contextAPI 사용
export const GoalContext = createContext({
  category: "",
  name: "",
  deadline: "",
  isAuto: "",
  howOften: "",
  amount: "",
  targetAmount: "",
  account: "",
});

function Goal() {
  const avgCnt = 2;
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

  const [inputs, setInputs] = useState({
    category: "여행",
    name: "",
    deadline: "",
    depositMethod: "자동이체",
    howOften: "매월 10일",
    amount: "",
    targetAmount: "",
    account: "",
  });

  useEffect(() => {
    console.log("effect!");

    if (
      inputs.deadline !== "" &&
      inputs.depositMethod === "자동이체" &&
      inputs.amount !== ""
    ) {
      setInputs({
        ...inputs,
        targetAmount: calcAmount(inputs),
      });
    }
  }, [inputs.howOften, inputs.deadline]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <GoalContext.Provider value={{ inputs, setInputs }}>
      <BackHeader path={-1} />
      <Container>
        <div className="Title">목표 세우기</div>
        <div className="Text">
          다른 장병들은 <span className="l_space">평균 {avgCnt}개</span>의
          목표를 세웠어요.
        </div>
        <InputEl>
          <Category />
        </InputEl>
        <GoalName>
          <div className="SubTitle">목표 이름</div>
          <CustomInput
            name="name"
            placeholder="목표 이름을 입력해주세요"
            onChange={onChange}
            value={inputs.name}
          />
          <div className="Notice">예) 폰바꾸기</div>
        </GoalName>
        <InputEl>
          <div className="SubTitle">언제까지</div>
          <DatePick />
          <div className="Notice">
            <span className="Empasis">1</span>개월 후의 날짜부터 선택이
            가능합니다.
          </div>
        </InputEl>
        <InputEl>
          <div className="SubTitle">얼마마다</div>
          <SelectBox>
            <div className="depositMethod">자동이체</div>
            <div className="depositMethod">넣고 싶을 때마다</div>
          </SelectBox>
          <div className="Notice">
            <span className="Empasis r_space">자동이체</span> 하시면, 더 많은
            <span className="Empasis l_space">리워드</span>를 받을 수 있어요!
          </div>
          {inputs.depositMethod === "자동이체" && (
            <>
              <SubSelectBox>
                <SelectBox>
                  <div className="howOften">매월 10일</div>
                  <div className="howOften">매주 월요일</div>
                  <div className="howOften">매일</div>
                </SelectBox>
              </SubSelectBox>
              <InputEl>
                <div className="SubTitle">얼마씩 넣어서</div>
                <CustomInput
                  name="amount"
                  placeholder="정기적으로 넣을 금액을 입력해주세요."
                  onChange={onChange}
                  onBlur={() => {
                    setInputs({
                      ...inputs,
                      targetAmount:
                        inputs.deadline !== "" ? calcAmount(inputs) : "",
                    });
                  }}
                  value={inputs.amount}
                />
              </InputEl>
            </>
          )}
        </InputEl>

        <InputEl>
          <div className="SubTitle">이만큼을 모으겠다</div>
          <CustomInput
            placeholder="모을 금액을 입력해주세요."
            disabled={inputs.depositMethod === "자동이체"}
            value={Number(inputs.targetAmount).toLocaleString()}
          />
          <div className="Notice">
            최소 <span className="Empasis l_space">10 만원</span>부터 모을 수
            있어요.
          </div>
        </InputEl>
        <InputEl>
          <div className="SubTitle">자동이체 출금계좌</div>
          <CustomSelect
            name="account"
            onChange={onChange}
            accounts={accountList}
          ></CustomSelect>
        </InputEl>
        <CustomBtn
          active={!Object.values(inputs).filter((x) => x === "").length}
        >
          목표 세우기 완료
        </CustomBtn>
        {/* <button onClick={() => console.log(inputs)}>버튼</button> */}
      </Container>
    </GoalContext.Provider>
  );
}

export default Goal;
