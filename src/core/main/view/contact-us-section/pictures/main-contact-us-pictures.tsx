import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { mainPageSlides } from "~/core/main/view/slides/data";
import { StyledSwiperSlide } from "~/core/main/view/slides/style";
import { Swiper } from "swiper/react";
import styled from "styled-components";
import { mediumScreenSize } from "~/bootstrap/helper/global-helper";

const MainContactUsPicturesSwiper = styled(Swiper)`
  border-radius: 16px;
  height: 350px;
  width: 33%;
  @media (max-width: ${mediumScreenSize}) {
    width: 100%;
  }
`;

const MainContactUsPictures = () => {
  return (
    <MainContactUsPicturesSwiper
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {mainPageSlides.map((slide: { image: string }, index) => {
        return (
          <StyledSwiperSlide
            key={index}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        );
      })}
    </MainContactUsPicturesSwiper>
  );
};

export default MainContactUsPictures;
