import Container from "components/common/Container";
import ScrollBox from "components/common/ScrollBox";
import SubmitButton from "components/common/SubmitButton";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProcessStateBox from "../../ProcessStateBox";
import ApplyDataCard from "../ApplyDataCard";
const stateList = ["신청 접수", "군 정보 확인", "은행 심사", "개설 완료"];
function AddMilitarySavingSuccess() {
  const { state: applyData } = useLocation();
  const history = useNavigate();
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
        <ProcessStateBox stateList={stateList} currentState={stateList[0]} />
        <CharacterImg>
          <img
            src={require("assets/army_character.svg").default}
            alt="군인캐릭터"
          />
        </CharacterImg>
        <ApplyDataCard applyData={applyData} />
      </ScrollBox>
      <SubmitButton
        title={"확인"}
        onClickFunc={() => {
          history("edit", { state: applyData });
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

const CharacterImg = styled.div`
  height: 64px;
  overflow: hidden;
  text-align: end;
`;

export default AddMilitarySavingSuccess;
