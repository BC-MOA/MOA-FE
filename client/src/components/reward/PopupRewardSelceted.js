import SubmitButton from "components/common/SubmitButton";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function PopupRewardSelceted({ selectedItem }) {
  const history = useNavigate();
  return (
    <ModalStyle>
      <Header>
        <img
          onClick={() => {
            history(-1);
          }}
          src={require("assets/ic_close.svg").default}
          alt="나가기"
        />
      </Header>
      <Images>
        <img
          className="animate__animated animate__tada boxImg"
          src={require("assets/reward/opendBoxWithReward.png")}
          alt=""
        />
        <img
          className="animate__animated animate__tada rewardImg"
          src={require("./example.png")}
          alt={"상품이름"}
        />
      </Images>
      <Card>
        <div className="title">{selectedItem}</div>
        <div>박스를 열어 획득한 상품은</div>
        <div className="flex">
          <span className="bold">{"내 보관함 > 상품"}</span>
          <span>에서 확인 가능해요</span>
        </div>
        <div>바코드를 통해 간편하게 결제를 해보세요</div>
      </Card>
      <StyleBtn>
        <SubmitButton
          onClickFunc={() => {
            history(-1);
          }}
          title={"확인"}
          isActive={true}
        />
      </StyleBtn>
    </ModalStyle>
  );
}
const ModalStyle = styled.div`
  flex: 1;
`;
const Header = styled.div`
  z-index: 100;
  padding: 13px 4px;
  text-align: end;
  margin-bottom: 20px;
  img {
    width: 18px;
    &:hover {
      cursor: pointer;
    }
  }
`;
const Images = styled.div`
  width: 100%;
  margin-bottom: 18px;
  .boxImg {
    width: 375px;
    margin-left: -15px;
  }
  .rewardImg {
    width: 160px;
    position: absolute;
    top: calc(177% / 734 * 100);
    left: 50%;
    margin-left: calc(-160px / 2);
  }
`;
const Card = styled.div`
  padding: 32px 40px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  line-height: 25px;
  margin-bottom: 24px;
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title {
    font-family: "Pretendard-SemiBold";
    font-size: 24px;
    line-height: 38px;
    margin-bottom: 12px;
    color: var(--Title_01);
  }
  .bold {
    font-family: "Pretendard-SemiBold";
    color: var(--Title_02);
  }
`;
const StyleBtn = styled.div`
  position: absolute;
  bottom: 24px;
  left: 0;
  right: 0;
`;
export default PopupRewardSelceted;
