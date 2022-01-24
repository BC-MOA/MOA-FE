import React from "react";
import { useNavigate } from "react-router-dom";

function Gather() {
  const history = useNavigate();

  return (
    <div>
      <span>gater</span>
      <button
        onClick={() => {
          history("/gather/add-militarySaving");
        }}
      >
        군적금 신청
      </button>
    </div>
  );
}

export default Gather;
