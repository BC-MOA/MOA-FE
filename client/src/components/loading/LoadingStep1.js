import React, { useContext } from "react";
import { UserData } from "store/User";
import styled from "styled-components";

function LoadingStep1() {
  const { userData } = useContext(UserData);
  return (
    <Content>
      <Title>
        <span className="num">{"21-71264703"}</span>
        <div className="bold">
          <span className="green">{userData.name}</span>
          <span>님</span>
        </div>
        <span className="bold">모아(MOA) 가입을 환영합니다!</span>
      </Title>
      <div className="img">
        <img
          src={require("assets/loading/loading_character.png")}
          alt="캐릭터"
        />
      </div>
    </Content>
  );
}
const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 48px 12px;
  .img {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
`;
const Title = styled.div`
  text-align: start;
  .num {
    font-family: "Roboto";
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: var(--Body_01);
  }
  .bold {
    font-family: "Pretendard-SemiBold";
    font-weight: 600;
    font-size: 24px;
    line-height: 38px;
  }
  .green {
    color: var(--a3);
  }
`;
export default LoadingStep1;
