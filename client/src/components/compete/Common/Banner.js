import styled from "styled-components";
import { Link } from "react-router-dom";

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
