import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { MainContactUsPicturesSwiper } from "~/core/main/view/contact-us-section/pictures/style";
import { mainPageSlides } from "~/core/main/view/slides/data";
import { StyledSwiperSlide } from "~/core/main/view/slides/style";

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
