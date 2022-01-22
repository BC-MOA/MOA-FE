import React from "react";

function AllComp(props) {
  return (
    <>
      <div>{props.category ? "all" : "my"}</div>
    </>
  );
}

export default AllComp;
