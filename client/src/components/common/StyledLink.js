import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  transition: 0.5s all;
  :hover {
    opacity: 0.5;
  }
`;

export default StyledLink;
