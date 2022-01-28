import Container from "components/common/Container";
import ScrollBox from "components/common/ScrollBox";
import SubmitButton from "components/common/SubmitButton";
import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ApplyDataCard from "./ApplyDataCard";
import EditSavingTitle from "./EditSavingTitle";
import ProcessStateBox from "./ProcessStateBox";

function AddMilitarySavingSuccess() {
  const { state: formData } = useLocation();
  const [isSubmit, setIsSubmit] = useState(false);
  return (
    <Fragment>
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
          <ProcessStateBox></ProcessStateBox>
          <CharacterImg>
            <img
              src={require("assets/gather/army_character.svg").default}
              alt="군인캐릭터"
            />
          </CharacterImg>
          <ApplyDataCard formData={formData}></ApplyDataCard>
        </ScrollBox>
        <SubmitButton
          title={"확인"}
          onClickFunc={() => {
            setIsSubmit(true);
          }}
          isActive={true}
        ></SubmitButton>
      </Container>
      <EditSavingTitle isSubmit={isSubmit} setIsSubmit={setIsSubmit} />
    </Fragment>
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
