import styled from "styled-components";
import formatDate from "../../function/DateChanger";
import StyledLink from "components/common/StyledLink";
import kFormatter from "../../function/kFormatter";
import { MyCompete } from "store/CompeteMy";
import { useContext } from "react";

import {
  ContentBox,
  Count,
  Date,
  Thumb,
  CardDesign,
  TextBox,
  Title,
  Versus,
} from "./CardComps";

const Card = styled.div`
  ${CardDesign}
  transition: 0.1s all;

  :hover {
    opacity: 0.5;
    text-decoration: none;
  }
`;

function BasicCompeteCard({ obj }) {
  const myContext = useContext(MyCompete);
  const result = myContext.searchItem(obj.key);

  return (
    <StyledLink
      to={"/compete/" + obj.key}
      state={result.length !== 0 ? result[0] : obj}
    >
      <Card>
        <Date>{formatDate(obj.due)} 마감</Date>
        <ContentBox>
          <Thumb src={require("assets/compete/" + obj.thumb)} />
          <TextBox>
            <Title>{obj.title}</Title>
            <Versus>
              {obj.versus[0]} vs {obj.versus[1]}
            </Versus>
          </TextBox>
          <Count>{kFormatter(obj.total)}명 참여</Count>
        </ContentBox>
      </Card>
    </StyledLink>
  );
}

export default BasicCompeteCard;
