import { Header } from "components/common/Header";
import NavBar from "components/common/NavBar";
import styled from "styled-components";
import React, { useState } from "react";
import CompLists from "./CompLists";
import Banner from "../comp/BannerSwiper";
import CategoryButton from "../comp/CategoryButton";

import { useLocation } from "react-router-dom";

const StyleNavBar = styled(NavBar)`
  position: fixed;
  bottom: 0;
`;

//[styled comp]: 상위 패딩 무시용 박스
const IgnorePaddingBox = styled.div`
  margin: -8px -20px 0;

  display: flex;
  flex-direction: column;
`;

//isAll : 카테고리 설정을 위한 state
function Compete() {
  const { state } = useLocation();
  const [isAll, setisAll] = useState(state !== null ? state.type : true);

  function setCategoryWrapper(input) {
    setisAll(input);
  }

  return (
    <>
      <Header $title={false}></Header>
      <IgnorePaddingBox>
        <div>
          <CategoryButton
            disabled={isAll}
            onClick={() => setCategoryWrapper(true)}
          >
            전체 챌린지
          </CategoryButton>
          <CategoryButton
            disabled={!isAll}
            onClick={() => setCategoryWrapper(false)}
          >
            내 챌린지
          </CategoryButton>

          {isAll ? <Banner></Banner> : <></>}
          <CompLists category={isAll}></CompLists>
        </div>
      </IgnorePaddingBox>
      <StyleNavBar></StyleNavBar>
    </>
  );
}

export default Compete;
