import styled from "styled-components";
import AccountCard from "components/profile/comp/AccountCard";
import SubmitButton from "components/common/SubmitButton";
import { useState } from "react";

const Box = styled.div`
  font-family: "Pretendard-Regular";
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: calc(100vh - 60px);

  padding: 15px 0;

  .text {
    font-weight: 600;
    font-size: 21px;

    p {
      display: flex;
      margin: 20px 0;
    }
    span {
      color: green;
    }
  }

  .title {
    font-weight: 600;
    font-size: 21px;
    text-align: left;
  }

  .type {
    font-weight: 600;
    font-size: 16px;

    text-align: left;

    margin-top: 30px;
  }

  .button {
    margin-top: auto;
  }
`;

const Modal = styled.div`
  background-color: white;
  width: calc(100%);
  height: 235px;

  font-family: "Pretendard-Regular";

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  padding: 15px 5%;

  margin: auto 0 -16px -20px;

  border-radius: 14px 14px 0 0;

  .big {
    font-weight: 600;
    font-size: 18px;

    margin: 5px 0;
  }

  .small {
    font-size: 14px;
    color: var(--Body_02);

    margin: 1px 0;
  }

  .colored {
    display: flex;

    span {
      color: var(--a3);
    }
  }
`;

const AccountInfo = ({ depo_list, ins_list, func }) => {
  const [click, setClick] = useState(false);

  const bankNameSet = new Set();

  let depoList = [];
  let insList = [];

  for (const obj of depo_list) {
    depoList.push(<AccountCard obj={obj} key={obj.key}></AccountCard>);
    bankNameSet.add(obj.bank);
  }

  for (const obj of ins_list) {
    insList.push(<AccountCard obj={obj} key={obj.key}></AccountCard>);
    bankNameSet.add(obj.bank);
  }

  const banks = bankNameSet.values();

  return (
    <Box>
      {click ? (
        <div className="title">내 계좌</div>
      ) : (
        <div className="text">
          <p>
            <span>{banks.next().value}</span>와{" "}
            <span>{banks.next().value}</span>에
          </p>
          <p>
            월급통장 <span>{depo_list.length}</span> 개와 군적금
            <span>{insList.length}</span>
            개가
          </p>
          <p>가입되어있으시네요!</p>
        </div>
      )}
      <div>
        <div>
          <p className="type">군인 월급 통장</p>
          {depoList}
        </div>
        <div>
          <p className="type">군적금</p>
          {insList}
        </div>
      </div>
      {click ? (
        <Modal>
          <p className="colored big">
            <span>군적금 계좌</span>는 이제부터
          </p>
          <p className="big">모아(MOA)에서 따로 볼 수 있어요</p>
          <p className="small">
            나라사랑계좌는 연동되어 출금계좌로 설정되어요.
          </p>
          <p className="small">다른 계좌를 출금계좌로 설정하고 싶으면,</p>
          <p className="small">프로필 {">"} 계좌설정에서 추가하면 돼요</p>
          <SubmitButton
            title={"확인"}
            onClickFunc={() => func(3)}
            isActive={true}
          ></SubmitButton>
        </Modal>
      ) : (
        <div className="button">
          <SubmitButton
            title={"다음"}
            onClickFunc={() => setClick(true)}
            isActive={true}
          ></SubmitButton>
        </div>
      )}
    </Box>
  );
};

export default AccountInfo;
