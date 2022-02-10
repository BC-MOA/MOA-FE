import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { hideScrollBar } from "style/common";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  ${hideScrollBar}
  padding-bottom: 10px;
  img {
    width: 147.57px;
  }
`;

function StartMoa() {
  const history = useNavigate();
  useEffect(() => {
    setTimeout(() => history("/home"), 1500);
  }, []);
  return (
    <Container>
      <Content className="animate__animated animate__flipInX">
        <img
          src={require("assets/moa_logo.svg").default}
          alt="MOA 로고이미지"
        />
      </Content>
    </Container>
  );
}

export default StartMoa;
