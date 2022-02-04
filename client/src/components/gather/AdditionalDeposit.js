import React from "react";
import MobileKeypad from "components/gather/safebox/MobileKeypad";
import { useLocation } from "react-router-dom";

function AdditionalDeposit() {
  const { state: props } = useLocation();

  return (
    <>
      {/* Todo: 비상금 추가 입력완료 후 페이지 */}
      <MobileKeypad path={"/gather/detail"} props={props} />
    </>
  );
}

export default AdditionalDeposit;
