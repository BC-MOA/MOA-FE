import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "./Container";
import ScrollBox from "./ScrollBox";

function KeyPopUp() {
  const { state: keyInfo } = useLocation();
  const history = useNavigate();
  // todo 사용자 키 값 변경하는 함수 넣기
  return (
    <Container>
      <Header>
        <img
          onClick={() => {
            // 사용자 키 값 변경하는 함수 실행
            history(-1);
          }}
          src={require("assets/ic_close.svg").default}
          alt="나가기"
        />
      </Header>
      <ScrollBox paddingValue={"12px 0 24px "}>
        <KeyImage>
          <img
            className="animate__animated animate__tada"
            src={
              "https://raw.githubusercontent.com/BuenCamino3rd/test/219dfc7cbb07418738815ae70953cd7c4497f484/image/popupkey.svg"
            }
            alt="열쇠이미지"
          />
        </KeyImage>
        <MessageCard>
          <div className="big">
            <span className=" bold">열쇠 </span>
            {/* todo - props인 keyNum로 변경*/}
            <span className=" bold roboto green">
              {keyInfo ? keyInfo.num : 0}
            </span>
            <span className=" bold green">개</span>
            <span className=" bold"> 획득!</span>
          </div>
          <span>축하드려요~</span>
          {/* todo - props인 message로 변경*/}
          <span className="bold">{keyInfo ? keyInfo.message : ""}</span>
          <span>받은 열쇠는 리워드 페이지에서</span>
          <span>상품으로 교환이 가능해요!</span>
        </MessageCard>
        <SaveBtn
          onClick={() => {
            // 사용자 키 값 변경하는 함수 실행
            history(-1);
          }}
        >
          확인
        </SaveBtn>
      </ScrollBox>
    </Container>
  );
}
const Header = styled.div`
  padding: 5px 4px;
  margin-bottom: calc(13px - 5px);
  text-align: end;
  img {
    width: 18px;
    &:hover {
      cursor: pointer;
    }
  }
`;
const KeyImage = styled.div`
  margin: 0 -20px 12px;
  img {
    width: 100%;
  }
`;
const MessageCard = styled.div`
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: var(--);
  font-family: "Pretendard-Regular";
  font-size: 16px;
  line-height: 25px;
  gap: 2px;
  margin-bottom: 25px;
  .bold {
    font-weight: 600;
    color: var(--Title_02);
  }
  .roboto {
    font-family: "Roboto";
  }
  .green {
    color: var(--a2);
  }
  .big {
    font-size: 24px;
    line-height: 38px;
    margin-bottom: 12px;
  }
`;
const SaveBtn = styled.button`
  width: 100%;
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  border-radius: 12px;
  border: none;
  background-color: var(--a2);
  color: #fff;
  font-family: "Pretendard-SemiBold";
  font-size: 16px;
  line-height: 49px;
`;
export default KeyPopUp;
