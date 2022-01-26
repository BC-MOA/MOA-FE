import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import EditTitle from "../EditTitle";
import Container from "components/common/Container";
import SubmitButton from "components/common/SubmitButton";
function EditSavingTitle({ isSubmit, setIsSubmit }) {
  const history = useNavigate();
  const startTitle = "";
  const [isInputChange, setIsInputChange] = useState(false);
  const [newTitle, setNewTitle] = useState(startTitle);
  useEffect(() => {
    if (newTitle === "") {
      setIsInputChange(false);
    } else if (newTitle !== startTitle) {
      setIsInputChange(true);
    } else {
      setIsInputChange(false);
    }
  }, [newTitle]);
  return (
    <EditSavingTitleStyle isSubmit={isSubmit}>
      <Container>
        <Header>
          <img
            onClick={() => {
              setIsSubmit(false);
            }}
            src={require("assets/ic_close.svg").default}
            alt="나가기"
          />
        </Header>
        <div className="content">
          <EditTitle
            startTitle={"zz"}
            newTitle={newTitle}
            setNewTitle={setNewTitle}
            setIsInputChange={setIsInputChange}
          />

          <SubmitButton
            title={"목표 설정 완료"}
            onClickFunc={() => {
              history("/gather");
            }}
            isActive={isInputChange}
          />
        </div>
      </Container>
    </EditSavingTitleStyle>
  );
}
const Header = styled.div`
  z-index: 100;
  padding: 5px 4px;
  margin-bottom: calc(13px - 5px);
  text-align: end;
  img {
    width: 18px;
    &:hover {
      cursor: pointer;
    }
  }
`;
const EditSavingTitleStyle = styled.div`
  display: ${(props) => {
    if (props.isSubmit) {
      return "block;";
    } else {
      return "none;";
    }
  }};
  margin: -726px -20px 0;
  height: 734px;
  box-sizing: border-box;
  padding: 8px 20px;
  z-index: 100;
  background-color: var(--Surface);
  .content {
    background-color: var(--Surface);
    z-index: 100;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export default EditSavingTitle;
