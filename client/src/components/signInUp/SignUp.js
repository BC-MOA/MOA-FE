import React, { useState, useRef, useContext, useEffect } from "react";
import styled from "styled-components";
import {
  styleTitle,
  styleSubTitle,
  styleNotice,
  styleCustomInput,
} from "style/common";
import CustomBtn from "components/gather/addGoal/CustomBtn";
import { hideScrollBar } from "style/common";
import CustomInput from "components/common/CustomInput";
import { UserData } from "store/User";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  ${hideScrollBar}
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;

  .title {
    ${styleTitle}
    margin: 24px 0 32px;
  }
  .subTitle {
    ${styleSubTitle}
  }
  .notice {
    ${styleNotice}
    margin: 6px 0 0 4px;
    &.warning {
      display: flex;
      gap: 4px;
      margin-top: 4px;
      color: var(--alert);
    }
  }

  .inputForm {
    width: 100%;
    margin-bottom: 24px;
    label {
      display: block;
      margin: 0 0 4px 4px;
    }
    &:last-child {
      margin-bottom: 60px;
    }
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
`;

function SignUp() {
  const [signUp, setSignUp] = useState({
    name: "",
    rrNumber1: "",
    rrNumber2: "",
    serviceNumber1: "",
    serviceNumber2: "",
    phoneNumber: "",
    password: "",
    checkPassword: "",
  });
  const onChange = (e) => {
    const { id, value } = e.target;
    setSignUp({
      ...signUp,
      [id]: `${id === "rrNumber2" ? value.slice(0, 1) : value}`,
    });
  };
  const focus1 = useRef();
  const focus2 = useRef();

  const validationFunc = {
    validPassword: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{10,}$/.test(
      signUp.password
    ),
    validCheckPassword:
      signUp.password.length && signUp.password === signUp.checkPassword,
    validPhoneNumber: /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/.test(
      signUp.phoneNumber
    ),
  };

  const { login: funcLogin, userData } = useContext(UserData);
  const history = useNavigate();

  useEffect(() => {
    if (userData.id) {
      history("/home");
    }
  }, []);

  return (
    <Container>
      <Header>
        <img src={require("assets/moa_logo.svg").default} alt="???????????????" />
      </Header>
      <Content>
        <div className="title">????????????</div>
        <div className="inputForm">
          <label htmlFor="name" className="subTitle">
            ??????
          </label>
          <CustomInput id="name" placeholder="?????????" onChange={onChange} />
        </div>
        <div className="inputForm">
          <label htmlFor="rrNumber1" className="subTitle">
            ??????????????????
          </label>
          <div className="dividedInput">
            <input
              className="first"
              id="rrNumber1"
              type="number"
              placeholder="????????????"
              onChange={onChange}
              onKeyUp={(e) => {
                if (signUp[e.target.id].length === 6) {
                  focus1.current.focus();
                }
              }}
            />
            <span>-</span>
            <input
              type="number"
              maxLength="1"
              value={signUp.rrNumber2}
              className="second"
              id="rrNumber2"
              placeholder=""
              onChange={onChange}
              ref={focus1}
            />
          </div>
          <div className="notice">
            ???????????? 6????????? ????????? ??? ??? 1????????? ??????????????????
          </div>
        </div>
        <div className="inputForm">
          <label htmlFor="serviceNumber1" className="subTitle">
            ??????
          </label>
          <div className="dividedInput">
            <input
              type="number"
              className="first"
              id="serviceNumber1"
              placeholder="?????? ??? 2??????"
              onChange={onChange}
              onKeyUp={(e) => {
                if (signUp[e.target.id].length === 2) {
                  focus2.current.focus();
                }
              }}
            />
            <span>-</span>
            <input
              type="number"
              className="second"
              id="serviceNumber2"
              placeholder="?????? 8????????? ??????????????????"
              onChange={onChange}
              ref={focus2}
            />
          </div>
        </div>
        <div className="inputForm">
          <label htmlFor="phoneNumber" className="subTitle">
            ????????? ??????
          </label>
          <CustomInput
            type="number"
            id="phoneNumber"
            placeholder="01012345670"
            onChange={onChange}
          />
          {signUp.phoneNumber.length ? (
            !validationFunc.validPhoneNumber && (
              <div className="notice warning">
                <img
                  src={require("assets/ic_alert.svg").default}
                  alt="???????????? ?????????"
                />
                ????????? ??????????????? ???????????????
              </div>
            )
          ) : (
            <></>
          )}
        </div>
        <div className="inputForm">
          <label htmlFor="password" className="subTitle">
            ????????????
          </label>
          <CustomInput
            type="password"
            id="password"
            placeholder="ex) abc1234500"
            onChange={onChange}
            checkable={true}
            checked={validationFunc.validPassword}
          />
          <div className="notice">
            ??????, ?????? ?????? 10??? ???????????? ??????????????????
          </div>
          {signUp.password.length ? (
            !validationFunc.validPassword && (
              <div className="notice warning">
                <img
                  src={require("assets/ic_alert.svg").default}
                  alt="???????????? ?????????"
                />
                ????????? ?????? ??????????????? ??????????????????
              </div>
            )
          ) : (
            <></>
          )}
        </div>
        <div className="inputForm">
          <label htmlFor="checkPassword" className="subTitle">
            ???????????? ??????
          </label>
          <CustomInput
            type="password"
            id="checkPassword"
            placeholder="??? ??????????????? ???????????? ??????????????????"
            onChange={onChange}
            checkable={true}
            checked={validationFunc.validCheckPassword}
          />
          {signUp.checkPassword.length ? (
            !validationFunc.validCheckPassword && (
              <div className="notice warning">
                <img
                  src={require("assets/ic_alert.svg").default}
                  alt="???????????? ?????????"
                />
                ??????????????? ???????????? ????????????
              </div>
            )
          ) : (
            <></>
          )}
        </div>
      </Content>
      <CustomBtn
        active={
          !Object.keys(signUp).filter((x) => signUp[x] === "").length &&
          !Object.keys(validationFunc).filter((x) => validationFunc[x] !== true)
            .length
        }
        path={"/loading"}
        addFunc={() => {
          funcLogin({
            id: [signUp.serviceNumber1, signUp.serviceNumber2].join("-"),
            name: signUp.name,
            join_date: "2021-08-01",
            unit: "11?????? ????????????",
            phone: signUp.phoneNumber,
            key: 0,
          });
        }}
      >
        ????????????
      </CustomBtn>
    </Container>
  );
}

export default SignUp;
