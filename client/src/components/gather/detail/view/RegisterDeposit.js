import React, { useState } from "react";
import styled from "styled-components";
import BackHeader from "components/common/BackHeader";
import { styleTitle, styleSubTitle, styleNotice } from "style/common";
import { useLocation } from "react-router-dom";
import CustomInput from "components/common/CustomInput";
import CustomBtn from "components/gather/addGoal/CustomBtn";
import SelectBox from "components/gather/addGoal/SelectBox";
import { accountList } from "components/common/dummyData";

const Container = styled.div`
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
    margin: 12px 0 16px;
    &.bottomMargin {
      margin-bottom: 4px;
    }
  }
  .subTitle {
    ${styleSubTitle}
    padding: 0 0 4px 4px;
  }
  .subNotice {
    display: flex;
    flex-wrap: wrap;
    ${styleNotice}
    padding: 8px 0 0 4px;
  }
  .noPaddingBottomMargin {
    padding: 0;
    margin-bottom: 24px;
  }
  .l_space {
    margin-left: 4px;
  }
  .r_space {
    margin-right: 4px;
  }
  span {
    color: var(--Title_02);
  }
`;
const InputEl = styled.div`
  margin-bottom: 24px;
`;

function RegisterDeposit() {
  const { state: props } = useLocation();
  const prev = props;

  const [newInputs, setNewInputs] = useState({
    ...props,
    depositMethod: "자동이체",
    amountPerCycle: 0,
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setNewInputs({
      ...newInputs,
      [name]: name === "amountPerCycle" ? Number(value) : value,
    });
  };

  const isEdited = () => {
    const editableEls =
      props.savingMode === "군적금"
        ? ["amountPerCycle"]
        : ["limitCycle", "amountPerCycle"];
    return (
      editableEls.filter(
        (x) => !["", 0].includes(newInputs[x]) && newInputs[x] !== prev[x]
      ).length === editableEls.length
    );
  };

  return (
    <Container>
      <BackHeader path={-1} />
      <Content>
        <div
          className={
            props.savingMode === "군적금" ? "title bottomMargin" : "title"
          }
        >
          자동이체 등록
        </div>
        {props.savingMode === "군적금" ? (
          <div className="subNotice noPaddingBottomMargin">
            <span>자동이체</span>하시면,{" "}
            <span className="l_space">국군재정단</span>이 적금 통장에{" "}
            <span className="l_space">매달 이체</span>를 해주고{" "}
            <span className="l_space">차액</span>은
            <span className="l_space">월급으로 입금</span>됩니다.
          </div>
        ) : (
          <InputEl>
            <div className="subTitle">이체 주기</div>
            <SelectBox
              name="limitCycle"
              inputs={newInputs}
              setInputs={setNewInputs}
            >
              <div>매월 10일</div>
              <div>매주 월요일</div>
              <div>매일</div>
            </SelectBox>
          </InputEl>
        )}
        <InputEl>
          <div className="subTitle">
            {props.savingMode === "군적금" ? "월 납입액" : "납입액"}
          </div>
          <CustomInput
            type="number"
            unit="원"
            name="amountPerCycle"
            placeholder={
              props.savingMode === "군적금"
                ? "월 납입액을 입력해주세요."
                : "정기적으로 넣을 금액을 입력해주세요."
            }
            value={
              newInputs.amountPerCycle === 0 ? "" : newInputs.amountPerCycle
            }
            onChange={onChange}
          />
          {props.savingMode === "군적금" ? (
            <div className="subNotice">
              <span>1</span>만원부터 <span className="l_space">20</span>만원까지
              납입할 수 있습니다
            </div>
          ) : (
            <></>
          )}
        </InputEl>
        <InputEl>
          <div className="subTitle">출금계좌</div>
          <CustomInput
            disabled={true}
            value={
              accountList.find((x) => x.bankName === newInputs.account.bankName)
                .accountName
            }
          />
        </InputEl>
      </Content>

      <CustomBtn
        path={"complete"}
        data={{ prev: prev, newInputs: newInputs, whatEdit: "register" }}
        active={isEdited()}
      >
        자동이체 등록
      </CustomBtn>
    </Container>
  );
}

export default RegisterDeposit;
