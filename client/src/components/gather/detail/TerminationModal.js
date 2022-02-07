import React from "react";
import styled from "styled-components";
import CustomBtn from "components/gather/addGoal/CustomBtn";
import { ReactComponent as CloseBtn } from "assets/ic_close.svg";
import { styleTitle, styleModal, styleModalBackground } from "style/common";

const Background = styled.div`
  ${styleModalBackground}
`;
const ModalBox = styled.div`
  ${styleModal}

  div {
    text-align: left;
    ${styleTitle}
  }
  .emphasis {
    font-size: 18px;
    line-height: 28px;
    color: var(--a3);
    margin: 12px 0 36px;
  }
  .btns {
    display: flex;
    gap: 15px;
  }
`;

function TerminationModal({ setModal, props }) {
  return (
    <Background>
      <ModalBox>
        <div>
          {props.savingMode === "군적금"
            ? props.account.productName
            : props.goalName}
          을
        </div>
        <div>중도해지하시겠어요?</div>
        <div className="emphasis">중도해지는 철회가 불가능합니다. </div>
        <div className="btns">
          <CustomBtn
            active={true}
            bgcolor={"var(--Line_03)"}
            txtcolor={"var(--Title_02)"}
            addFunc={() => setModal(false)}
          >
            취소하기
          </CustomBtn>
          <CustomBtn active={true} path={"check-password"} data={props}>
            해지하기
          </CustomBtn>
        </div>
        <CloseBtn className="closeBtn" onClick={() => setModal(false)} />
      </ModalBox>
    </Background>
  );
}

export default TerminationModal;
