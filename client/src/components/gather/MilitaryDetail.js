import BackHeader from "components/common/BackHeader";
import Container from "components/common/Container";
import ScrollBox from "components/common/ScrollBox";
import React from "react";

function MilitaryDetail() {
  return (
    <Container>
      {/* todo - title 변경하기 - 목표명 있을 때는 목표명 / 없을 때는 ''  */}
      <BackHeader
        path={"/gather"}
        title={"1000만원 모으기"}
        isScrolled={true}
      ></BackHeader>
      <ScrollBox></ScrollBox>
    </Container>
  );
}

export default MilitaryDetail;
