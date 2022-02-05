import React from "react";
import styled from "styled-components";
import { ReactComponent as CloseBtn } from "assets/ic_close.svg";
import { styleModal, styleModalBackground } from "style/common";

const Background = styled.div`
  ${styleModalBackground}
`;
const ModalBox = styled.div`
  ${styleModal}
  div {
    text-align: left;
    &:first-child {
      font-family: "Pretendard-SemiBold";
      font-size: 21px;
      line-height: 33px;
      color: var(--Title_01);
      margin-bottom: 12px;
    }
    &:not(:first-child) {
      padding: 14px 0;
      cursor: pointer;
    }
    font-family: "Pretendard-Regular";
    font-style: normal;
    font-size: 16px;
    line-height: 25px;
    color: var(--Title_02);
  }
`;

function AccountModal({ setModal, props, setAccount }) {
  return (
    <Background>
      <ModalBox>
        <div>출금계좌</div>
        {props.map((x, idx) => (
          <div
            key={idx}
            value={x.accountName}
            onClick={() => {
              setAccount(x);
              setModal(false);
            }}
          >
            {x.bank}
          </div>
        ))}
        <CloseBtn className="closeBtn" onClick={() => setModal(false)} />
      </ModalBox>
    </Background>
  );
}

export default AccountModal;
