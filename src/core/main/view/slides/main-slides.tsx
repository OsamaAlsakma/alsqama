import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import { mainPageSlides } from "./data";
import MainSlideDescription from "~/core/main/view/slide-description/main-slide-description";
import {
  CustomNextButton,
  CustomPrevButton,
  StyledSwiper,
  StyledSwiperSlide,
  TransparentOverlayLayer,
} from "~/core/main/view/slides/style";
import { useEffect, useState } from "react";
import axios from "axios";
import CircularLoader from "~/generic/components/circular-loader/circular-loader";
import {
  MainPageSlideResponse,
  getMainPageSlidesDTO,
} from "~/core/main/view/slides/get-main-page-slides-dto";
import { mainPageEndpointsUrl } from "~/bootstrap/helper/endpoints";
import { imagesUrl } from "~/bootstrap/helper/global-helper";

export type MainPageSlide = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const MainSlides = () => {
  const [mainPageSlides, setMainPageSlides] = useState<MainPageSlide[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchMainPageSlidesData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${mainPageEndpointsUrl.mainPageSlide}`);
      if (response.status === 200) {
        const halls: MainPageSlideResponse[] = response.data;
        const hallsDto = getMainPageSlidesDTO(halls);
        setMainPageSlides(hallsDto);
      }
    } catch (errro) {
      throw Error("failed to load images..");
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchMainPageSlidesData();
  }, []);
  if (isLoading) return <CircularLoader />;
  if (mainPageSlides.length === 0) return null;
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
      {mainPageSlides.map((slide: MainPageSlide, index) => {
        return (
          <StyledSwiperSlide
            key={index}
            style={{ backgroundImage: `url(${imagesUrl}/${slide.image})` }}
          >
            <TransparentOverlayLayer />
            <MainSlideDescription
              title={slide.title}
              subtitle={slide.description}
            />
          </StyledSwiperSlide>
        );
      })}
      {mainPageSlides.length > 1 && (
        <>
          <CustomPrevButton className="swiper-button-prev" />
          <CustomNextButton className="swiper-button-next" />
        </>
      )}
    </StyledSwiper>
  );
};

export default MainSlides;
