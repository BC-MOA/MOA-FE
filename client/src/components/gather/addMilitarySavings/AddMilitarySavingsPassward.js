import BackHeader from "components/common/BackHeader";
import Container from "components/common/Container";
import ScrollBox from "components/common/ScrollBox";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import { v1 as uuid } from "uuid";
function AddMilitarySavingsPassward() {
  const { state: formData } = useLocation();
  const history = useNavigate();
  const [userPassword, setUserPassword] = useState(["", "", "", ""]);
  const [userPasswordCheck, setUserPasswordCheck] = useState(["", "", "", ""]);
  const [passwordCnt, setPasswordCnt] = useState(0);
  const [passwordCheckCnt, setPasswordCheckCnt] = useState(0);
  const [isSame, setIsSame] = useState("");
  useEffect(() => {
    let num = 0;
    for (let index = 0; index < userPassword.length; index++) {
      if ("" !== userPassword[index]) {
        num = num + 1;
      }
    }
    setPasswordCnt(num);
  }, [userPassword]);
  useEffect(() => {
    let num = 0;
    for (let index = 0; index < userPasswordCheck.length; index++) {
      if ("" !== userPasswordCheck[index]) {
        num = num + 1;
      }
    }
    setPasswordCheckCnt(num);
  }, [userPasswordCheck]);
  useEffect(() => {
    if (4 === passwordCheckCnt) {
      if (JSON.stringify(userPasswordCheck) === JSON.stringify(userPassword)) {
        setIsSame("true");
        history("success", { state: { ...formData, userPassword } });
      } else {
        setUserPasswordCheck(["", "", "", ""]);
        setIsSame("false");
      }
    }
  }, [passwordCheckCnt]);
  function funcSetPassword(num, type) {
    let temp = [...userPassword];
    if ("plus" === type) {
      if (passwordCnt < 4) {
        temp[passwordCnt] = num;
        setUserPassword(temp);
      }
    } else {
      temp[passwordCnt - 1] = "";
      setUserPassword(temp);
    }
  }
  function funcSetPasswordCheck(num, type) {
    let temp = [...userPasswordCheck];
    if ("plus" === type) {
      if (passwordCheckCnt < 4) {
        temp[passwordCheckCnt] = num;
        setUserPasswordCheck(temp);
      }
    } else {
      temp[passwordCheckCnt - 1] = "";
      setUserPasswordCheck(temp);
    }
  }

  return (
    <Container>
      <BackHeader path={-1} isScrolled={true} title={"신한 장병내일준비적금"} />
      <ScrollBox paddingValue={"140px 0"}>
        {4 !== passwordCnt && (
          <MessageBox>
            <div className="message">
              <span>비밀번호 </span>
              <span className="bold">4자리</span>
              <span>를 입력해주세요</span>
            </div>
            <div className="password">
              {userPassword.map((item, index) => (
                <img
                  key={uuid()}
                  src={
                    "" !== item
                      ? require("assets/gather/ic_password_green.svg").default
                      : require("assets/gather/ic_password.svg").default
                  }
                  alt={item}
                />
              ))}
            </div>
          </MessageBox>
        )}
        {4 === passwordCnt && (
          <MessageBox>
            <div className="message">
              {4 !== passwordCheckCnt && "" === isSame && (
                <>
                  <span>비밀번호 </span>
                  <span className="bold">4자리</span>
                  <span>를 다시 입력해주세요</span>
                </>
              )}
              {"false" === isSame && (
                <span className="notSame">
                  비밀번호가 틀려요 다시 입력해주세요
                </span>
              )}
            </div>

            <div className="password">
              {userPasswordCheck.map((item, index) => (
                <img
                  key={uuid()}
                  src={
                    "" !== item
                      ? require("assets/gather/ic_password_green.svg").default
                      : require("assets/gather/ic_password.svg").default
                  }
                  alt={item}
                />
              ))}
            </div>
            {"false" === isSame && (
              <button
                onClick={() => {
                  setIsSame("");
                  setUserPassword(["", "", "", ""]);
                  setUserPasswordCheck(["", "", "", ""]);
                }}
              >
                비밀번호 재설정
              </button>
            )}
          </MessageBox>
        )}
        <span>{userPassword}</span>
        <div>{userPasswordCheck}</div>
        <KeyPad>
          {[0, 1, 2].map((num) => {
            const list = [3 * num + 1, 3 * num + 2, 3 * num + 3];
            return (
              <div key={uuid()} className="row">
                {list.map((numX) => {
                  return (
                    <div
                      onClick={() => {
                        if (4 === passwordCnt) {
                          funcSetPasswordCheck(numX, "plus");
                        } else {
                          funcSetPassword(numX, "plus");
                        }
                      }}
                      key={uuid()}
                      className="item"
                    >
                      {numX}
                    </div>
                  );
                })}
              </div>
            );
          })}
          <div className="row">
            <div className="item"></div>
            <div
              className="item"
              onClick={() => {
                if (4 === passwordCnt) {
                  funcSetPasswordCheck(0, "plus");
                } else {
                  funcSetPassword(0, "plus");
                }
              }}
            >
              0
            </div>
            <div
              className="item"
              onClick={() => {
                if (4 === passwordCnt) {
                  funcSetPasswordCheck("", "minus");
                } else {
                  funcSetPassword("", "minus");
                }
              }}
            >
              <img
                src={require("assets/ic_keypad_delete.svg").default}
                alt={"취소"}
              />
            </div>
          </div>
        </KeyPad>
      </ScrollBox>
    </Container>
  );
}
const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Pretendard-medium";
  font-size: 16px;
  line-height: 25px;
  color: var(--Body_01);
  button {
    margin-top: 36px;
    background: var(--Line_02);
    border-radius: 10px;
    padding: 3px 16px;
    border: none;
    font-family: "Pretendard-Medium";
    font-size: 14px;
    line-height: 22px;
    color: var(--Body_02);
  }
  .message {
    margin-bottom: 40px;
    .bold {
      color: var(--Title_01);
    }
    .notSame {
      color: var(--alert);
    }
  }
  .password {
    display: flex;
    gap: 24px;
  }
`;
const KeyPad = styled.div`
  color: var(--Title_01);
  font-family: "Roboto-Regular";
  font-size: 28px;
  gap: 16px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  .row {
    display: flex;
    align-items: center;

    .item {
      height: 46px;
      flex: 1;
      line-height: 46px;
      cursor: pointer;
    }
  }
`;
export default AddMilitarySavingsPassward;
