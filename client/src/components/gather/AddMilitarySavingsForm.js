import BackHeader from "components/common/BackHeader";
import Container from "components/common/Container";
import ScrollBox from "components/common/ScrollBox";
import React from "react";
import { useLocation } from "react-router-dom";

function AddMilitarySavingsForm() {
  const { state: item } = useLocation();
  return (
    <Container>
      <BackHeader path={-1} title={item.적금명} isScrolled={true}></BackHeader>
      <ScrollBox paddingValue={"16px 0 40px "}></ScrollBox>
    </Container>
  );
}

export default AddMilitarySavingsForm;
