import Container from "components/common/Container";
import NavBar from "components/common/NavBar";
import ScrollBox from "components/common/ScrollBox";
import React, { useContext } from "react";
import { Header } from "components/common/Header";
import ProfileCard from "../comp/ProfileCard";
import LinkButton from "../comp/NavButton";
import { UserData } from "store/User";

function Profile(props) {
  const User = useContext(UserData);
  const userData = User.userData;

  return (
    <Container>
      <Header $title={false} keys={userData.key} alarm={true}></Header>
      <ScrollBox>
        <ProfileCard
          profile={userData.profilethumb}
          unit={userData.unit}
          name={userData.name}
          join={userData.join_date}
        ></ProfileCard>
        <LinkButton
          title={"내 정보 수정"}
          to={"profile/edit"}
          trans={false}
        ></LinkButton>
        <LinkButton
          title={"내 보관함"}
          //userid 필요
          to={"reward/:" + userData.id}
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
  );
}

export default Profile;
