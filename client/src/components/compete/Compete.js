import React from "react";
import { Header } from "../common/Header";
import Body from "./CompBody";
import AllCompContext from "./context/AllCompContext";
import MyCompeteContext from "./context/MyCompContext";
import NavBar from "components/common/NavBar";
import styled from "styled-components";
import { allCompList, myCompList } from "./context/data";

//임시 하단 nav
const StyledNavBar = styled(NavBar)`
  /* position: fixed; */
  /* bottom: 0; */
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

function Compete() {
  return (
    <Container>
      <MyCompeteContext.Provider value={myCompList.compList}>
        <AllCompContext.Provider value={allCompList.compList}>
          <Header title={false} keys={3000} alarm={true}></Header>
          <Body></Body>
        </AllCompContext.Provider>
      </MyCompeteContext.Provider>
      <StyledNavBar></StyledNavBar>
    </Container>
  );
}

export default Compete;
