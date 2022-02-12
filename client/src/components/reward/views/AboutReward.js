import BackHeader from "components/common/BackHeader";
import ScrollBox from "components/common/ScrollBox";
import React from "react";
import styled from "styled-components";

function AboutReward() {
  return (
    <Container>
      <div className="header">
        <BackHeader path={-1} title={""} isScrolled={true} />
      </div>
      <ScrollBox paddingValue={"16px 0 0"}>
        <Title>
          <img src={require("assets/moa_logo.svg").default} alt="모아로고" />
          <div>리워드 획득 방법</div>
        </Title>
        <Devider>
          <img
            src={require("assets/reward/devider.svg").default}
            alt="구분선"
          />
        </Devider>
        <Content>
          <Tags>
            <div className="tag">군적금</div>
            <div className="tag">목표저축</div>
            <div className="tag">비상금</div>
            <img
              src={require("assets/reward/ic_add.svg").default}
              alt="더하기"
            />
            <div className="tag">챌린지</div>
          </Tags>
          <div className="content_1">
            <div className="content_line first highLight center">
              <div className="highLight">
                <div className="highLightBar"></div>
                <div className="bold">3가지 저축 활동</div>
              </div>
              <span>혹은</span>
              <div className="highLight">
                <div className="highLightBar"></div>
                <div className="bold">챌린지 참여</div>
              </div>
              <div className="content_line"></div>
              <span>를 통해</span>
            </div>
            <div className="content_line center">
              <span>열쇠를 얻게 됩니다</span>
              <img src={require("assets/ic_key_big.svg").default} alt="" />
            </div>
          </div>
          <div className="content_2">
            <div>
              <div className="content_line first left">
                <div>이렇게 모은 열쇠로</div>
              </div>
              <div className="content_line highLight left">
                <div className="highLight">
                  <div className="highLightBar"></div>
                  <div className="bold">모아박스</div>
                </div>
                <span>를 구매할 수 있으며</span>
              </div>
            </div>
            <img src={require("assets/reward/boxWithKey.png")} alt="박스" />
          </div>
          <div className="content_3">
            <img src={require("assets/reward/aboutReward.png")} alt="박스" />
            <div>
              <div className="content_line first right">
                <div>박스를 열면</div>
              </div>
              <div className="content_line highLight right">
                <div className="highLight">
                  <div className="highLightBar"></div>
                  <div className="bold">군부대 내외에서 사용가능한</div>
                </div>
              </div>
              <div className="content_line highLight right">
                <div className="highLight">
                  <div className="highLightBar"></div>
                  <div className="bold">기프티콘</div>
                </div>
                <div>을 획득하게 됩니다</div>
              </div>
            </div>
          </div>
        </Content>
        <ImgBox>
          <img
            src={require("assets/reward/리워드주의사항.png")}
            alt="리워드주의사항"
          />
        </ImgBox>
      </ScrollBox>
    </Container>
  );
}
const Container = styled.div`
  margin: -8px -20px -8px -20px;
  background: var(--Surface);
  display: flex;
  flex-direction: column;
  height: 100vh;
  .header {
    padding: 8px 20px 0;
  }
`;
const Title = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
  font-family: "Pretendard-SemiBold";
  font-size: 21px;
  line-height: 33px;
  text-align: center;
  img {
    margin-bottom: 8px;
  }
`;
const ImgBox = styled.div`
  img {
    width: 100%;
  }
`;
const Devider = styled.div`
  margin-bottom: 56px;
  img {
    width: calc(225 / 375 * 100%);
  }
`;
const Content = styled.div`
  width: fit-content;
  margin: 0 auto;
  font-family: "Pretendard-Medium";
  font-size: 16px;
  color: var(--Title_02);

  .content_1 {
    width: fit-content;
    margin: 0 auto 55px;
  }
  .content_2 {
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
  }
  .content_3 {
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 56px;
    gap: 16px;
  }
  .content_line {
    display: flex;
    align-items: center;
    gap: 4px;
    span {
      margin-bottom: -6px;
    }
    &.first {
    }
    &.center {
      justify-content: center;
    }
    &.left {
      justify-content: flex-start;
    }
    &.right {
      justify-content: flex-end;
    }
    .bold {
      font-family: "Pretendard-SemiBold";
      font-size: 18px;
      line-height: 28px;
    }
    .highLight {
      text-align: center;
      position: relative;
      padding: 0 4px;
      .highLightBar {
        position: absolute;
        bottom: 4px;
        left: 0;
        right: 0;
        background: var(--a3);
        opacity: 0.3;
        height: 10px;
        border-radius: 2px;
      }
    }
  }
`;
const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #ffffff;
  margin-bottom: 12px;
  .tag {
    padding: 0 12px;
    font-family: "Pretendard-SemiBold";
    font-size: 14px;
    line-height: 25px;
    background: var(--a2);
    border-radius: 12px;
  }
`;
export default AboutReward;
