import React from "react";
import styled from "styled-components";

function EditTitle({ startTitle, newTitle, setNewTitle, setIsInputChange }) {
  return (
    <EditTitleStyle>
      <div className="title">
        <div>민수님!</div>
        <div>군적금을 통해 무엇을 하고 싶나요?</div>
      </div>
      <input
        value={newTitle}
        onChange={(e) => {
          setNewTitle(e.target.value);
        }}
        placeholder="목표를 입력해주세요"
        type="text"
      />
      <div className="example">
        예) 1000만원 모으기, 해외여행 가기, 학비로 사용하기
      </div>
    </EditTitleStyle>
  );
}
const EditTitleStyle = styled.div`
  z-index: 100;
  background-color: var(--Surface);
  .title {
    font-family: "Pretendard-SemiBold";
    font-weight: 600;
    font-size: 21px;
    line-height: 33px;
    text-align: start;
    margin-bottom: 24px;
    margin-left: 4px;
  }
  input {
    box-sizing: border-box;
    width: 100%;
    padding: 6px 10px;
    font-family: "Pretendard-Regular";
    border: none;
    font-size: 16px;
    line-height: 25px;
    background: #ffffff;
    border-radius: 8px;
    margin-bottom: 8px;
    color: var(--Title_01);
    &::placeholder {
      color: var(--Line_01);
    }
  }
  .example {
    margin-left: 4px;
    width: 100%;
    text-align: start;
    font-size: 14px;
    line-height: 22px;
    color: var(--Body_01);
  }
`;
export default EditTitle;
