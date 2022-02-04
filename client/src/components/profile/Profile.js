import Container from "components/common/Container";
import NavBar from "components/common/NavBar";
import ScrollBox from "components/common/ScrollBox";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "components/common/Header";

const userdata = {};

const data = {
  logged: true, //로그인 여부
};

function Profile(props) {
  return data.logged ? (
    <Container>
      <Header $title={false} keys={3000} alarm={true}></Header>
      <ScrollBox></ScrollBox>
      <NavBar></NavBar>
    </Container>
  ) : (
    //일단 챌린지 쪽으로 redirect
    <Navigate to="/compete" replace={true} />
  );
}

export default Profile;
