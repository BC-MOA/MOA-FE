import styled from "styled-components";

const Box = styled.div`
  margin-top: 200px;

  img {
    filter: grayscale(1);
  }

  p {
    font-family: Roboto;
    font-size: 16px;
    font-family: "Pretendard-Regular";
    margin-top: 15px;
  }
`;

const Empty = ({ type }) => {
  return (
    <Box>
      <img alt="none" src={require("assets/compete/empty.png")}></img>
      <p>
        {type ? "현재 진행중인 챌린지가 없어요" : "아직 참가한 챌린지가 없어요"}
      </p>
    </Box>
  );
};

export default Empty;
