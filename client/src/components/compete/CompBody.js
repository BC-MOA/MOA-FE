import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CompLists from "./CompLists";
import Banner from "./comp/BannerSwiper";

const IgnorePaddingBox = styled.div`
  margin: 0 -20px;
  flex: 1;
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
    </IgnorePaddingBox>
  );
}

export default CompBody;
