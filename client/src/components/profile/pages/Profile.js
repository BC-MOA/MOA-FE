import Container from "components/common/Container";
import NavBar from "components/common/NavBar";
import ScrollBox from "components/common/ScrollBox";
import React from "react";
import { Navigate } from "react-router-dom";
import { Header } from "components/common/Header";
import ProfileCard from "../comp/ProfileCard";
import LinkButton from "../comp/NavButton";

const userdata = {
  name: "최민수",
  rank: 3,
  pay_step: 2,
  unit: "11사단 화랑부대",
  join_date: "2021.09.16",
  type: "육군",
};

const data = {
  logged: true, //로그인 여부
};

function Profile(props) {
  return data.logged ? (
    <Container>
      <Header $title={false} keys={3000} alarm={true}></Header>
      <ScrollBox>
        <ProfileCard user={userdata}></ProfileCard>
        <LinkButton
          title={"내 정보 수정"}
          to={"profile/edit"}
          trans={false}
        ></LinkButton>
        <LinkButton
          title={"내 보관함"}
          //userid 필요
          to={"reward/:userId"}
          trans={false}
        ></LinkButton>
        <LinkButton
          title={"내 계좌"}
          to={"profile/account"}
          trans={false}
        ></LinkButton>
        <LinkButton title={"로그아웃"} trans={true}></LinkButton>
      </ScrollBox>
      <NavBar></NavBar>
    </Container>
  ) : (
    //일단 챌린지 쪽으로 redirect
    <Navigate to="/compete" replace={true} />
  );
}

export default Profile;
