import React, { useState, useRef } from "react";
import styled from "styled-components";
import { styleTitle, styleSubTitle, styleNotice } from "style/common";
import CustomBtn from "components/gather/addGoal/CustomBtn";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;
const Header = styled.div`
  position: relative;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    position: absolute;
    right: 4px;
    border: none;
    color: var(--Title_02);
    font-size: 14px;
    line-height: 22px;
    font-family: "Pretendard-Medium";
    background: none;
    padding: 0;
  }
`;
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 81px auto 0;

  .title {
    ${styleTitle}
    margin-bottom: 32px;
  }
  .subTitle {
    ${styleSubTitle}
  }

  .inputForm {
    width: 100%;
    label {
      display: block;
      text-align: left;
      margin: 0 0 4px 4px;
    }
    input {
      border-radius: 8px;
      box-sizing: border-box;
      width: 100%;
      font-family: "Pretendard-Regular";
      font-size: 16px;
      line-height: 25px;
      padding: 10px 16px;
      border: none;
      &::placeholder {
        color: var(--Line_01);
      }
    }
    #serviceNumber1 {
      width: 111px;
      padding: 10px 12px;
      text-align: center;
    }
    #serviceNumber2 {
      width: 203px;
    }
    &:nth-child(3) {
      margin: 24px 0 43px;
    }
  }

  .warning {
    position: absolute;
    top: 243px;
    left: 4px;
    ${styleNotice}
    color: var(--alert);
  }
  .signup {
    position: relative;
    display: flex;
    align-items: center;
    gap: 25px;
    margin-top: 25px;

    img {
      position: absolute;
      left: 61px;
    }

    div {
      cursor: pointer;
    }
  }
`;
function SignIn() {
  const [login, setLogin] = useState({
    serviceNumber1: "",
    serviceNumber2: "",
    password: "",
  });
  const onChange = (e) => {
    const { id, value } = e.target;
    setLogin({
      ...login,
      [id]: value,
    });
  };
  const inputFocus = useRef();
  const history = useNavigate();
  const isSuccess = true;

  return (
    <Container>
      <Header>
        <img src={require("assets/moa_logo.svg").default} alt="로고이미지" />
        <button
          onClick={() => {
            history("home");
          }}
        >
          건너뛰기
        </button>
      </Header>
      <Content>
        <div className="title">로그인</div>
        <div className="inputForm">
          <label htmlFor="serviceNumber1" className="subTitle">
            군번
          </label>
          <input
            id="serviceNumber1"
            placeholder="연도 뒤 2자리"
            onChange={onChange}
            onKeyUp={(e) => {
              if (login[e.target.id].length === 2) {
                inputFocus.current.focus();
              }
            }}
          />{" "}
          -{" "}
          <input
            id="serviceNumber2"
            placeholder="군번 8자리를 입력해주세요"
            onChange={onChange}
            ref={inputFocus}
          />
        </div>
        <div className="inputForm">
          <label htmlFor="password" className="subTitle">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={onChange}
          />
        </div>
        {!isSuccess && (
          <div className="warning">
            군번 또는 비밀번호를 다시 한번 확인해주세요
          </div>
        )}
        <CustomBtn
          active={!Object.keys(login).filter((x) => login[x] === "").length}
        >
          로그인
        </CustomBtn>
        <div className="signup subTitle">
          <div
            onClick={() => {
              history("sign-up");
            }}
          >
            회원가입
          </div>
          <div
            onClick={() => {
              history("reset-password");
            }}
          >
            비밀번호 재설정
          </div>
          <img src={require("assets/devide_line.svg").default} alt="구분선" />
        </div>
      </Content>
    </Container>
  );
}

export default SignIn;
