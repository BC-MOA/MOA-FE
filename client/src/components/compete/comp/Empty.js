import styled from "styled-components";

const Box = styled.div`
  margin-top: 100px;

  p {
    font-family: Roboto;
    font-size: 20px;
    font-family: "Pretendard-Regular";
    font-weight: 500;
    margin-top: 15px;
  }
`;

const Empty = ({ type }) => {
  return (
    <Box>
      <img alt="none" src={require("assets/compete/empty.png")}></img>
      <p>
        {type
          ? "아직 등록된 챌린지가 없습니다!"
          : "아직 참가한 챌린지가 없습니다!"}
      </p>
    </Box>
  );
};

export default Empty;
