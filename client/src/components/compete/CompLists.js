import React, { useState } from "react";
import { SetType, Type } from "./common/SetCategory";
import AllList from "./CompAllList";
import MyList from "./CompMyList";

function CompList(props) {
  //리스트별 카테고리 기본 설정값
  const [filter, setFilter] = useState("popular");
  const [Done, setDone] = useState(false);

  function setFilterWrapper(input) {
    setFilter(input);
  }

  function setDoneWrapper(input) {
    setDone(input);
  }

  return (
    <>
      {props.category ? (
        <>
          <SetType>
            <Type
              disabled={filter === "popular"}
              onClick={() => setFilterWrapper("popular")}
            >
              인기순
            </Type>
            <Type
              disabled={filter === "recent"}
              onClick={() => setFilterWrapper("recent")}
            >
              최신순
            </Type>
            <Type
              disabled={filter === "done"}
              onClick={() => setFilterWrapper("done")}
            >
              마감
            </Type>
          </SetType>
          <AllList cond={filter}></AllList>
        </>
      ) : (
        <>
          <SetType>
            <Type disabled={!Done} onClick={() => setDoneWrapper(false)}>
              참가중
            </Type>
            <Type disabled={Done} onClick={() => setDoneWrapper(true)}>
              참가완료
            </Type>
          </SetType>
          <MyList cond={Done}></MyList>
        </>
      )}
    </>
  );
}

export default CompList;
