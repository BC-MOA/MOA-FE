import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import BackHeader from "components/common/BackHeader";
import { styleTitle, styleSubTitle } from "style/common";
import CustomBtn from "components/gather/addGoal/CustomBtn";
import TerminationCard from "./TerminationCard";
import TerminationModal from "./TerminationModal";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  flex: 1;
  text-align: left;
  .title {
    ${styleTitle}
    margin: 12px 0;
  }
  .subTitle {
    font-family: "Pretendard-SemiBold";
    color: var(--Title_01);
    font-size: 18px;
    line-height: 28px;
  }
  .text {
    ${styleSubTitle}
    font-family: "Pretendard-Regular";
    color: var(--Body_01);
  }
  .l_space {
    margin-left: 4px;
  }
  .b_space {
    margin-bottom: 12px;
  }
`;
function MidTermTermination() {
  const { state: props } = useLocation();
  const [modal, setModal] = useState(false);

  return (
    <Container>
      <BackHeader path={-1} />
      <Content>
        <div className="title">중도해지</div>
        <TerminationCard props={props} />
        <div className="subTitle l_space b_space">유의사항</div>
        {props.savingMode === "군적금" ? (
          <div className="text l_space">
            중도해지 시, 약정한 이자율보다 낮은 중도해지 이자율이 적용되며
            비과세 및 재정 지원금 혜택을 받으실 수 없습니다. 추후 재가입이
            어려울 수 있으니 신중히 결정하시어 특별한 상황이 아니면 중도해지를
            하지 않는 것을 권장드립니다. 중도해지와 동시에 모아(MOA)열쇠는
            차감되며, 해지금액은 영업일 기준 5-7일 후 입금계좌로 입금됩니다.{" "}
          </div>
        ) : (
          <div className="text l_space">
            중도해지와 동시에 모아(MOA)열쇠는 차감되며, 해지금액은 영업일 기준
            5-7일 후 입금계좌로 입금됩니다.{" "}
          </div>
        )}
      </Content>
      <CustomBtn active={true} addFunc={() => setModal(true)}>
        중도해지 하기
      </CustomBtn>
      {modal ? <TerminationModal setModal={setModal} props={props} /> : <></>}
    </Container>
  );
}

export default MidTermTermination;
