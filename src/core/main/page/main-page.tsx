import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import * as palette from "./../../../bootstrap/helper/global-helper";
import image1 from "../../../../public/assets/1.jpg";
import image2 from "../../../../public/assets/2.jpg";
import image3 from "../../../../public/assets/3.jpg";
import image6 from "../../../../public/assets/6.jpg";
import image7 from "../../../../public/assets/7.jpg";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import * as pallete from "../../../bootstrap/helper/global-helper";

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

export const MainPageSlideDescription = styled.div`
  width: 45%;
  position: absolute;
  top: 50%;
  font-size: 36px;
  color: white;
  right: 5%;
  transform: translateY(-50%);
`;

export const MainPageSlideDescriptionTitle = styled.span`
  display: block;
  font-size: 48px;
  padding-bottom: 8px;
  font-weight: bold;
  color: ${pallete.secondaryColor};
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
      parallax={true}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <StyledSwiperSlide style={{ backgroundImage: `url(${image1})` }}>
        <TransparentOverlayLayer />
        <MainPageSlideDescription>
          <MainPageSlideDescriptionTitle>صنعاء</MainPageSlideDescriptionTitle>
          عاصمة اليمن القديمة تزخر بتاريخ غني ومعالم تاريخية مذهلة.
        </MainPageSlideDescription>
      </StyledSwiperSlide>
      <StyledSwiperSlide style={{ backgroundImage: `url(${image2})` }}>
        <TransparentOverlayLayer />
        <MainPageSlideDescription>
          <MainPageSlideDescriptionTitle>عدن</MainPageSlideDescriptionTitle>
          مدينة البحر والتجارة تحتضن شواطئها الخلابة وتاريخها البحري العريق.
        </MainPageSlideDescription>
      </StyledSwiperSlide>
      <StyledSwiperSlide style={{ backgroundImage: `url(${image3})` }}>
        <TransparentOverlayLayer />
        <MainPageSlideDescription>
          <MainPageSlideDescriptionTitle>تعز</MainPageSlideDescriptionTitle>
          مدينة القلع والأسواق التقليدية تشتهر بجمال معمارها القديم وسحر جبالها
          الخضراء.
        </MainPageSlideDescription>
      </StyledSwiperSlide>
      <StyledSwiperSlide style={{ backgroundImage: `url(${image6})` }}>
        <TransparentOverlayLayer />
        <MainPageSlideDescription>
          <MainPageSlideDescriptionTitle>الشبوة</MainPageSlideDescriptionTitle>
          بوابة البحر الأحمر تجمع بين طبيعة خلابة ومينائها الحيوي.
        </MainPageSlideDescription>
      </StyledSwiperSlide>
      <StyledSwiperSlide style={{ backgroundImage: `url(${image7})` }}>
        <TransparentOverlayLayer />
        <MainPageSlideDescription>
          <MainPageSlideDescriptionTitle>إب</MainPageSlideDescriptionTitle>
          مدينة الجبال الشامخة تنعم بمناظر طبيعية ساحرة وأجواء هادئة وجميلة.
        </MainPageSlideDescription>
      </StyledSwiperSlide>
    </StyledSwiper>
  );
};

export default MainPage;
