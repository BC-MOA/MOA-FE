import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Banner from "./Banner";

//Swiper
const SwiperBox = styled.div`
  width: 335px;
  height: 76px;
  padding: 0 20px;
  margin-top: 20px;
  background-color: var(--Surface);
`;

const Swipe = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide>
        <Banner
          to="/compete/howto"
          src={require("assets/compete/banner.png")}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Banner
          to="/compete/howto"
          src={require("assets/compete/banner.png")}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Banner
          to="/compete/howto"
          src={require("assets/compete/banner.png")}
        />
      </SwiperSlide>
    </Swiper>
  );
};

function BannerSwiper() {
  return (
    <SwiperBox>
      <Swipe></Swipe>
    </SwiperBox>
  );
}

export default BannerSwiper;
