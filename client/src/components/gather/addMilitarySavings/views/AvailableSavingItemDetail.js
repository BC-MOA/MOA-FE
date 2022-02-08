import BackHeader from "components/common/BackHeader";
import Container from "components/common/Container";
import ScrollBox from "components/common/ScrollBox";
import SubmitButton from "components/common/SubmitButton";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ContentControlBtn from "../../../common/ContentControlBtn";
import { v1 as uuid } from "uuid";
const controlNameList = ["상품안내", "금리이율", "유의사항"];
const imgList = [
  "https://github.com/BuenCamino3rd/test/blob/main/image/%EA%B5%B0%EC%A0%81%EA%B8%88%EC%83%81%ED%92%88%EC%95%88%EB%82%B4.png?raw=true",
  "https://github.com/BuenCamino3rd/test/blob/main/image/%EA%B5%B0%EC%A0%81%EA%B8%88%EA%B8%88%EB%A6%AC%EC%9D%B4%EC%9C%A8.png?raw=true",
  "https://github.com/BuenCamino3rd/test/blob/main/image/%EA%B5%B0%EC%A0%81%EA%B8%88%EC%9C%A0%EC%9D%98%EC%82%AC%ED%95%AD.png?raw=true",
];

function AvailableSavingItemDetail() {
  const { state: savingData } = useLocation();
  const [listControl, setListControl] = useState(controlNameList[0]);
  const [isScrolled, setIsScrolled] = useState(false);
  const history = useNavigate();

  return (
    <Container>
      <BackHeader
        path={-1}
        title={`${savingData.bank.bankName} ${savingData.productName}`}
        isScrolled={isScrolled}
      ></BackHeader>
      <ScrollBox
        paddingValue={"12px 0 24px"}
        onScrollFunc={(e) => {
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
                src={savingData.bank.bankImageUrl}
                alt={savingData.bank.bankName}
              />
            </div>
            <span>
              {savingData.bank.bankName} {savingData.productName}
            </span>
          </div>
          <CardText>
            <span>최고</span>
            <span className="cardTextBold">
              {savingData.highestInterest.toFixed(1)}% (12개월)
            </span>
          </CardText>
          <CardText>
            <span>금액</span>
            <div className="cardTextBold">
              <div>{savingData.amountExplanation.split("/n/r")[0]} </div>
              <div>{savingData.amountExplanation.split("/n/r")[1]}</div>
            </div>
          </CardText>
          <CardText>
            <span>기간</span>
            <span className="cardTextBold">{savingData.subscriptionLimit}</span>
          </CardText>
        </SavingItemCard>
        <ContentControlBtn
          btnGap="20px"
          marginBottom="12px"
          listControl={listControl}
          setListControl={setListControl}
          controlNameList={controlNameList}
        ></ContentControlBtn>
        <Content>
          {controlNameList &&
            controlNameList.map((item, index) => (
              <div
                key={uuid()}
                className={
                  controlNameList[index] === listControl ? "isSelect" : ""
                }
              >
                <img src={imgList[index]} alt={item} />{" "}
              </div>
            ))}
        </Content>
      </ScrollBox>
      <SubmitButton
        title={"군적금 신청하기"}
        onClickFunc={() => {
          history("term", {
            state: savingData,
          });
        }}
        isActive={true}
      />
    </Container>
  );
}
const Content = styled.div`
  width: 100%;
  min-height: 100%;
  div {
    display: none;
  }
  img {
    width: 100%;
  }
  .isSelect {
    display: block;
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

export default AvailableSavingItemDetail;
