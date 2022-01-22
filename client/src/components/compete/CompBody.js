import React, { useState, useEffect } from "react";
import styled from "styled-components";

import List from "./CompList";

const Button = styled.button`
  width: 50%;
  height: 42px;
  border: none;

  border-bottom: 3px var(--Line_02) solid;
  color: var(--Line_02);
  background-color: white;

  font-family: "Pretendard-SemiBold";
  font-size: 18px;

  transition: all 1s;

  :disabled {
    border-bottom: 3px var(--a2) solid;
    color: var(--a2);
    background-color: white;
  }
`;

function CompBody() {
  //category가 true일 때 전체 챌린지, false일때 내 챌린지
  const [category, setCategory] = useState(true);

  function setAll() {
    setCategory(true);
  }

  function setMy() {
    setCategory(false);
  }

  return (
    <div>
      <div>
        <Button disabled={category} onClick={setAll}>
          전체 챌린지
        </Button>
        <Button disabled={!category} onClick={setMy}>
          내 챌린지
        </Button>
      </div>
      <List category={category}></List>
    </div>
  );
}

export default CompBody;
