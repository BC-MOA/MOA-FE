import styled from "styled-components";
import AccountCard from "components/profile/comp/AccountCard";

const StyledInput = styled.input`
  width: 90%;
  height: 45px;

  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-size: 16px;
  padding: 0 5%;

  border: none;
  border-radius: 8px;

  margin-bottom: 5px;
`;

const StyledP = styled.p`
  text-align: left;
  font-size: 14px;
  margin: 5px 0 50px;
`;

const AccountGoal = (ins_list, reg) => {
  let insList = [];

  for (let i = 0; i < ins_list.length; i++) {
    const obj = ins_list[i];

    insList.push(
      <div key={obj.id}>
        <AccountCard obj={obj}></AccountCard>
        <StyledInput
          {...reg(`${obj.id}`, { required: true })}
          type={"text"}
          placeholder="목표를 입력해주세요"
        ></StyledInput>
        <StyledP>예) 1000만원 모으기, 해외여행 가기, 학비로 사용하기</StyledP>
      </div>
    );
  }

  return insList;
};

export default AccountGoal;
