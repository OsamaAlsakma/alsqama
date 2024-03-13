import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import * as palette from "./../../../bootstrap/helper/global-helper"
import image1 from "../../../../public/assets/1.jpg"
import image2 from "../../../../public/assets/2.jpg"
import image3 from "../../../../public/assets/3.jpg"
import image6 from "../../../../public/assets/6.jpg"
import image7 from "../../../../public/assets/7.jpg"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';


export const StyledSwiperSlide = styled(SwiperSlide)`
  position: relative; 
  width: 100%;
  height:100%;
  background-size: cover;
  background-position: center;
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: calc(100vh - ${palette.appHeaderHeight});
`;

const overlayColor = 'rgba(31, 13, 45, 0.61)'; 

export const TransparentOverlayLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${overlayColor};
`;

const MainPage = () => {
  return (
    <StyledSwiper
      spaceBetween={30}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      loop={true}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <StyledSwiperSlide style={{ backgroundImage: `url(${image1})` }} >
      <TransparentOverlayLayer />
      </StyledSwiperSlide>
      <StyledSwiperSlide style={{ backgroundImage: `url(${image2})` }} >
      <TransparentOverlayLayer />
      </StyledSwiperSlide>
      <StyledSwiperSlide style={{ backgroundImage: `url(${image3})` }} >
      <TransparentOverlayLayer />
      </StyledSwiperSlide>
      <StyledSwiperSlide style={{ backgroundImage: `url(${image6})` }} >
      <TransparentOverlayLayer />
      </StyledSwiperSlide>
      <StyledSwiperSlide style={{ backgroundImage: `url(${image7})` }} >
      <TransparentOverlayLayer />
      </StyledSwiperSlide>
    </StyledSwiper>
  );
};

export default MainPage;
