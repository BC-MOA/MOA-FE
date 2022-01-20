import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { backButtonBox } from "style/common";
import styled from "styled-components";

function AvailableSavingItemDetail() {
  const history = useNavigate();
  const { state: item } = useLocation();
  return (
    <Container>
      <BackButton
        onClick={() => {
          history(-1);
        }}
      >
        <img
          src={require("assets/gather/ic_back.svg").default}
          alt="뒤로가기"
        />
      </BackButton>
      <SavingItemCard>
        <div className="cardHeader">
          <div className="banklogo">
            <img
              src={require(`assets/gather/ic_banklogo_${item.은행코드}.svg`)}
              alt={item.은행명}
            />
          </div>
          <span>{item.적금명}</span>
        </div>
        <CardText>
          <span>최고</span>
          <span className="cardTextBold">{item.최대금리}% (12개월)</span>
        </CardText>
        <CardText>
          <span>금액</span>
          <div className="cardTextBold">
            <div>월 20만원 이하 </div>
            <div>(전 금융기관 합산 40만원 이내)</div>
          </div>
        </CardText>
        <CardText>
          <span>기간</span>
          <span className="cardTextBold">6개월 이상 24개월 이하</span>
        </CardText>
      </SavingItemCard>
    </Container>
  );
}
const Container = styled.div`
  padding: 8px 20px;
  box-sizing: border-box;
  background: #f8f8f8;
`;
const BackButton = styled.div`
  ${backButtonBox}
  margin-bottom:12px;
`;
const SavingItemCard = styled.div`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;
  margin-bottom: 24px;
  .cardHeader {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    span {
      font-family: "Pretendard-SemiBold";
      font-size: calc(18rem / 16);
      line-height: 28px;
      color: var(--Title_01);
    }
    .banklogo {
      display: flex;
      align-items: center;
      justify-content: center;
      width: calc(48 / 375 * 100vw);
      height: calc(48 / 375 * 100vw);
      background: #edefed;
      border-radius: calc(48 / 2 / 375 * 100vw);
      margin-right: calc(12 / 375 * 100vw);
      img {
        width: calc(24 / 375 * 100vw);
      }
    }
  }
`;
const CardText = styled.div`
  display: flex;
  margin-left: calc(12 / 375 * 100vw);
  margin-bottom: 12px;
  font-family: "Pretendard-Regular";
  font-size: calc(14rem / 16);
  line-height: 22px;
  text-align: start;
  color: var(--Body_01);
  .cardTextBold {
    font-family: "Pretendard-Medium";
    font-weight: 500;
    margin-left: 24px;
    color: var(--Title_02);
  }
`;
export default AvailableSavingItemDetail;
