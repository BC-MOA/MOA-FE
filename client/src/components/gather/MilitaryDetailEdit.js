import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "components/common/Container";
import SubmitButton from "components/common/SubmitButton";
import EditTitle from "./EditTitle";
import ScrollBox from "components/common/ScrollBox";
function MilitaryDetailEdit() {
  const history = useNavigate();
  const startTitle = "";
  const [isInputChange, setIsInputChange] = useState(false);
  const [newTitle, setNewTitle] = useState(startTitle);
  useEffect(() => {
    if (newTitle === "") {
      setIsInputChange(false);
    } else {
      checkByte(newTitle);
    }
  }, [newTitle]);
  function checkByte(value) {
    const data = [...value];
    const totalByte = data.reduce((acc, cur) => {
      const uni_char = escape(cur);
      if (uni_char.length > 4) return acc + 2;
      else return acc + 1;
    }, 0);
    if (totalByte > 40) {
      setIsInputChange(false);
    } else {
      setIsInputChange(true);
    }
  }
  return (
    <Container>
      <Header>
        <div>
          <span
            onClick={() => {
              history(-1);
            }}
          >
            다음에 하기
          </span>
        </div>
      </Header>
      <ScrollBox>
        <Content>
          <EditTitle
            startTitle={"zz"}
            newTitle={newTitle}
            setNewTitle={setNewTitle}
            setIsInputChange={setIsInputChange}
          />
          {/* todo - 버튼 클릭시 군적금 신청 set api 호출필요 - 호출이후 gather/mili-detail로 이동*/}
          <SubmitButton
            title={"목표 설정 완료"}
            onClickFunc={() => {
              history(-1);
            }}
            isActive={isInputChange}
          />
        </Content>
      </ScrollBox>
    </Container>
  );
}
const Header = styled.div`
  z-index: 100;
  padding: 5px 4px;
  margin-bottom: calc(13px - 5px);
  text-align: end;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  line-height: 22px;
  color: var(--Body_02);
  span:hover {
    cursor: pointer;
  }
`;
const Content = styled.div`
  background-color: var(--Surface);
  z-index: 100;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default MilitaryDetailEdit;
