import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function AvailableSavingItem({ item }) {
  const history = useNavigate();
  return (
    <SavingItemBox
      onClick={() => {
        history(`/gather/add-militarySaving/${item.은행명}`);
      }}
      className="item"
    >
      {/* 로고 */}
      <div className="banklogo">
        <img
          src={require(`assets/gather/ic_banklogo_${item.은행코드}.svg`)}
          alt={item.은행명}
        />
      </div>
      {/* 상품이름 및 기본금리*/}
      <div className="savingInfo">
        <span className="savingName">{item.적금명}</span>
        <span className="savingRate">
          기본 {item.기본금리.toFixed(1)}% (12개월)
        </span>
      </div>
      {/* 최대금리 */}
      <div className="savingMaxRate">
        <span className="maxRateNum">{item.최대금리.toFixed(1)}%</span>
        <span>최대금리</span>
      </div>
    </SavingItemBox>
  );
}
export default AvailableSavingItem;

const SavingItemBox = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 16px;
  box-sizing: border-box;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;
  :hover {
    cursor: pointer;
  }
  .banklogo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(48 / 375 * 100vw);
    height: calc(48 / 375 * 100vw);
    background: #edefed;
    border-radius: calc(48 / 2 / 375 * 100vw);
    img {
      width: calc(24 / 375 * 100vw);
    }
  }
  .savingInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 12px;
    flex-grow: 1;
    .savingName {
      font-family: "Pretendard-Medium";
      font-size: calc(16rem / 16);
      line-height: 25px;
      margin-bottom: 2px;
      color: var(--Title_02);
    }
    .savingRate {
      font-family: "Pretendard-Regular";
      font-size: calc(14rem / 16);
      line-height: 22px;
      color: var(--Body_01);
    }
  }

  .savingMaxRate {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: var(--a2);
    .maxRateNum {
      font-family: "Roboto";
      font-size: calc(18rem / 16);
      font-weight: 700;
      line-height: 28px;
    }
    span {
      font-family: "Pretendard-Regular";
      font-size: calc(14rem / 16);
      line-height: 22px;
    }
  }
`;
