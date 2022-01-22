import Container from "components/common/Container";
import ScrollBox from "components/common/ScrollBox";
import SubmitButton from "components/common/SubmitButton";
import React from "react";
import { useNavigate } from "react-router-dom";

function AddMilitarySavingSuccess() {
  const history = useNavigate();
  return (
    <Container>
      <ScrollBox paddingValue={"16px 0 40px "}></ScrollBox>
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

export default AddMilitarySavingSuccess;
