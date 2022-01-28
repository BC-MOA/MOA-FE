import ContentControlBtn from "components/common/ContentControlBtn";
import React, { useState } from "react";
import styled from "styled-components";
// import { SetType, Type } from "./comp/SetCategory";
import AllList from "./CompAllList";
import MyList from "./CompMyList";
const allControlNameList = ["인기순", "최신순", "마감"];
const myControlNameList = ["참가중", "참가완료"];

function CompList(props) {
  //리스트별 카테고리 기본 설정값
  const [filter, setFilter] = useState(allControlNameList[0]);
  const [Done, setDone] = useState(myControlNameList[0]);

  function setFilterWrapper(input) {
    if (allControlNameList[0] === input) {
      return "popular";
    } else if (allControlNameList[1] === input) {
      return "recent";
    } else if (allControlNameList[2] === input) {
      return "done";
    }
  }

  function setDoneWrapper(input) {
    if (myControlNameList[0] === input) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <>
      {props.category ? (
        <>
          <SetTypeStyle>
            <ContentControlBtn
              btnGap="24px"
              marginBottom="0"
              listControl={filter}
              setListControl={setFilter}
              controlNameList={allControlNameList}
            />
          </SetTypeStyle>
          <AllList cond={setFilterWrapper(filter)}></AllList>
        </>
      ) : (
        <>
          <SetTypeStyle>
            <ContentControlBtn
              btnGap="24px"
              marginBottom="0"
              listControl={Done}
              setListControl={setDone}
              controlNameList={myControlNameList}
            />
          </SetTypeStyle>
          <MyList cond={setDoneWrapper(Done)}></MyList>
        </>
      )}
    </>
  );
}

const SetTypeStyle = styled.div`
  margin: 24px 28px 0;
`;
export default CompList;
