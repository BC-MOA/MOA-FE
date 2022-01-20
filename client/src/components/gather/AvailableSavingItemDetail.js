import React from "react";
import { useNavigate } from "react-router-dom";
import { backButtonBox } from "style/common";
import styled from "styled-components";

function AvailableSavingItemDetail() {
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
  padding: 8px 20px;
  box-sizing: border-box;
  background: #f8f8f8;
`;
const BackButton = styled.div`
  ${backButtonBox}
  margin-bottom:12px;
`;
export default AvailableSavingItemDetail;
