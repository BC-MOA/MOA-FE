import BackHeader from "components/common/BackHeader";
import React from "react";
import { useLocation } from "react-router-dom";
import { hideScrollBar } from "style/common";
import styled from "styled-components";

function AddMilitarySavingsTerm() {
  const { state: item } = useLocation();

  return (
    <Container>
      <BackHeader path={-1} title={item.적금명} isScrolled={true}></BackHeader>
      <ScrollBox></ScrollBox>
    </Container>
  );
}
const Container = styled.div`
  padding: 8px 20px;
  box-sizing: border-box;
  background: var(--Surface);
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const ScrollBox = styled.div`
  ${hideScrollBar}
  height: 100%;
  padding-top: 12px;
  box-sizing: border-box;
`;
export default AddMilitarySavingsTerm;
