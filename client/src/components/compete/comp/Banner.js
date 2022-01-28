import styled from "styled-components";
import { Link } from "react-router-dom";

//Swiper에 들어가는 Banner 컴포넌트
const Img = styled.img`
  width: 100%;
  height: 100%;
`;

function Banner(props) {
  return (
    <Link to={props.to}>
      <Img src={props.src}></Img>
    </Link>
  );
}

export default Banner;
