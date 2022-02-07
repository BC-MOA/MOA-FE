import React, { useState } from "react";
import AccountFound from "../comp/AccountFound";
import AccountInfo from "../comp/AccountInfo";
import SetGoal from "../comp/SetGoal";

const data = {
  account_deposit: [
    {
      key: "a1",
      account: "KB나라사랑우대통장",
      thumb: require("assets/profile/bank.png"),
      sum: 500000,
      bank: "KB국민은행",
    },
  ],
  account_install: [
    {
      key: "a2",
      account: "KB장병내일준비적금",
      thumb: require("assets/profile/bank.png"),
      sum: 500000,
      bank: "KB국민은행",
    },
    {
      key: "a3",
      account: "IBK군인적금",
      thumb: require("assets/profile/bank.png"),
      sum: 500000,
      bank: "IBK기업은행",
    },
  ],
};

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
          name="민수"
          count={3}
        ></AccountFound>
      )}
      {step === 2 && (
        <AccountInfo
          depo_list={data.account_deposit}
          ins_list={data.account_install}
          func={setStepWrapper}
        ></AccountInfo>
      )}
      {step === 3 && (
        <SetGoal name="민수" ins_list={data.account_install}></SetGoal>
      )}
    </div>
  );
};

export default InterLock;
