import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";

//Swiper
function Banner({ to, src }) {
  return (
    <Link to={to}>
      <img alt="none" src={src} />
    </Link>
  );
}

//Swiper 컨테이너
const SwiperBox = styled.div`
  width: 90%;
  padding: 0 5%;
  margin-top: 20px;
  background-color: var(--Surface);
  img {
    width: 336px;
    height: 76px;
  }
`;

function BannerSwiper() {
  return (
    <SwiperBox>
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
    </SwiperBox>
  );
}

export default BannerSwiper;
