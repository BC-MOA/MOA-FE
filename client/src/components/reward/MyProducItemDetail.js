import Container from "components/common/Container";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import html2canvas from "html2canvas";
import JsBarcode from "jsbarcode";

function MyProducItemDetail() {
  const { state: item } = useLocation();
  const history = useNavigate();
  const [isSaveClick, setIsSaveClick] = useState(false);
  function copy() {
    navigator.clipboard.writeText(item.barcodeNum);
  }
  // todo - 사진 저장 파일명 포맷 변경
  function SaveProductImg() {
    setTimeout(() => {
      html2canvas(document.getElementById("exportImgBox")).then((canvas) => {
        const imgUrl = canvas.toDataURL("image/png");
        const imgFileName = `${item.productName}`;
        const link = document.createElement("a");
        document.body.appendChild(link);
        link.href = imgUrl;
        link.download = imgFileName;
        link.click();
        document.body.removeChild(link);
      });
      setIsSaveClick(false);
    }, 1);
  }
  useEffect(() => {
    JsBarcode("#barcode", item.barcodeNum, {
      displayValue: false,
      background: "transparent",
      margin: 0,
    });
  }, []);
  return (
    <Container>
      <Header>
        <img
          onClick={() => {
            history(-1);
          }}
          src={require("assets/ic_close.svg").default}
          alt="나가기"
        />
      </Header>
      <div id="exportImgBox">
        <ImgCard>
          <img src={item.productImageUrl} alt={item.name} />
          <div>{item.productType}</div>
          <div className="itemName">{item.productName}</div>
        </ImgCard>
        <BarCode>
          <img id="barcode" alt="barcode" />
          <div className="barcodeDetail">
            <p>{item.barcodeNum}</p>
            <button className={isSaveClick ? "isSaveClick" : ""} onClick={copy}>
              번호복사
            </button>
          </div>
        </BarCode>
        <Detail>
          <span>교환처</span>
          <span className="bold">{item.exchangeStore}</span>
        </Detail>
        <Detail className="last">
          <span>유효기간</span>
          <span className="bold">{item.expiryDate}</span>
        </Detail>
      </div>
      <SaveBtn
        onClick={() => {
          setIsSaveClick(true);
          SaveProductImg();
        }}
      >
        교환권 저장
      </SaveBtn>
    </Container>
  );
}
const Header = styled.div`
  z-index: 100;
  padding: 5px 4px;
  text-align: end;
  img {
    width: 18px;
    &:hover {
      cursor: pointer;
    }
  }
`;
const ImgCard = styled.div`
  width: calc(280 / 335 * 100%);
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  line-height: 22px;
  color: var(--Body_01);
  margin: 23px auto 30px;
  padding: 28px 40px;
  box-sizing: border-box;
  img {
    width: calc(200 / 280 * 100%);
    margin-bottom: 12px;
  }
  .itemName {
    display: flex;
    word-wrap: wrap;
    justify-content: center;
    font-family: "Pretendard-SemiBold";
    font-size: 24px;
    line-height: 38px;
    color: var(--Title_01);
  }
`;
const BarCode = styled.div`
  margin: 0 auto 53px;
  img {
    width: calc(232 / 335 * 100%);

    height: 100px;
    margin-bottom: 12px;
  }
  .barcodeDetail {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 236px;
    margin: 0 auto;
    p {
      font-family: "Roboto";
      font-weight: 700;
      font-size: 21px;
      line-height: 33px;
      color: var(--Title_01);
      margin-right: 8px;
    }
    button {
      border: none;
      border-radius: 10px;
      padding: 3px 12px;
      background-color: var(--Body_01);
      color: #ffffff;
      font-family: "Pretendard-SemiBold";
      font-size: 14px;
      line-height: 22px;
      &.isSaveClick {
        display: none;
      }
    }
  }
`;
const Detail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Pretendard-Medium";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: var(--Body_01);
  margin: 0 30px 12px;
  &.last {
    margin: 0 30px 40px;
  }
  .bold {
    color: var(--Title_01);
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
export default MyProducItemDetail;
