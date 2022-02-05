import React, { useState } from "react";
import styled from "styled-components";
import { styleTitle, styleSubTitle, styleNotice } from "style/common";
import CustomBtn from "components/gather/addGoal/CustomBtn";
import BackHeader from "components/common/BackHeader";
import CustomInput from "components/common/CustomInput";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;

  .title {
    ${styleTitle}
    margin: 8px 0 32px;
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
      color: var(--alert);
    }
  }
  .inputForm {
    width: 100%;
    margin-bottom: 24px;
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
  }
`;
function ResetPassword() {
  const [newPassword, setNewPassword] = useState({
    password: "",
    checkPassword: "",
    phoneNumber: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setNewPassword({
      ...newPassword,
      [name]: value,
    });
  };
  const validationFunc = {
    validPassword: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{10,}$/.test(
      newPassword.password
    ),
    validCheckPassword:
      newPassword.password.length &&
      newPassword.password === newPassword.checkPassword,
    validPhoneNumber: /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/.test(
      newPassword.phoneNumber
    ),
  };
  return (
    <Container>
      <BackHeader path={-1} />
      <Content>
        <div className="title">비밀번호 재설정</div>
        <div className="inputForm">
          <label htmlFor="password" className="subTitle">
            새 비밀번호
          </label>
          <CustomInput
            type="password"
            name="password"
            placeholder="새 비밀번호를 입력해주세요"
            onChange={onChange}
            checkable={true}
            checked={validationFunc.validPassword}
          />
          <div className="notice">
            영문, 숫자 포함 10자 이상으로 조합해주세요
          </div>
          {newPassword.password.length ? (
            !validationFunc.validPassword && (
              <div className="notice warning">
                <img
                  src={require("assets/ic_alert.svg").default}
                  alt="입력경고 아이콘"
                />
                조건에 맞게 비밀번호를 만들어주세요
              </div>
            )
          ) : (
            <></>
          )}
        </div>
        <div className="inputForm">
          <label htmlFor="checkPassword" className="subTitle">
            새 비밀번호 확인
          </label>
          <CustomInput
            type="password"
            name="checkPassword"
            placeholder="새 비밀번호를 다시 입력해주세요"
            onChange={onChange}
            checkable={true}
            checked={validationFunc.validCheckPassword}
          />
          {newPassword.checkPassword ? (
            !validationFunc.validCheckPassword && (
              <div className="notice warning">
                <img
                  src={require("assets/ic_alert.svg").default}
                  alt="입력경고 아이콘"
                />
                비밀번호가 일치하지 않습니다
              </div>
            )
          ) : (
            <></>
          )}
        </div>
        <div className="inputForm">
          <label htmlFor="phoneNumber" className="subTitle">
            핸드폰 번호
          </label>
          <CustomInput
            name="phoneNumber"
            placeholder="01012345670"
            onChange={onChange}
            checkable={true}
            checked={validationFunc.validPhoneNumber}
          />
          {newPassword.phoneNumber.length ? (
            !validationFunc.validPhoneNumber && (
              <div className="notice warning">
                <img
                  src={require("assets/ic_alert.svg").default}
                  alt="입력경고 아이콘"
                />
                잘못된 휴대폰번호입니다
              </div>
            )
          ) : (
            <></>
          )}
        </div>
      </Content>
      <CustomBtn
        active={
          !Object.keys(validationFunc).filter((x) => validationFunc[x] !== true)
            .length
        }
        path={"/"}
      >
        수정완료
      </CustomBtn>
    </Container>
  );
}

export default ResetPassword;
