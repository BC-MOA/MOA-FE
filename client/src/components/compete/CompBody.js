import React, { useState, useEffect } from "react";
import styled from "styled-components";
import List from "./CompList";
import Banner from "./CompBanner";
import Nav from "./CompNav";

//임시 하단 nav
const TempNav = styled.div`
  background-color: gray;
  height: 49px;
  width: 375px;
  position: absolute;
  top: 695px;
`;

function CompBody() {
  const [isAll, setisAll] = useState(true);

  function setCategoryWrapper(input) {
    setisAll(input);
  }

  return (
    <>
      <Nav disabled={isAll} onClick={() => setCategoryWrapper(true)}>
        전체 챌린지
      </Nav>
      <Nav disabled={!isAll} onClick={() => setCategoryWrapper(false)}>
        내 챌린지
      </Nav>
      {isAll ? <Banner></Banner> : <></>}
      <List category={isAll}></List>
      <TempNav>임시 내비게이션바 입니다</TempNav>
    </>
  );
}

export default CompBody;
