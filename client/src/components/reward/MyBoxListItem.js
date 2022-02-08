import React, { useState } from "react";
import styled from "styled-components";
import { v1 as uuid } from "uuid";
import MyBoxOpenModal from "./MyBoxOpenModal";

function MyBoxListItem({ item }) {
  const [isOpenClick, setIsOpenClick] = useState(false);
  return (
    <MyBoxListItemStyle>
      <div className="boxContent">
        <img className="boxImage" src={item.boxImageUrl} alt={item.boxName} />
        <BoxTitle>{item.boxName}</BoxTitle>
        <BoxDescription>
          <span className="bold">[획득 가능 상품]</span>
          {item.boxDescription &&
            item.boxDescription.map((item) => <span key={uuid()}>{item}</span>)}
        </BoxDescription>
        <button
          onClick={() => {
            setIsOpenClick(true);
          }}
        >
          열기
        </button>
      </div>
      {isOpenClick && (
        <MyBoxOpenModal item={item} setIsOpenClick={setIsOpenClick} />
      )}
    </MyBoxListItemStyle>
  );
}
const BoxDescription = styled.div`
  min-height: 76px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Pretendard-Regular";
  font-size: 12px;
  line-height: 19px;
  color: var(--Body_01);
  margin-bottom: 8px;
  .bold {
    color: var(--Title_02);
  }
`;
const BoxTitle = styled.div`
  font-family: "Pretendard-SemiBold";
  font-weight: 600;
  font-size: 16px;
  line-height: 25px;
  color: var(--Title_01);
  margin-top: 12px;
  margin-bottom: 4px;
`;
const MyBoxListItemStyle = styled.div`
  width: calc((160 / 335) * 100%);
  padding: 24px 20px 16px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  min-height: 261px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;
  .boxContent {
    margin: 0 auto;
    text-align: start;
  }
  .boxImage {
    width: 100%;
  }
  button {
    border: none;
    width: 100%;
    padding: 3px 24px;
    background: var(--a2);
    border-radius: 10px;
    font-family: "Pretendard-SemiBold";
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    color: #ffffff;
  }
`;
export default MyBoxListItem;
