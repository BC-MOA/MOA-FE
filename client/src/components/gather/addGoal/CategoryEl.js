import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { GoalContext } from "./Goal";
import StoreSvg from "./StoreSvg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  cursor: pointer;

  .name {
    width: fit-content;
    font-family: "Pretendard-Regular";
    font-size: 12px;
    line-height: 19px;
    color: var(--Body_01);
    margin-top: 2px;
  }
`;
const ElBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #edefed;
  border-radius: 10.2698px;

  ${({ selected }) =>
    selected &&
    css`
      background-color: #4caf5b26;

      path.main {
        fill: var(--a2);
      }
    `}
`;

function CategoryEl({ El }) {
  const { en_Name, kr_Name } = El;
  const { inputs, setInputs } = useContext(GoalContext);
  const isSelected = inputs.category === El.kr_Name;

  return (
    <Container
      onClick={(e) => {
        setInputs({
          ...inputs,
          category: e.currentTarget.children[1].innerText,
        });
      }}
    >
      <ElBox selected={isSelected} name={kr_Name}>
        <StoreSvg en_Name={en_Name} />
      </ElBox>
      <div className="name">{kr_Name}</div>
    </Container>
  );
}

export default CategoryEl;
