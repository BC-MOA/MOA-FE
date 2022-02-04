import BackHeader from "components/common/BackHeader";
import Container from "components/common/Container";
import ScrollBox from "components/common/ScrollBox";
import React from "react";

function AboutReward() {
  return (
    <Container>
      <BackHeader path={-1} title={""} isScrolled={true} />
      <ScrollBox paddingValue={"12px 0"}></ScrollBox>
    </Container>
  );
}

export default AboutReward;
