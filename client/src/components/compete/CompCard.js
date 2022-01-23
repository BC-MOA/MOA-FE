import styled from "styled-components";
import React from "react";

const Card = styled.div`
  background-color: yellow;
  width: 300px;
  height: 50px;
`;

function CompCard() {
  return <Card>임시 카드</Card>;
}

export default CompCard;
