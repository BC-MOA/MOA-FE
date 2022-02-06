import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledLinkButton = styled.div`
  width: 90%;
  height: 49px;
  background-color: ${({ trans }) => (trans ? "#f8f8f8" : "white")};

  border-radius: 12px;
  margin: 12px 0;
  padding: 0 5%;

  font-family: "Pretendard-Medium";
  color: ${({ trans }) => (trans ? "#888888" : "#212121")};
  font-size: 16px;

  display: flex;
  justify-content: space-between;

  align-items: center;

  img {
    width: 16px;
    display: ${({ trans }) => (trans ? "none" : "block")};
  }

  transition: 1s all;
  :hover {
    opacity: 0.5;
    background-color: var(--Body_04);
  }
`;

function LinkButton({ title, to, trans }) {
  const navigate = useNavigate();

  return (
    <StyledLinkButton trans={trans} onClick={() => navigate("/" + to)}>
      <div>{title}</div>
      <img alt="none" src={require("assets/profile/ic.svg").default}></img>
    </StyledLinkButton>
  );
}

export default LinkButton;
