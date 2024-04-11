import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { mainPageSlides } from "~/core/main/view/slides/data";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const ChaletsCardsCardImagesSwiper = styled(Swiper)`
  height: 100%;
  width: 100%;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

const CustomPrevButton = styled(ArrowForwardIosIcon)`
  color: white;
  position: absolute;
  top: 65%;
  transform: translateY(-50%);
  padding: 2px;
  border: 2px white solid;
  border-radius: 100%;
`;

const CustomNextButton = styled(ArrowBackIosNewIcon)`
  color: white;
  position: absolute;
  top: 66%;
  transform: translateY(-50%);
  padding: 2px;
  border: 2px white solid;
  border-radius: 100%;
`;

const ChaletsCardsCardImages = () => {
  return (
    <ChaletsCardsCardImagesSwiper
      loop={true}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      modules={[Navigation, Pagination]}
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
      <CustomPrevButton className="swiper-button-prev" />
      <CustomNextButton className="swiper-button-next" />
    </ChaletsCardsCardImagesSwiper>
  );
};

export default ChaletsCardsCardImages;
