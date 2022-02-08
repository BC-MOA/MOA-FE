import Container from "components/common/Container";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import styled from "styled-components";

function LoadingStep3() {
  const history = useNavigate();
  const [isFound, setIsFound] = useState(false);
  useEffect(() => {
    getUserAccountAll();
  }, []);
  function getUserAccountAll() {
    // todo -  군 관련 계좌 api 호출
    // then 이면
    // 1. 사용자 계좌정보변수에 res값 저장
    // 2. setIsFound(true)
    // 3. 다음 라우터로 이동
    // catch 이면
    // alert 또는 confirm 후 다시 재귀

    // 아래는 테스트코드
    setTimeout(() => {
      setIsFound(true);
      history("/interlock");
    }, 1000);
  }
  return (
    <Container>
      <Content>
        <div>{"민수"}님의 군 관련 계좌를</div>
        <div className="last">열심히 찾고 있어요</div>
        <SyncLoader
          size={15}
          margin={12}
          loading={!isFound}
          color={`var(--a2)`}
          speed
        />
      </Content>
    </Container>
  );
}
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Pretendard-SemiBold";
  font-size: 24px;
  line-height: 38px;
  .last {
    margin-bottom: 128px;
  }
`;
export default LoadingStep3;
