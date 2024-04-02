import { CardMedia } from "@mui/material";
import { Mousewheel } from "swiper/modules";
import { mainContactUsSwiperData } from "~/core/main/view/contact-us-section/swiper/data";
import { MainDiscountsSwipersWrapper } from "~/core/main/view/discounts-section/wrapper/style";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

export const StyledMainDiscountsSwiper = styled(Swiper)`
  width: 48%;
  height: 350px;
  border-radius: 8px;
`;
export const StyledMainDiscountsSwiperSlide = styled(SwiperSlide)`
  width: 100%;
  height: 195px;
  object-fit: cover;
  border-radius: 8px;
`;

const MainContactUsSwiper = () => {
  const swiperConfig = {
    slidesPerView: 1.75,
    spaceBetween: 5,
    mousewheel: true,
    modules: [Mousewheel],
    className: "mySwiper",
  };

  const cardMediaStyle = { width: "100%", height: "195px" };
  return (
    <MainDiscountsSwipersWrapper>
      <StyledMainDiscountsSwiper {...swiperConfig} direction={"vertical"}>
        {mainContactUsSwiperData.firstSwiperImages.map(
          (image: string, index) => (
            <StyledMainDiscountsSwiperSlide key={index}>
              <CardMedia image={`${image}`} sx={{ ...cardMediaStyle }} />
            </StyledMainDiscountsSwiperSlide>
          )
        )}
      </StyledMainDiscountsSwiper>
      <StyledMainDiscountsSwiper {...swiperConfig} direction={"vertical"}>
        {mainContactUsSwiperData.secondSwiperImages.map(
          (image: string, index) => (
            <StyledMainDiscountsSwiperSlide key={index}>
              <CardMedia image={`${image}`} sx={{ ...cardMediaStyle }} />
            </StyledMainDiscountsSwiperSlide>
          )
        )}
      </StyledMainDiscountsSwiper>
    </MainDiscountsSwipersWrapper>
  );
};

export default MainContactUsSwiper;
