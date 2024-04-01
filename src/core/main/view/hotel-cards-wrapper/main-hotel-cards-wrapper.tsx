import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  HandlingSectionPaddingWrapper,
  StyledAppTitleWrapper,
} from "~/bootstrap/helper/global-styles";
import MainHotelCard from "~/core/main/view/hotel-card/main-hotel-card";
import MainHotelCardVM from "~/core/main/view/hotel-card/main-hotel-card-vm";

const MainHotelCardsWrapper = () => {
  const vm = new MainHotelCardVM("one").useVM();
  return (
    <HandlingSectionPaddingWrapper>
      <StyledAppTitleWrapper>
        أكثر من 94,000 من بيوت العطلات في كافة المدن حول اليمن
      </StyledAppTitleWrapper>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
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
        <SwiperSlide>
          <MainHotelCard vm={vm} />
        </SwiperSlide>
        <SwiperSlide>
          <MainHotelCard vm={vm} />
        </SwiperSlide>
        <SwiperSlide>
          <MainHotelCard vm={vm} />
        </SwiperSlide>
        <SwiperSlide>
          <MainHotelCard vm={vm} />
        </SwiperSlide>
        <SwiperSlide>
          <MainHotelCard vm={vm} />
        </SwiperSlide>
      </Swiper>
    </HandlingSectionPaddingWrapper>
  );
};

export default MainHotelCardsWrapper;
