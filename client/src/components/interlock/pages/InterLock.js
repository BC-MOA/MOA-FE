import React, { useState, useContext } from "react";
import AccountFound from "../comp/AccountFound";
import AccountInfo from "../comp/AccountInfo";
import SetGoal from "../comp/SetGoal";
import { UserData } from "store/User";
import { UserAccount } from "store/UserAccount";

const InterLock = () => {
  const [step, setStep] = useState(1);

  const setStepWrapper = (input) => {
    setStep(input);
  };

  const account_data = useContext(UserAccount).userAccount;

  const User = useContext(UserData);
  const userData = User.userData;

  return (
    <div>
      {step === 1 && (
        <AccountFound
          func={setStepWrapper}
          name={userData.name}
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
        <SetGoal
          name={userData.name}
          ins_list={account_data.account_install}
        ></SetGoal>
      )}
    </div>
  );
};

export default InterLock;
