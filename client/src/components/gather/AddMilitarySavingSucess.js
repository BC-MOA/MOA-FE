import Container from "components/common/Container";
import ScrollBox from "components/common/ScrollBox";
import SubmitButton from "components/common/SubmitButton";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

function AddMilitarySavingSuccess() {
  const history = useNavigate();
  const { state: formData } = useLocation();
  return (
    <Container>
      <ScrollBox paddingValue={"80px 0 114px "}>
        <SuccessIcon>
          <img
            className="animate__animated animate__flipInX "
            src={require("assets/gather/ic_big_check.svg").default}
            alt="성공"
          />
        </SuccessIcon>
        <Notice>군적금을 신청했어요</Notice>
        <ProcessStateBox>
          <div className="currentState">
            <img
              src={require("assets/gather/ic_process_apply.svg").default}
              alt="신청접수"
            />
            <span>신청 접수</span>
          </div>
          <div>
            <img
              src={require("assets/gather/ic_process_id_check.svg").default}
              alt="군정보확인"
            />
            <span>군 정보 확인</span>
          </div>

          <div>
            <img
              src={require("assets/gather/ic_process_evaluation.svg").default}
              alt="은행심사"
            />
            <span>은행 심사</span>
          </div>
          <div>
            <img
              src={
                require("assets/gather/ic_process_maked_account.svg").default
              }
              alt="개설완료"
            />
            <div>개설 완료</div>
          </div>
        </ProcessStateBox>
      </ScrollBox>
      <SubmitButton
        title={"확인"}
        onClickFunc={() => {
          history("/gather");
        }}
        isActive={true}
      ></SubmitButton>
    </Container>
  );
}
const SuccessIcon = styled.div`
  margin-bottom: 10px;
`;
const Notice = styled.div`
  font-family: "Pretendard-SemiBold";
  font-weight: 600;
  font-size: 24px;
  line-height: 38px;
  margin-bottom: 24px;
`;
const ProcessStateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  line-height: 22px;
  color: var(--Body_01);
  margin-bottom: 24px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    img {
      width: 49px;
    }
    &.currentState {
      color: var(--a2);
    }
  }
`;

export default AddMilitarySavingSuccess;
