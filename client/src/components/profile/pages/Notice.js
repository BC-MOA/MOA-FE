import React from "react";
import styled from "styled-components";
import BackHeader from "components/common/BackHeader";
import { hideScrollBar } from "style/common";
import { noticeList } from "components/common/dummyData";
import { groupBy } from "components/common/utils";
import NoticeEl from "../NoticeEl";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  ${hideScrollBar}
  flex: 1;
`;
const NoticeBox = styled.div`
  padding: 24px 0;
  & + & {
    border-top: 1px solid var(--Line_02);
  }
`;

function Notice() {
  const groupedList = groupBy(noticeList, "date");

  return (
    <Container>
      <BackHeader path={-1} title={"알림"} isScrolled={true} />
      <Content>
        {Object.keys(groupedList).map((els, idx) => (
          <NoticeBox key={idx}>
            {groupedList[els].map((el) => (
              <NoticeEl key={el.id} props={el} />
            ))}
          </NoticeBox>
        ))}
      </Content>
    </Container>
  );
}

export default Notice;
