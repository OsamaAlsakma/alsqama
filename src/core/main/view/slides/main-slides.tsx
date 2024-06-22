import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { mainPageSlides } from "./data";
import MainSlideDescription from "~/core/main/view/slide-description/main-slide-description";
import {
  CustomNextButton,
  CustomPrevButton,
  StyledSwiper,
  StyledSwiperSlide,
  TransparentOverlayLayer,
} from "~/core/main/view/slides/style";

const MainSlides = () => {
  return (
    <StyledSwiper
      spaceBetween={30}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      pagination={{
        clickable: true,
      }}
      loop={true}
      parallax={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {mainPageSlides.map(
        (slide: { image: string; title: string; subtitle: string }, index) => {
          return (
            <StyledSwiperSlide
              key={index}
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
      <CustomPrevButton className="swiper-button-prev" />
      <CustomNextButton className="swiper-button-next" />
    </StyledSwiper>
  );
};

export default MainSlides;
