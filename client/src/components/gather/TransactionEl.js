import React from "react";
import styled from "styled-components";
import StoreSvg from "components/gather/addGoal/StoreSvg";

const Container = styled.div`
  .date {
    font-family: "Pretendard-Regular";
    color: var(--Title_01);
    text-align: left;
    font-size: 14px;
    line-height: 22px;
    margin: 0 0 4px 4px;
  }

  margin-bottom: 16px;
`;
const TranEl = styled.div`
  display: flex;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;
`;
const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    flex-direction: column;
    text-align: left;
    .name {
      font-family: "Pretendard-Regular";
      color: var(--Title_02);
      font-weight: normal;
      font-size: 16px;
      line-height: 25px;
    }
    .time {
      font-family: "Roboto";
      color: var(--Body_01);
      font-weight: normal;
      font-size: 12px;
      line-height: 19px;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .amount {
      display: flex;
      gap: 2px;
      font-family: "Pretendard-SemiBold";
      color: var(--Title_01);
      font-size: 18px;
      line-height: 28px;
    }
    .total {
      display: flex;
      gap: 2px;
      font-family: "Pretendard-Regular";
      color: var(--Body_02);
      font-size: 14px;
      line-height: 22px;
    }
  }
  .bold {
    font-weight: 700;
  }
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  width: 48px;
  height: 48px;
  background: #edefed;
  border-radius: 50%;

  path {
    stroke: #212121;
  }
`;

function TransactionEl({ lists, children }) {
  return (
    <Container>
      <div className="date">{children}</div>
      {lists.map((x, idx) => (
        <TranEl key={idx}>
          <Icon>
            <StoreSvg category="휴가비" />
          </Icon>
          <Content>
            <div className="left">
              <span className="name">{x.name}</span>
              <span className="time">{x.time}</span>
            </div>
            <div className="right">
              <div className="amount">
                <span className="number bold">
                  {Number(x.amount) > 0 ? `+${x.amount}` : `${x.amount}`}
                </span>
                원
              </div>
              <div className="total">
                <span className="number">{x.total.toLocaleString()}</span>원
              </div>
            </div>
          </Content>
        </TranEl>
      ))}
    </Container>
  );
}

export default TransactionEl;
