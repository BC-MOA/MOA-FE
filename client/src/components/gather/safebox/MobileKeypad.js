import React, { useState } from "react";
import styled from "styled-components";
import CustomBtn from "components/gather/addGoal/CustomBtn";
import BackHeader from "components/common/BackHeader";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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

function MobileKeypad({ path }) {
  const [input, setInput] = useState("");

  const onClick = (event) => {
    setInput(input + event.target.innerText);
  };

  const cancel = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <Container>
      <BackHeader path={-1} />
      <Content>
        <input
          disabled
          placeholder="얼마를 입력할까요?"
          value={input ? Number(input).toLocaleString() + " 원" : ""}
        />
      </Content>
      <CustomBtn
        path={path ? path : "/gather/add-safebox"}
        active={input !== ""}
        data={input}
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
    </Container>
  );
}

export default MobileKeypad;
