import styled from "styled-components";

//버튼 컨테이너
const StyledBetButton = styled.button`
  border: none;
  border-radius: 8px;
  width: 142px;
  height: 28px;
  font-size: 14px;
  font-family: "Pretendard-SemiBold";
  background-color: var(--Surface);

  transition: 0.5s all;
  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

//버튼
const StyledBetButtonBox = styled.div`
  width: 300px;
  height: 40px;
  margin: 5px auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${StyledBetButton}:nth-child(1) {
    color: var(--a5);
  }

  ${StyledBetButton}:nth-child(2) {
    color: var(--alert);
  }
`;

export { StyledBetButtonBox, StyledBetButton };
