import { Header } from "../../common/Header";
import AllCompContext from "../context/AllCompContext";
import MyCompeteContext from "../context/MyCompContext";
import NavBar from "components/common/NavBar";
import styled from "styled-components";
import { allCompList, myCompList } from "../context/data";
import React, { useState } from "react";
import CompLists from "./CompLists";
import Banner from "../comp/BannerSwiper";
import CategoryButton from "../comp/CategoryButton";

//[styled comp]: 상위 패딩 무시용 박스
const IgnorePaddingBox = styled.div`
  margin: -8px -20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: calc(734px - 52px);
`;

/**
 * [comp]
 * Compete
 *
 * [state]
 * isAll : 카테고리 설정을 위한 state
 *
 * [props]
 * none
 */
function Compete() {
  const [isAll, setisAll] = useState(true);

  function setCategoryWrapper(input) {
    setisAll(input);
  }

  return (
    <>
      <MyCompeteContext.Provider value={myCompList.compList}>
        <AllCompContext.Provider value={allCompList.compList}>
          <Header title={false} keys={3000} alarm={true}></Header>
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
            <NavBar></NavBar>
          </IgnorePaddingBox>
        </AllCompContext.Provider>
      </MyCompeteContext.Provider>
    </>
  );
}

export default Compete;
