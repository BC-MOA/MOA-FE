import styled from "styled-components";
import { useForm } from "react-hook-form";
import SubmitButton from "components/common/SubmitButton";
import AccountCard from "components/profile/comp/AccountCard";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Box = styled.div`
  font-family: "Pretendard-Regular";

  height: calc(100vh-100px);

  .text {
    font-weight: 600;
    font-size: 21px;

    text-align: left;
    margin: 25px 0;
  }

  form {
    height: 80vh;

    display: flex;
    flex-direction: column;

    .button {
      margin-top: auto;
    }
  }
`;

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

const HeaderButton = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    color: var(--Body_02);

    border: none;
    background-color: var(--surface);
    font-family: "Pretendard-Regular";
    font-size: 14px;
  }
`;

const GoalSetter = (ins_list, reg) => {
  let insList = [];

  for (let i = 0; i < ins_list.length; i++) {
    const obj = ins_list[i];

    insList.push(
      <div key={obj.key}>
        <AccountCard obj={obj}></AccountCard>
        <StyledInput
          {...reg(`${obj.key}`)}
          type={"text"}
          placeholder="목표를 입력해주세요"
        ></StyledInput>
        <StyledP>예) 1000만원 모으기, 해외여행 가기, 학비로 사용하기</StyledP>
      </div>
    );
  }

  return insList;
};

const idListGetter = (ins_list) => {
  let idList = [];

  for (const obj of ins_list) {
    idList.push(obj.key);
  }

  return idList;
};

const SetGoal = ({ name, ins_list }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });

  //컴포넌트 리스트 생성
  const result = GoalSetter(ins_list, register);

  //valid check
  const [valid, setValid] = useState(false);

  const onchange = () => {
    const id_list = idListGetter(ins_list);
    const val_list = [];

    id_list.map((id) => {
      if (getValues(id) != "") {
        const bytes = new Blob([getValues(id)]).size;
        if (bytes > 40) {
          const str_val = String(getValues(id));
          setValue(id, str_val.slice(0, -1));
        }
        val_list.push(id);
      }
    });

    id_list.length == val_list.length ? setValid(true) : setValid(false);
  };

  const navigate = useNavigate();

  const onclick = (data) => {
    //api 호출
    //home으로 navigatge
    navigate("/home");
    console.log(data);
  };

  return (
    <Box>
      <HeaderButton>
        <button onClick={() => navigate("/home")}>다음에하기</button>
      </HeaderButton>
      <div className="text">
        {name}님!<br></br>
        군적금을 통해 무엇을 하고 싶나요?
      </div>
      <form onChange={onchange} onSubmit={handleSubmit(onclick)}>
        {result}
        <div className="button">
          <SubmitButton
            type="submit"
            title={"목표설정 완료"}
            isActive={valid}
          ></SubmitButton>
        </div>
      </form>
    </Box>
  );
};

export default SetGoal;
