import React from "react";
import MobileKeypad from "components/gather/safebox/MobileKeypad";
import { useLocation } from "react-router-dom";

function AdditionalDeposit() {
  const { state: props } = useLocation();

  return (
    <>
      <MobileKeypad path={"/gather/detail"} props={props} />
    </>
  );
}

export default AdditionalDeposit;
