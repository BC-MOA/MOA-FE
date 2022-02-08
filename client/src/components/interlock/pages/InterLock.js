import React, { useState } from "react";
import AccountFound from "../comp/AccountFound";
import AccountInfo from "../comp/AccountInfo";
import SetGoal from "../comp/SetGoal";
import { data_case1, data_case2, data_case3, user_data } from "../data";

//계좌 정보 설정 변경
const account_data = data_case2;

const InterLock = () => {
  const [step, setStep] = useState(1);

  const setStepWrapper = (input) => {
    setStep(input);
  };

  return (
    <div>
      {step === 1 && (
        <AccountFound
          func={setStepWrapper}
          name={user_data.name}
          count={
            account_data.account_deposit.length +
            account_data.account_install.length
          }
        ></AccountFound>
      )}
      {step === 2 && (
        <AccountInfo
          depo_list={account_data.account_deposit}
          ins_list={account_data.account_install}
          func={setStepWrapper}
        ></AccountInfo>
      )}
      {step === 3 && (
        <SetGoal name="민수" ins_list={account_data.account_install}></SetGoal>
      )}
    </div>
  );
};

export default InterLock;
