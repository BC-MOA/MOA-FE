import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AddBtn from "components/gather/AddBtn";

const Content = styled.div``;

function Gather() {
  const history = useNavigate();

  return (
    <div>
      <span>gater</span>
      <Content>
        <AddBtn name="군적금">
          은행 최고이율과 국가지원혜택까지 받아보세요.
        </AddBtn>
        <AddBtn name="목표">
          부대 내에서 목표를 잡고 돈을 모아나가보세요.
        </AddBtn>
        <AddBtn name="비상금">
          저축하고 남은 돈을 비상금처럼 따로 보관하세요.
        </AddBtn>
      </Content>
    </div>
  );
}

export default Gather;
