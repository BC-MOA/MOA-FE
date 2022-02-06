import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BackHeader from "components/common/BackHeader";
import { useNavigate, useLocation } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
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
  .notice {
    display: flex;
    font-family: "Pretendard-Medium";
    font-size: 16px;
    line-height: 25px;
    color: var(--Body_01);
    margin-bottom: 40px;

    span {
      color: var(--Title_02);
    }
    &.alert {
      color: var(--alert);
    }
  }
  .l_space {
    margin-left: 4px;
  }
  .circles {
    display: flex;
    gap: 24px;
  }
`;

const Circle = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: var(--Line_01);
  &.checked {
    background-color: var(--a2);
  }
`;

const Box = styled.div`
  position: relative;
  margin: 24px 0;
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

function CheckPassword() {
  const history = useNavigate();
  const { state: props } = useLocation();

  const [input, setInput] = useState("");
  const [result, setResult] = useState(true);
  const onClick = (event) => {
    const newInput = input + event.target.innerText;
    if (newInput.length > 4) {
      setInput(newInput.substr(0, 4));
    } else {
      setInput(newInput);
    }
  };

  const cancel = () => {
    setInput(input.slice(0, -1));
  };
  const correctPassword = "2309";

  useEffect(() => {
    if (input.length === 4) {
      if (correctPassword === input) {
        setTimeout(() => {
          history("complete", {
            state: props,
          });
        }, 500);
      } else {
        setResult(false);
        setInput("");
      }
    }
  }, [input]);

  return (
    <Container>
      <BackHeader path={-1} />
      <Content>
        {result ? (
          <div className="notice">
            비밀번호 <span className="l_space">4자리</span>를 입력해주세요
          </div>
        ) : (
          <div className="notice alert">틀린 비밀번호입니다</div>
        )}
        <div className="circles">
          <Circle className={input.length >= 1 ? "checked" : ""} />
          <Circle className={input.length >= 2 ? "checked" : ""} />
          <Circle className={input.length >= 3 ? "checked" : ""} />
          <Circle className={input.length >= 4 ? "checked" : ""} />
        </div>
      </Content>

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

export default CheckPassword;
