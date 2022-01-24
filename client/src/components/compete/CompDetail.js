import { useLocation } from "react-router-dom";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  width: 375px;
  height: 44px;
  background-color: yellow;
`;

//배팅 카드

//

function CompDetail(props) {
  const { state } = useLocation();

  console.log(state);

  return <ButtonWrapper>뒤로가기</ButtonWrapper>;
}

export default CompDetail;
