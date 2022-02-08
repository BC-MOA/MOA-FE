import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { styleTitle, styleSubTitle } from "style/common";
import CustomBtn from "components/gather/addGoal/CustomBtn";
import { useLocation } from "react-router-dom";
import moment from "moment";
import { GatherList } from "store/GatherListContext";

const styleText = css`
  ${styleSubTitle}
  font-family: "Pretendard-Regular";
  color: var(--Body_01);
  padding-top: 8px;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 112px;
  box-sizing: border-box;

  .Title {
    ${styleTitle}
    margin-top: 12px;
    font-size: 24px;
    line-height: 38px;
  }
`;

const Content = styled.div`
  padding-bottom: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  z-index: 1;

  .check {
    width: 72px;
    height: 72px;
    margin: 0 auto;
  }
`;

const CheckInfo = styled.div`
  position: relative;
  padding: 20px 24px;
  margin-top: 92px;
  background: #fff;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;

  .character {
    position: absolute;
    top: -62px;
    right: 16px;
    z-index: -1;
  }

  .Text {
    ${styleText}

    &:first-child {
      padding-top: 0;
    }

    .bold {
      color: var(--Title_02);
      font-family: "Pretendard-Medium";
      &.green {
        color: var(--a2);
      }
    }
  }
`;

const InfoEl = styled.div`
  display: flex;
  justify-content: space-between;
`;

function EditComplete() {
  const { state } = useLocation();
  const { prev, newInputs, whatEdit } = state;
  const { setGatherList } = useContext(GatherList);

  const editCates = {
    goal: "목표를 수정했어요",
    deposit: `${
      newInputs.depositMethod === "자동이체"
        ? newInputs.savingMode === "군적금"
          ? "월 납입액을 변경했어요"
          : "자동이체 내용을 변경했어요"
        : "자유입금으로 변경했어요"
    }`,
    register: "자동이체를 등록했어요",
  };

  return (
    <Container>
      <Content>
        <img
          alt="성공"
          className="check animate__animated animate__flipInX"
          src={require("assets/goal/check.svg").default}
          data-micron="bounce"
        />
        <div className="Title">{editCates[whatEdit]}</div>

        <CheckInfo>
          {whatEdit === "goal" &&
            (newInputs.savingMode === "군적금" ? (
              <InfoEl className="Text">
                <div>군적금 이름</div>
                <div className="bold">{newInputs.account.productName}</div>
              </InfoEl>
            ) : (
              <>
                <InfoEl className="Text">
                  <div>목표 이름</div>
                  <div className="bold">{newInputs.goalName}</div>
                </InfoEl>
                <InfoEl className="Text">
                  <div>목표 날짜</div>
                  <div className="bold">
                    {moment(newInputs.eDate).format("YYYY.MM.DD")}
                  </div>
                </InfoEl>
                <InfoEl className="Text">
                  <div>목표 금액</div>
                  <div className="bold">
                    {newInputs.goalAmount.toLocaleString()} 원
                  </div>
                </InfoEl>
              </>
            ))}
          {whatEdit === "deposit" &&
            (newInputs.savingMode === "목표" ? (
              newInputs.depositMethod === "자동이체" ? (
                <>
                  <InfoEl className="Text">
                    <div>자동이체</div>
                    <div className="bold">{newInputs.limitCycle}</div>
                  </InfoEl>
                  <InfoEl className="Text">
                    <div>금액</div>
                    <div className="bold green">
                      {newInputs.amountPerCycle.toLocaleString()} 원
                    </div>
                  </InfoEl>
                  <InfoEl className="Text">
                    <div>출금계좌</div>
                    <div className="bold">{newInputs.account.bankName}</div>
                  </InfoEl>
                </>
              ) : (
                <>
                  <InfoEl className="Text">
                    <div>이체 방식</div>
                    <div className="bold">{newInputs.depositMethod}</div>
                  </InfoEl>
                  <InfoEl className="Text">
                    <div>출금계좌</div>
                    <div className="bold">{newInputs.account.bankName}</div>
                  </InfoEl>
                </>
              )
            ) : (
              <>
                <InfoEl className="Text">
                  <div>군적금 이름</div>
                  <div className="bold">{newInputs.account.productName}</div>
                </InfoEl>
                <InfoEl className="Text">
                  <div>적금방식</div>
                  <div className="bold">{newInputs.depositMethod}</div>
                </InfoEl>
                {newInputs.depositMethod === "자동이체" ? (
                  <InfoEl className="Text">
                    <div>월 납입액</div>
                    <div className="bold green">
                      {newInputs.amountPerCycle.toLocaleString()} 원
                    </div>
                  </InfoEl>
                ) : (
                  <InfoEl className="Text">
                    <div>출금계좌</div>
                    <div className="bold">{newInputs.account.bankName}</div>
                  </InfoEl>
                )}
              </>
            ))}
          {whatEdit === "register" &&
            (newInputs.savingMode === "군적금" ? (
              <>
                <InfoEl className="Text">
                  <div>군적금 이름</div>
                  <div className="bold">{newInputs.account.productName}</div>
                </InfoEl>
                <InfoEl className="Text">
                  <div>적금방식</div>
                  <div className="bold">{newInputs.depositMethod}</div>
                </InfoEl>
                <InfoEl className="Text">
                  <div>월 납입액</div>
                  <div className="bold">
                    {newInputs.amountPerCycle.toLocaleString()}
                  </div>
                </InfoEl>
              </>
            ) : (
              <>
                <InfoEl className="Text">
                  <div>자동이체</div>
                  <div className="bold">{newInputs.limitCycle}</div>
                </InfoEl>
                <InfoEl className="Text">
                  <div>금액</div>
                  <div className="bold green">
                    {newInputs.amountPerCycle.toLocaleString()} 원
                  </div>
                </InfoEl>
                <InfoEl className="Text">
                  <div>출금계좌</div>
                  <div className="bold">{newInputs.account.bankName}</div>
                </InfoEl>
              </>
            ))}
          <img
            className="character"
            src={require("assets/army_character.svg").default}
            alt="character"
          />
        </CheckInfo>
      </Content>
      <CustomBtn
        addFunc={() =>
          setGatherList((prevList) =>
            prevList.map((x) => (x.goalName === prev.goalName ? newInputs : x))
          )
        }
        active={true}
        path="/gather/detail"
        data={newInputs}
      >
        확인
      </CustomBtn>
    </Container>
  );
}

export default EditComplete;
