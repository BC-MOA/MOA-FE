import styled from "styled-components";

function BetButton({ className, type }) {
  //차후에 API 연결
  return (
    <button className={className}>{type ? "배칭수정" : "배팅취소"}</button>
  );
}

const StyledBetButton = styled(BetButton)`
  border: none;
  border-radius: 8px;

  width: 142px;
  height: 28px;

  font-size: 14px;
  font-family: "Pretendard-SemiBold";

  background-color: var(--Line_02);

  transition: 0.5s all;

  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const BetButtonBox = styled.div`
  width: 300px;
  height: 40px;
  margin: 5px auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { BetButtonBox, StyledBetButton };
