import Container from "components/common/Container";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
const BARCODE_URL = process.env.REACT_APP_BARCODE;

function MyProducItemDetail() {
  const { state } = useLocation();
  const history = useNavigate();
  const item = state.item;
  const barCodeNum = 1234567890;
  function copy() {
    navigator.clipboard.writeText(barCodeNum);
  }
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
        {/* todo item의 이미지로 변경할 것 */}
      </Header>
      <ImgCard>
        <img src={require("./example.png")} alt={item.name} />
        <div>px 간식</div>
        <div className="itemName">{item.name}</div>
      </ImgCard>
      {/* todo 바코드 text변경하기*/}
      <BarCode>
        <img
          src={`${BARCODE_URL}?bcid=code128&text=${barCodeNum}`}
          alt="barcode"
        />
        <div className="barcodeDetail">
          <p>{barCodeNum}</p>
          <button onClick={copy}>번호복사</button>
        </div>
      </BarCode>
      {/* 교환처 */}
      {/*  유효기간*/}
      {/* 버튼 */}
    </Container>
  );
}
const Header = styled.div`
  z-index: 100;
  padding: 5px 4px;
  margin-bottom: calc(28px - 5px);
  text-align: end;
  img {
    width: 18px;
    &:hover {
      cursor: pointer;
    }
  }
`;
const ImgCard = styled.div`
  width: 280px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  line-height: 22px;
  color: var(--Body_01);
  margin: 0 auto 30px;
  padding: 28px 40px;
  box-sizing: border-box;
  img {
    width: 200px;
    margin-bottom: 12px;
  }
  .itemName {
    font-family: "Pretendard-SemiBold";
    font-size: 24px;
    line-height: 38px;
    color: var(--Title_01);
  }
`;
const BarCode = styled.div`
  margin: 0 auto;
  img {
    width: 232px;
    height: 100px;
    margin-bottom: 12px;
  }
  .barcodeDetail {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-family: "Roboto";
      font-weight: 700;
      font-size: 21px;
      line-height: 33px;
      color: var(--Title_01);
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
    }
  }
`;
export default MyProducItemDetail;
