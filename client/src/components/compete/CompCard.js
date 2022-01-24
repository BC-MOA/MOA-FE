import styled from "styled-components";
import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import "moment/locale/ko";

const Card = styled.div`
  background-color: white;
  width: 295px;
  height: 80px;
  margin: 15px 0;
  border-radius: 12px;
  padding: 10px 20px;

  transition: 0.5s all;

  :hover {
    opacity: 0.5;
  }
`;

const Date = styled.div`
  width: 108px;
  height: 19px;
  font-size: 12px;
  font-family: "Pretendard-Medium";
  color: var(--Body_01);
  margin-bottom: 5px;
`;

const ContentBox = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Thumb = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const TextBox = styled.div`
  width: 180px;
  height: 50px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 15px;
  font-family: "Pretendard-SemiBold";
  color: var(--Title_01);

  margin-bottom: 5px;
`;

const Versus = styled.div`
  font-size: 14px;
  font-family: "Pretendard-Medium";
  color: var(--Body_01);
`;

const Count = styled.div`
  width: 71px;
  height: 19px;
  background-color: rgba(76, 175, 91, 0.15);

  border-radius: 8px;
  margin-left: 5px;

  line-height: 19px;

  font-size: 12px;
  font-family: "Pretendard-Medium";
  color: var(--a2);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

//1.14 (금) 21:00
function formatDate(dateobj) {
  const month = dateobj.getMonth() + 1;
  const date = dateobj.getDate();
  //요일
  const dow = dateobj.toLocaleString("ko-KR", { weekday: "short" });

  const hour = dateobj.getHours();
  const min = (dateobj.getMinutes() < 10 ? "0" : "") + dateobj.getMinutes();

  const result = `${month}.${date} (${dow}) ${hour}:${min}`;

  return result;
}

function CompCard(props) {
  const obj = props.obj;

  //월 일 요일 시간
  return (
    <StyledLink to={"/compete/" + obj.key} state={{ info: obj }}>
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
          <Count>{obj.total}명 참여</Count>
        </ContentBox>
      </Card>
    </StyledLink>
  );
}

export default CompCard;
