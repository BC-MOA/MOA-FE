import Container from "components/common/Container";
import React, { useState, useEffect } from "react";
import LoadingStep1 from "./LoadingStep1";
import LoadingStep2 from "./LoadingStep2";
import LoadingStep3 from "./LoadingStep3";

function Loading() {
  const [step, setStep] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setStep(2);
    }, 3000);
  }, []);
  return (
    <Container>
      {1 === step && <LoadingStep1 />}
      {2 === step && <LoadingStep2 setStep={setStep} />}
      {3 === step && <LoadingStep3 />}
    </Container>
  );
}

export default Loading;
