import React, { useState, useEffect } from "react";
import styled from "styled-components";
import List from "./CompList";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

//버튼
const Button = styled.button`
  width: 50%;
  height: 42px;
  border: none;

  border-bottom: 3px var(--Line_02) solid;
  color: var(--Line_02);
  background-color: white;

  font-family: "Pretendard-SemiBold";
  font-size: 18px;

  transition: all 1s;

  :disabled {
    border-bottom: 3px var(--a2) solid;
    color: var(--a2);
    background-color: white;
  }
`;

//swiper = 챌린지 참여 안내 배너
const Banner = styled.div`
  width: 335px;
  height: 76px;
  margin: 24px 20px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Swipe = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide>
        <Img src={require("assets/compete/banner.png")} />
      </SwiperSlide>
      <SwiperSlide>
        <Img src={require("assets/compete/banner.png")} />
      </SwiperSlide>
      <SwiperSlide>
        <Img src={require("assets/compete/banner.png")} />
      </SwiperSlide>
    </Swiper>
  );
};

function CompBody() {
  //category가 true일 때 전체 챌린지, false일때 내 챌린지
  const [category, setCategory] = useState(true);

  function setAll() {
    setCategory(true);
  }

  function setMy() {
    setCategory(false);
  }

  return (
    <div>
      <div>
        <Button disabled={category} onClick={setAll}>
          전체 챌린지
        </Button>
        <Button disabled={!category} onClick={setMy}>
          내 챌린지
        </Button>
      </div>
      <Banner>
        <Swipe></Swipe>
      </Banner>
      <List category={category}></List>
    </div>
  );
}

export default CompBody;
