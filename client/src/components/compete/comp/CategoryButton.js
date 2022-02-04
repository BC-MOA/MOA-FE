import styled from "styled-components";

//[styled comp] : 전체 챌린지, 내 챌린지 버튼
const Category = styled.button`
  width: 50%;
  height: 42px;
  border: none;

  border-bottom: 3px var(--Line_02) solid;
  color: var(--Line_02);
  background-color: var(--Surface);

  font-family: "Pretendard-SemiBold";
  font-size: 18px;

  transition: all 0.5s;

  :disabled {
    border-bottom: 3px var(--a2) solid;
    color: var(--a2);
  }

  :hover {
    background-color: var(--Surface);
    opacity: 0.8;
  }
`;

export default Category;
