import React, { useState, createContext } from "react";
import styled, { css } from "styled-components";
import { styleTitle, styleSubTitle, styleNotice } from "style/common";
import Category from "./Category";
import DatePick from "components/gather/DatePick";
import SelectBox from "./SelectBox";

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
  .Notice {
    /* flex안하면 span이랑 div 글자 높낮이 차이가 이상하게 남..... */
    display: flex;
    ${styleNotice}
    padding: 8px 0 0 4px;
  }
  .Empasis {
    ${styleNotice}
    color: var(--Title_02);
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

  &::placeholder {
    color: #c5c5c5;
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
  account: "",
});

function Goal() {
  const avgCnt = 2;

  const [inputs, setInputs] = useState({
    category: "여행",
    name: "",
    deadline: "",
    depositMethod: "자동이체",
    howOften: "매월 10일",
    amount: "",
    account: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <GoalContext.Provider value={{ inputs, setInputs }}>
      <Container>
        <div className="Title">목표 세우기</div>
        <div>
          다른 장병들은 <span>평균 {avgCnt}개</span>의 목표를 세웠어요.
        </div>
        <Category />
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
            <span className="Empasis">1</span> 개월 후의 날짜부터 선택이
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
            <span className="Empasis">자동이체</span> 하시면, 더 많은{" "}
            <span className="Empasis">리워드</span>를 받을 수 있어요!
          </div>
          {inputs.depositMethod === "자동이체" && (
            <SubSelectBox>
              <SelectBox>
                <div className="howOften">매월 10일</div>
                <div className="howOften">매주 월요일</div>
                <div className="howOften">매일</div>
              </SelectBox>
            </SubSelectBox>
          )}
        </InputEl>
      </Container>
    </GoalContext.Provider>
  );
}

export default Goal;
