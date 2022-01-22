import BackHeader from "components/common/BackHeader";
import Container from "components/common/Container";
import ScrollBox from "components/common/ScrollBox";
import SubmitButton from "components/common/SubmitButton";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";

function AddMilitarySavingsForm() {
  const { state: item } = useLocation();
  const history = useNavigate();
  const [isAvildForm, setIsAvildForm] = useState(false);
  const [formData, setFormData] = useState({});
  return (
    <Container>
      <BackHeader path={-1} title={item.적금명} isScrolled={true}></BackHeader>
      <ScrollBox paddingValue={"16px 0 40px "}></ScrollBox>
      <SubmitButton
        title={"신청 완료"}
        onClickFunc={() => {
          history("success", { state: formData });
        }}
        isActive={isAvildForm}
      ></SubmitButton>
    </Container>
  );
}

export default AddMilitarySavingsForm;
