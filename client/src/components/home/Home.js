import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const history = useNavigate();
  function test() {
    axios
      .get("/v1/hello")
      .then((res) => {
        console.log(res.data.json);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    test();
  }, []);
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
      <button
        onClick={() => {
          test();
        }}
      >
        api test
      </button>
    </div>
  );
}
export default Home;
