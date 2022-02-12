import React, { useState, useRef, useContext, useEffect } from "react";
import styled from "styled-components";
import {
  styleTitle,
  styleSubTitle,
  styleNotice,
  styleCustomInput,
} from "style/common";
import CustomBtn from "components/gather/addGoal/CustomBtn";
import CustomInput from "components/common/CustomInput";
import { useNavigate } from "react-router-dom";
import { UserData } from "store/User";
import { gatherFormat } from "components/common/dummyData";
import { GatherList } from "store/GatherListContext";
import { UserAccount } from "store/UserAccount";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
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
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 75px;

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
    &:nth-child(3) {
      margin: 24px 0 43px;
    }
  }

  .dividedInput {
    display: flex;
    width: 100%;
    gap: 7px;
    align-items: center;

    input {
      ${styleCustomInput}
    }
    .first {
      flex: 1;
      padding: 10px 12px;
      text-align: center;
    }
    .second {
      flex: 1.828828;
      padding: 10px 12px;
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
  const [isSuccess, setIsSuccess] = useState(true);
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
  const checkLogin = (login) => {
    if (
      login.serviceNumber1 + login.serviceNumber2 === "2171264703" &&
      login.password === "12345asdfg"
    )
      return true;
    else return false;
  };

  const { login: funcLogin, userData, updateUserData } = useContext(UserData);
  const { setGatherList } = useContext(GatherList);
  const { userAccount } = useContext(UserAccount);

  useEffect(() => {
    if (userData.id !== "") {
      history("/home");
    }
  }, []);

  return (
    <Container>
      <Header>
        <img src={require("assets/moa_logo.svg").default} alt="로고이미지" />
        <button
          onClick={() => {
            history("/home");
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
          <div className="dividedInput">
            <input
              type="number"
              className="first"
              id="serviceNumber1"
              placeholder="연도 뒤 2자리"
              onChange={onChange}
              onKeyUp={(e) => {
                if (login[e.target.id].length === 2) {
                  inputFocus.current.focus();
                }
              }}
            />
            <span>-</span>
            <input
              type="number"
              className="second"
              id="serviceNumber2"
              placeholder="군번 8자리를 입력해주세요"
              onChange={onChange}
              ref={inputFocus}
            />
          </div>
        </div>
        <div className="inputForm">
          <label htmlFor="password" className="subTitle">
            비밀번호
          </label>
          <CustomInput
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
          path={checkLogin(login) ? "/home" : ""}
          addFunc={() => {
            if (checkLogin(login)) {
              funcLogin({
                id: [login.serviceNumber1, login.serviceNumber2].join("-"),
                name: "박영찬",
                join_date: "2021-08-01",
                unit: "11사단 화랑부대",
                phone: "01012345678",
                key: 45,
              });
              userAccount.install.map((x) =>
                setGatherList((prev) => [...prev, gatherFormat(x)])
              );
              updateUserData({
                userAccountList: userAccount.inout,
                userSavingList: userAccount.install,
                userInterlock: userAccount.interlock,
              });
            } else {
              setIsSuccess(false);
            }
          }}
        >
          로그인
        </CustomBtn>
        <div className="signup subTitle">
          <div
            onClick={() => {
              history("/sign-up");
            }}
          >
            회원가입
          </div>
          <div
            onClick={() => {
              history("/reset-password");
            }}
          >
            비밀번호 재설정
          </div>
          <img src={require("assets/divide_line.svg").default} alt="구분선" />
        </div>
      </Content>
    </Container>
  );
}

export default SignIn;
