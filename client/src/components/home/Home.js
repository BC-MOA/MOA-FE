import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const history = useNavigate();
  return (
    <div>
      <span>home</span>
      <button
        onClick={() => {
          history("/gather");
        }}
      >
        모으기
      </button>
    </div>
  );
}
export default Home;
