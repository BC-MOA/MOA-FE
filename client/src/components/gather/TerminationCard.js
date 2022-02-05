import React from "react";
import styled from "styled-components";
import moment from "moment";

const Container = styled.div`
  padding: 20px;
  background-color: #fff;
  margin: 0 0 28px;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;

  .accountInfo {
    display: flex;
    margin-bottom: 26px;
    .bgIcon {
      margin-right: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      background: var(--Surface);
      border-radius: 10px;
    }
  }
  .InfoEl {
    display: flex;
    justify-content: space-between;
  }
  .InfoEl + .InfoEl {
    margin-top: 8px;
  }
  .txt_body1 {
    color: var(--Body_01);
  }
  .txt_body2 {
    color: var(--Body_02);
  }
  .txt_title2 {
    color: var(--Title_02);
    font-family: "Pretendard-Medium";
  }
  .txt_green {
    color: var(--a2);
  }
`;

function TerminationCard({ props }) {
  return (
    <Container>
      <div className="accountInfo">
        <div className="bgIcon">
          <img src={require("assets/gather/ic_banklogo_004.svg").default} />
        </div>
        <div>
          {props.category === "군적금" ? (
            <div className="subTitle">{props.account}</div>
          ) : (
            <div className="subTitle">{props.name}</div>
          )}
          <div className="text txt_body2">{"KB국민 112-0330-0201"} </div>
        </div>
      </div>
      <div className="InfoEl text">
        <div className="txt_body1">만기일</div>
        <div className="txt_title2">
          {moment(props.eDate).format("YYYY.MM.DD")}
        </div>
      </div>
      <div className="InfoEl text">
        <div className="txt_body1">납입금액</div>
        <div className="txt_title2">
          {props.currentAmount.toLocaleString()} 원
        </div>
      </div>
      <div className="InfoEl text">
        <div className="txt_body1">해지예상금액</div>
        <div className="txt_green">{800260} 원</div>
      </div>
      <div className="InfoEl text">
        <div className="txt_body1">입금계좌</div>
        <div className="txt_title2">{props.account}</div>
      </div>
    </Container>
  );
}

export default TerminationCard;
