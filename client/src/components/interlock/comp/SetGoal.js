import styled from "styled-components";
import { useForm } from "react-hook-form";
import SubmitButton from "components/common/SubmitButton";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AccountGoal from "./AccountGoal";
import { gatherFormat } from "components/common/dummyData";
import { GatherList } from "store/GatherListContext";
import { UserAccount } from "store/UserAccount";
import { UserData } from "store/User";

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
    idList.push(obj.id);
  }

  return idList;
};

const SetGoal = ({ name, accounts }) => {
  //react-hook-form
  const { register, handleSubmit, getValues, setValue } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const navigate = useNavigate();

  //valid check용 state
  const [valid, setValid] = useState(false);

  //적금 통장 필터링
  const ins_list = accounts.install;

  //id 추출
  const id_list = [...idListGetter(ins_list)];

  //onChange
  const onchange = () => {
    const val_list = [];

    id_list.map((id) => {
      const str_id = id.toString();

      if (getValues(str_id) != "") {
        const bytes = new Blob([getValues(str_id)]).size;

        if (bytes > 40) {
          const str_val = String(getValues(str_id));
          setValue(str_id, str_val.slice(0, -1));
        }
        val_list.push(getValues(str_id));
      }
    });
    val_list.length === id_list.length ? setValid(true) : setValid(false);
  };

  const { userAccount } = useContext(UserAccount);
  const { updateUserData } = useContext(UserData);
  const { setGatherList } = useContext(GatherList);

  //onClick-submit
  const onclick = (data) => {
    //api 호출
    //home으로 navigatge
    //열쇠 적용
    userAccount.install.map((x) =>
      setGatherList((prev) => [
        ...prev,
        gatherFormat(
          x,
          data[Object.keys(data).find((y) => y === String(x.id))]
        ),
      ])
    );
    updateUserData({
      userAccountList: userAccount.inout,
      userSavingList: userAccount.install,
      userInterlock: userAccount.interlock,
    });
    navigate("/key", {
      state: {
        num: 3,
        message: "모아(MOA)회원이 되셨네요",
        nextPath: "/home",
      },
    });
  };

  //컴포넌트 리스트 생성
  const result = AccountGoal(ins_list, register);

  return (
    <Box>
      <HeaderButton>
        <button
          onClick={() => {
            userAccount.install.map((x) =>
              setGatherList((prev) => [...prev, gatherFormat(x)])
            );
            updateUserData({
              userAccountList: userAccount.inout,
              userSavingList: userAccount.install,
              userInterlock: userAccount.interlock,
            });
            navigate("/key", {
              state: {
                num: 3,
                message: "모아(MOA)회원이 되셨네요",
                nextPath: "/home",
              },
            });
          }}
        >
          다음에하기
        </button>
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
