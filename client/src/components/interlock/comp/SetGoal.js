import styled from "styled-components";
import { useForm } from "react-hook-form";
import SubmitButton from "components/common/SubmitButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountGoal from "./AccountGoal";

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

//다음에 하기 버튼
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

//입력값 체크를 위한 id 가져오기
const idListGetter = (ins_list) => {
  let idList = [];

  for (const obj of ins_list) {
    idList.push(obj.key);
  }

  return idList;
};

const SetGoal = ({ name, ins_list }) => {
  //react-hook-form
  const { register, handleSubmit, getValues, setValue } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const navigate = useNavigate();

  //valid check용 state
  const [valid, setValid] = useState(false);

  //onChange
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

  //onClick-submit
  const onclick = (data) => {
    //api 호출
    //home으로 navigatge
    //열쇠 적용
    navigate("/home");
    console.log(data);
  };

  //컴포넌트 리스트 생성
  const result = AccountGoal(ins_list, register);

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
