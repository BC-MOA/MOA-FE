import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px 20px 0;
  box-sizing: border-box;
`;

function Goal() {
  return (
    <Container>
      <div>목표 세우기</div>
    </Container>
  );
}

export default Goal;
