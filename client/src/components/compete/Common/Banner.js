import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Banner = styled.div`
  width: 335px;
  height: 76px;
  padding: 24px 20px;
  background-color: var(--Surface);
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

function CompBanner() {
  return (
    <Banner>
      <Swipe></Swipe>
    </Banner>
  );
}

export default CompBanner;
