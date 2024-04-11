import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { mainPageSlides } from "~/core/main/view/slides/data";

import {
  ChaletsCardsCardImagesNextButton,
  ChaletsCardsCardImagesPrevButton,
  ChaletsCardsCardImagesSwiper,
  ChaletsCardsCardImagesSwiperSlide,
} from "~/core/chalets/view/cards-section/card/style";

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
          <ChaletsCardsCardImagesSwiperSlide
            key={index}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        );
      })}
      <ChaletsCardsCardImagesPrevButton className="swiper-button-prev" />
      <ChaletsCardsCardImagesNextButton className="swiper-button-next" />
    </ChaletsCardsCardImagesSwiper>
  );
};

export default ChaletsCardsCardImages;
