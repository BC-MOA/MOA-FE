import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 100vh
  background-color: white;
`;

const AccountFound = () => {
  return (
    <Background>
      <p>민수님의 군 관련 계좌</p>
      <p>3개를 찾았어요</p>
      <img alt="none" src={require("assets/interlock/check.svg").default}></img>
    </Background>
  );
};

export default AccountFound;
