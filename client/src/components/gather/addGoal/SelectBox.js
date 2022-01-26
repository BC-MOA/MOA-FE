import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { GoalContext } from "./Goal";

const Box = styled.div`
  display: flex;
`;

const BoxEl = styled.div`
  flex-basis: 100%;
  border: 1.5px solid #e5e5e5;
  box-sizing: border-box;
  background-color: #fff;
  color: #c5c5c5;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  padding: 10px 0;

  &:first-child {
    border-radius: 8px 0 0 8px;
  }
  &:last-child {
    border-radius: 0 8px 8px 0;
  }
  & + & {
    margin-left: -1.5px;
  }

  ${({ isSelected }) =>
    isSelected === true &&
    css`
      color: var(--a2);
      border: 1.5px solid var(--a2);
      z-index: 1;
    `}
`;

function SelectBoxEl({ children }) {
  const { inputs, setInputs } = useContext(GoalContext);

  return (
    <Box>
      {children.map((x, idx) => (
        <BoxEl
          onClick={(e) =>
            setInputs({
              ...inputs,
              [e.target.className]: e.target.innerText,
            })
          }
          key={idx}
          isSelected={inputs[x.props.className] === x.props.children}
        >
          {x}
        </BoxEl>
      ))}
    </Box>
  );
}

export default SelectBoxEl;
