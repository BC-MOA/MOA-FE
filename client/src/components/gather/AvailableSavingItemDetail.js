import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { backButtonBox } from "style/common";
import styled from "styled-components";
import ContentControlBtn from "./ContentControlBtn";

function AvailableSavingItemDetail() {
  const controlNameList = ["상품안내", "금리이율", "안내사항"];
  const history = useNavigate();
  const { state: item } = useLocation();
  const [listControl, setListControl] = useState(controlNameList[0]);
  const [isScrolled, setIsScrolled] = useState(false);
  return (
    <Container>
      <Header className={isScrolled ? "isScrolled" : ""}>
        <div
          className="backBtn"
          onClick={() => {
            history(-1);
          }}
        >
          <img
            src={require("assets/gather/ic_back.svg").default}
            alt="뒤로가기"
          />
        </div>
        <span className={isScrolled ? "isScrolled" : ""}>{item.적금명}</span>
      </Header>
      <ScrollBox
        onScroll={(e) => {
          let scrollLocation = e.target.scrollTop;
          if (scrollLocation > 70) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        }}
      >
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
        <ContentControlBtn
          marginBottom="12px"
          listControl={listControl}
          setListControl={setListControl}
          controlNameList={controlNameList}
        ></ContentControlBtn>
        <div className="content">
          {/* todo - 이미지가 아닌 text로 변환할 것 */}
          <div>data</div>
        </div>
      </ScrollBox>
      <ApplyBtn className={isScrolled ? "isScrolled" : ""}>
        군적금 신청하기
      </ApplyBtn>
    </Container>
  );
}
const Container = styled.div`
  padding: 8px 20px;
  box-sizing: border-box;
  background: var(--Surface);
  display: flex;
  flex-direction: column;
  height: 100%;
  .content {
    width: 100%;
    min-height: 100%;
    background: #fff;
    box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
    border-radius: 12px;
  }
`;
const ScrollBox = styled.div`
  height: 100%;
  padding-top: 20px;
  padding-bottom: 24px;
  box-sizing: border-box;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  .backBtn {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    ${backButtonBox}
  }
  span {
    display: none;
  }
  .isScrolled {
    display: block;
    width: 50%;
    transform: translateX(50%);
    margin-left: calc(-20px);
    font-family: "Pretendard-semibold";
    font-size: calc(16rem / 16);
    line-height: 28px;
  }
`;
const SavingItemCard = styled.div`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;
  margin-bottom: 24px;
  background: #fff;
  box-shadow: 0px 1px 2px rgb(33 33 33 / 8%);
  border-radius: 12px;
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
      width: 48px;
      height: 48px;
      /* width: calc(48 / 375 * 100vw);
      height: calc(48 / 375 * 100vw); */
      background: #edefed;
      border-radius: calc(48px / 2);
      /* border-radius: calc(48 / 2 / 375 * 100vw); */
      margin-right: 12px;
      /* margin-right: calc(12 / 375 * 100vw); */
      img {
        width: 24px;
        /* width: calc(24 / 375 * 100vw); */
      }
    }
  }
`;
const CardText = styled.div`
  display: flex;
  /* margin-left: calc(12 / 375 * 100vw); */
  margin-left: 12px;
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
const ApplyBtn = styled.div`
  display: none;
  height: 49px;
  text-align: center;
  border-radius: 12px;
  background-color: var(--a3);

  font-family: "Pretendard-SemiBold";
  font-size: 16px;
  line-height: 49px;
  color: #fff;
  &.isScrolled {
    display: block;
  }
  :hover {
    cursor: pointer;
  }
`;
export default AvailableSavingItemDetail;
