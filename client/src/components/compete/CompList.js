import React, { useState } from "react";
import { SetType, Type } from "./CompSetType";
import AllList from "./CompAllList";
import MyList from "./CompMyList";

function CompList(props) {
  const [filter, setFilter] = useState("popular");

  function setFilterWrapper(input) {
    setFilter(input);
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
        <MyList></MyList>
      )}
    </>
  );
}

export default CompList;
