import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { mainPageSlides } from "./data";
import MainSlideDescription from "../slide-description/main-slide-description";
import {
  StyledSwiper,
  StyledSwiperSlide,
  TransparentOverlayLayer,
} from "./style";

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
