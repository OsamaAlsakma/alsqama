import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { imagesUrl } from "~/bootstrap/helper/global-helper";
import { MainContactUsPicturesSwiper } from "~/core/main/view/contact-us-section/pictures/style";
import { StyledSwiperSlide } from "~/core/main/view/slides/style";

interface IMainContactUsPicturesProps {
  images: string[];
}

const MainContactUsPictures = (props: IMainContactUsPicturesProps) => {
  const { images } = props;
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
      {images.map((image: string, index) => {
        return (
          <StyledSwiperSlide
            key={index}
            style={{ backgroundImage: `url(${imagesUrl}/${image})` }}
          />
        );
      })}
    </MainContactUsPicturesSwiper>
  );
};

export default MainContactUsPictures;
