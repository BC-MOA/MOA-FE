import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CompLists from "./CompLists";
import Banner from "./Common/BannerSwiper";

//임시 하단 nav
const TempNav = styled.div`
  background-color: gray;
  height: 49px;
  width: 375px;
  position: absolute;
  top: 695px;
`;

const IgnorePaddingBox = styled.div`
  margin: 0 -20px;
`;

//버튼-전체 챌린지, 내 챌린지
const Navigation = styled.button`
  width: 50%;
  height: 42px;
  border: none;

  border-bottom: 3px var(--Line_02) solid;
  color: var(--Line_02);
  background-color: var(--Surface);

  font-family: "Pretendard-SemiBold";
  font-size: 18px;

  transition: all 0.5s;

  :disabled {
    border-bottom: 3px var(--a2) solid;
    color: var(--a2);
  }

  :hover {
    background-color: var(--Surface);
    opacity: 0.8;
  }
`;

function CompBody() {
  const [isAll, setisAll] = useState(true);

  function setCategoryWrapper(input) {
    setisAll(input);
  }

  return (
    <IgnorePaddingBox>
      <Navigation disabled={isAll} onClick={() => setCategoryWrapper(true)}>
        전체 챌린지
      </Navigation>
      <Navigation disabled={!isAll} onClick={() => setCategoryWrapper(false)}>
        내 챌린지
      </Navigation>
      {isAll ? <Banner></Banner> : <></>}
      <CompLists category={isAll}></CompLists>
      <TempNav>임시 내비게이션바 입니다</TempNav>
    </IgnorePaddingBox>
  );
}

export default CompBody;
