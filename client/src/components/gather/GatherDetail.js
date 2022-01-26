import React from "react";
import styled from "styled-components";
import BackHeader from "components/common/BackHeader";
import Tag from "components/common/Tag";
import CustomBtn from "./addGoal/CustomBtn";

const Container = styled.div``;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  padding: 24px 20px;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;
`;
function GatherDetail() {
  const userInfo = {
    startDate: "2020-01-10",
    endDate: "2022.12.10",
  };
  const gatherInfo = {
    category: "군적금",
    name: "320만원 모으기",
    currentAmount: 800000,
    targetAmount: 3200000,
    isCompleted: false,
    account: {
      name: "신한",
      number: "112-0330-0201",
    },
  };
  return (
    <Container>
      <BackHeader path={-1} title={gatherInfo.name} isScrolled={true} />
      <Content>
        <Tag>군적금</Tag>
        <div>
          <span>{gatherInfo.currentAmount} 원</span>
        </div>
        <div>
          {gatherInfo.account.name} {gatherInfo.account.number}
        </div>
        <div>
          {" "}
          목표금액 <span>{gatherInfo.targetAmount}</span> 원
        </div>
        <CustomBtn>입금하기</CustomBtn>
      </Content>
    </Container>
  );
}

export default GatherDetail;
