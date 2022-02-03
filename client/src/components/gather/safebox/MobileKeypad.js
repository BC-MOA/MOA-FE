import React, { useState } from "react";
import styled from "styled-components";
import CustomBtn from "components/gather/addGoal/CustomBtn";
import BackHeader from "components/common/BackHeader";
import moment from "moment";
import { accountList } from "components/common/dummyData";
import AccountModal from "./AccountModal";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const SelectAccount = styled.div`
  position: absolute;
  top: 56px;
  text-align: left;
  .title {
    font-family: "Pretendard-Regular";
    font-size: 14px;
    line-height: 22px;
    color: var(--Body_02);
  }
  .inputBox {
    display: flex;
    gap: 4px;
  }
  input {
    margin-top: 2px;
    border: none;
    background: none;
    font-family: "Pretendard-Regular";
    font-size: 16px;
    line-height: 25px;
    padding: 0;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    font-family: "Pretendard-SemiBold";
    font-size: 24px;
    line-height: 38px;
    text-align: center;
    border: none;

    &::placeholder {
      color: var(--Body_03);
    }
    &:disabled {
      background-color: transparent;
    }
  }
`;

const Box = styled.div`
  position: relative;
  margin-top: 24px;
  div {
    display: flex;
    justify-content: space-between;

    &.last {
      justify-content: center;
    }
  }
  div + div {
    margin-top: 16px;
  }
`;

const NumBtn = styled.button`
  color: var(--Title_01);
  padding: 0 10px;
  margin: 0 30px;
  height: 46px;
  background: none;
  border: none;
  font-family: Roboto;
  font-size: 28px;
  line-height: 44px;
  cursor: pointer;

  &.cancel {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

function MobileKeypad({ path, props }) {
  const [input, setInput] = useState("");
  const [modal, setModal] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(accountList[0]);

  const onClick = (event) => {
    setInput(input + event.target.innerText);
  };

  const cancel = () => {
    setInput(input.slice(0, -1));
  };

  const trFormat = (input) => {
    const formatted = {
      date: moment(new Date()).format("MM월 DD일"),
      lists: [
        {
          name: "국군재정단",
          time: moment(new Date()).format("hh:mm"),
          amount: input,
          // Todo: 추가 입금 시, 잔액 처리
          total: 10000,
        },
      ],
    };

    return formatted;
  };

  return (
    <Container>
      <BackHeader path={-1} />
      {path ? (
        <SelectAccount>
          <div className="title">출금계좌</div>
          <div className="inputBox">
            <input
              type="button"
              value={selectedAccount.accountName}
              onClick={() => {
                setModal(true);
              }}
            />
            <img
              src={require("assets/gather/ic_select_arrow.svg").default}
              alt="드롭다운 아이콘"
            />
          </div>
        </SelectAccount>
      ) : (
        <></>
      )}
      <Content>
        <input
          disabled
          placeholder="얼마를 입력할까요?"
          value={input ? Number(input).toLocaleString() + " 원" : ""}
        />
      </Content>
      <CustomBtn
        addFunc={
          path
            ? () => {
                props.transactions.push(trFormat(input));
                localStorage.setItem(
                  "gatherList",
                  JSON.stringify([
                    ...JSON.parse(localStorage.getItem("gatherList")).map((x) =>
                      x.name === props.name
                        ? {
                            ...x,
                            transactions: [...x.transactions, trFormat(input)],
                          }
                        : x
                    ),
                  ])
                );
              }
            : ""
        }
        path={path ? path : "/gather/add-safebox"}
        active={input !== ""}
        data={path ? props : input}
      >
        입력 완료
      </CustomBtn>
      <Box>
        <div>
          {[1, 2, 3].map((x) => (
            <NumBtn onClick={onClick} key={x}>
              {x}
            </NumBtn>
          ))}
        </div>
        <div>
          {[4, 5, 6].map((x) => (
            <NumBtn onClick={onClick} key={x}>
              {x}
            </NumBtn>
          ))}
        </div>
        <div>
          {[7, 8, 9].map((x) => (
            <NumBtn onClick={onClick} key={x}>
              {x}
            </NumBtn>
          ))}
        </div>
        <div className="last">
          <NumBtn onClick={onClick}>0</NumBtn>
        </div>
        <NumBtn className="cancel" onClick={cancel}>
          <img src={require("assets/goal/cancel.svg").default} alt="cancel" />
        </NumBtn>
      </Box>
      {modal ? (
        <AccountModal
          setModal={setModal}
          props={accountList}
          setAccount={setSelectedAccount}
        />
      ) : (
        <></>
      )}
    </Container>
  );
}

export default MobileKeypad;
