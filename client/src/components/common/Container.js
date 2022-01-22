import React from "react";
import styled from "styled-components";

function Container({ children }) {
  return <ContainerStyle>{children}</ContainerStyle>;
}
const ContainerStyle = styled.div`
  padding: 8px 20px;
  box-sizing: border-box;
  background: var(--Surface);
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export default Container;
