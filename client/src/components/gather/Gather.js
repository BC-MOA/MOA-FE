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
      <button
        onClick={() => {
          history("/gather/add-goal");
        }}
      >
        목표설정
      </button>
      <button
        onClick={() => {
          history("/gather/add-safebox");
        }}
      >
        세이프박스
      </button>
    </div>
  );
}

export default Gather;
