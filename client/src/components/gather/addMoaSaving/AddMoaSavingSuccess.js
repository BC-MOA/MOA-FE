import Container from "components/common/Container";
import ScrollBox from "components/common/ScrollBox";
import SubmitButton from "components/common/SubmitButton";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ApplyDataCard from "./ApplyDataCard";

function AddMoaSavingSuccess() {
  const history = useNavigate();
  const { state: savingType } = useLocation();
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
        <Notice>입출금통장이 개설됐어요</Notice>
        <CharacterImg>
          <img
            src={require("assets/army_character.svg").default}
            alt="군인캐릭터"
          />
        </CharacterImg>
        <ApplyDataCard></ApplyDataCard>
      </ScrollBox>
      <SubmitButton
        title={"확인"}
        onClickFunc={() => {
          if ("목표" === savingType) {
            history("/gather/add-goal");
          } else {
            history("/gather/add-safebox");
          }
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

export default AddMoaSavingSuccess;
