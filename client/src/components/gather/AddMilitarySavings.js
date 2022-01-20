import React from "react";
import { useNavigate } from "react-router-dom";
import { backButton } from "style/common";
import styled from "styled-components";

function AddMilitarySavings() {
  const history = useNavigate();

  return (
    <Container>
      <BackButton
        onClick={() => {
          history(-1);
        }}
      >
        <img
          src={require("assets/gather/ic_back.svg").default}
          alt="뒤로가기"
        />
      </BackButton>
    </Container>
  );
}
const Container = styled.div`
  margin: 8px 20px;
`;
const BackButton = styled.div`
  ${backButton}
  margin-bottom:12px;
`;

export default AddMilitarySavings;
