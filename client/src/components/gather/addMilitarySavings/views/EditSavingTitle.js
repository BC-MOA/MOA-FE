import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "components/common/Container";
import SubmitButton from "components/common/SubmitButton";
import ScrollBox from "components/common/ScrollBox";
import EditTitle from "../../EditTitle";
function EditSavingTitle() {
  const history = useNavigate();
  const { state: applyData } = useLocation();
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
              history("/key", {
                state: {
                  num: 3,
                  message: "군적금에 가입하셨네요",
                  nextPath: "/gather",
                },
              });
            }}
          >
            다음에 하기
          </span>
        </div>
      </Header>
      <ScrollBox>
        <Content>
          <EditTitle
            startTitle={""}
            newTitle={newTitle}
            setNewTitle={setNewTitle}
            setIsInputChange={setIsInputChange}
          />
          <SubmitButton
            title={"목표 설정 완료"}
            onClickFunc={() => {
              // todo - 목표명 변경하는 api 호출 해야함
              // 성공시 아래코드
              history("/key", {
                state: {
                  num: 3,
                  message: "군적금에 가입하셨네요",
                  nextPath: "/gather",
                },
              });
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

export default EditSavingTitle;
