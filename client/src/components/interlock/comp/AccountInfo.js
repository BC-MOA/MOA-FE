import styled from "styled-components";
import AccountCard from "components/profile/comp/AccountCard";
import SubmitButton from "components/common/SubmitButton";
import { useState } from "react";
import Modal from "./Modal";

const Box = styled.div`
  font-family: "Pretendard-Regular";
  display: flex;
  flex-direction: column;
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
      color: var(--a3);
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
    width: 100%;
  }

  .alert {
    padding: 25px 0;
  }
`;

const AccountInfo = ({ accounts, func }) => {
  //step 관리 state
  const [click, setClick] = useState(false);

  //중복 은행명 제거
  const bankNameSet = new Set();

  //계좌 필터링
  const depoList = accounts.inout;
  const insList = accounts.install;

  let depoList_ = [];
  let insList_ = [];

  for (const obj of depoList) {
    depoList_.push(<AccountCard obj={obj} key={obj.id}></AccountCard>);
    bankNameSet.add(obj.bankName);
  }

  for (const obj of insList) {
    insList_.push(<AccountCard obj={obj} key={obj.id}></AccountCard>);
    bankNameSet.add(obj.bankName);
  }

  //은행명 모음
  const banks = bankNameSet.values();

  return (
    <Box>
      {click ? (
        <div className="title">내 계좌</div>
      ) : (
        <div className="text">
          <p>
            {bankNameSet.size > 1 ? (
              <>
                <span>{banks.next().value}은행</span>과&nbsp;
              </>
            ) : (
              <></>
            )}
            <span> {banks.next().value}은행</span>에
          </p>
          <p>
            월급통장&nbsp; <span>{depoList.length}</span> 개, 군적금 &nbsp;
            <span>{insList.length}</span>
            개가
          </p>
          <p>가입되어있으시네요!</p>
        </div>
      )}
      <div>
        <div>
          <p className="type">군인 월급 통장</p>
          {depoList_}
        </div>
        <div>
          <p className="type">군적금</p>
          {insList_.length == 0 ? (
            <p className="alert">"군적금은 아직 가입을 안하셨네요!" </p>
          ) : (
            insList_
          )}
        </div>
      </div>
      {click ? (
        <Modal length={insList_.length} func={func}></Modal>
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
