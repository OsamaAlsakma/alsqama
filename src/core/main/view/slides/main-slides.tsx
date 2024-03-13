import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import * as palette from "./../../../../bootstrap/helper/global-helper";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { mainPageSlides } from "./data";
import MainSlideDescription from "../slide-description/main-slide-description";

export const StyledSwiperSlide = styled(SwiperSlide)`
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: calc(100vh - ${palette.appHeaderHeight});
`;

const overlayColor = "rgba(31, 13, 45, 0.61)";

export const TransparentOverlayLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${overlayColor};
`;

const MainSlides = () => {
  return (
    <StyledSwiper
      spaceBetween={30}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      loop={true}
      parallax={true}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {mainPageSlides.map(
        (slide: { image: string; title: string; subtitle: string }) => {
          return (
            <StyledSwiperSlide
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <TransparentOverlayLayer />
              <MainSlideDescription
                title={slide.title}
                subtitle={slide.subtitle}
              />
            </StyledSwiperSlide>
          );
        }
      )}
    </StyledSwiper>
  );
};

export default MainSlides;
