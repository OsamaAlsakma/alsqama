import styled from "styled-components";
import {
  HandlingSectionPaddingWrapper,
  StyledAppTitleWrapper,
} from "~/bootstrap/helper/global-styles";
import MainHotelCard from "~/core/main/view/hotel-card/main-hotel-card";
import MainHotelCardVM from "~/core/main/view/hotel-card/main-hotel-card-vm";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)``;

const StyledSwiperSlide = styled(SwiperSlide)``;

const MainHotelCardsWrapper = () => {
  const vm = new MainHotelCardVM("one").useVM();
  return (
    <HandlingSectionPaddingWrapper>
      <StyledAppTitleWrapper>
        أكثر من 94,000 من بيوت العطلات في كافة المدن حول اليمن
      </StyledAppTitleWrapper>
      <StyledSwiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1.25,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1.75,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 2.75,
            spaceBetween: 15,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <StyledSwiperSlide>
          <MainHotelCard vm={vm} />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <MainHotelCard vm={vm} />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <MainHotelCard vm={vm} />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <MainHotelCard vm={vm} />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <MainHotelCard vm={vm} />
        </StyledSwiperSlide>
      </StyledSwiper>
    </HandlingSectionPaddingWrapper>
  );
};

export default MainHotelCardsWrapper;
