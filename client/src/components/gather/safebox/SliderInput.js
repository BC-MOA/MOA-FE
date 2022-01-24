import React from "react";
import { useNavigate } from "react-router-dom";
import SlideRule from "react-slide-rule";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 24px 24px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Pretendard-Regular";

  .Title {
    margin: 0 !important;
  }
  .SubTitle {
    font-family: "Pretendard-SemiBold";
    margin-bottom: 16px;
  }
  .btn {
    cursor: pointer;
  }
`;

const Custom = styled.div`
  background-color: #212121;
  width: 2.5px;
  height: 46px;
  border-radius: 10px;
`;

function SliderInput({ inputs, setInputs }) {
  const { amount } = inputs;
  const history = useNavigate();

  return (
    <Container>
      <div className="Title">{Number(amount).toLocaleString()} 원</div>
      <div
        className="SubTitle green btn"
        onClick={() => {
          history("/keypad");
        }}
      >
        직접입력
      </div>
      <SlideRule
        step={1000}
        max={1000000}
        min={0}
        value={amount}
        onChange={(e) =>
          setInputs({
            ...inputs,
            amount: e,
          })
        }
        width={350}
        height={50}
        markStyle={{
          color: "#C5C5C5",
          height: 24,
          width: 1.5,
          top: 12,
        }}
        smallerMarkStyle={{ height: 12, width: 1.5, top: 18 }}
        numberStyle={{ color: "transparent" }}
        gap={10}
        cursor={<Custom />}
      />
    </Container>
  );
}

export default SliderInput;
