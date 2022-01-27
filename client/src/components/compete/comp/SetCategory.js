import styled from "styled-components";

//필터-전체 챌린지 필터/정렬
const SetType = styled.div`
  height: 50px;
  padding: 12px 20px 0px;

  display: flex;
  align-items: center;
  background-color: var(--Surface);
`;

const Type = styled.button`
  display: inline-block;
  height: 25px;
  margin-right: 20px;

  border: none;
  border-radius: 3px;

  font-family: "Pretendard-SemiBold";
  font-size: 16px;
  color: var(--Body_02);
  background-color: var(--Surface);

  :disabled {
    color: var(--Title_01);
    background: linear-gradient(0deg, var(--a3) 40%, var(--Surface) 0%);
  }

  :hover {
    background-color: var(--Line_02);
  }
`;

export { SetType, Type };
