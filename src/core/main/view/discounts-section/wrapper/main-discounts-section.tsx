import { CardMedia } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel } from "swiper/modules";
import { mainDiscountsSectionData } from "~/core/main/view/discounts-section/wrapper/data";
import {
  MainDiscountsSwipersWrapper,
  StyledHandlingSectionPaddingWrapper,
  StyledMainDiscountsSubtitle,
  StyledMainDiscountsSwiper,
  StyledMainDiscountsSwiperSlide,
  StyledMainDiscountsTitle,
  StyledMainDiscountsTitleAndSubtitle,
} from "~/core/main/view/discounts-section/wrapper/style";

const MainDiscountsSection = () => {
  const swiperConfig = {
    slidesPerView: 1.75,
    spaceBetween: 10,
    mousewheel: true,
    modules: [Mousewheel],
    className: "mySwiper",
  };

  const cardMediaStyle = { width: "100%", height: "240px" };

  return (
    <StyledHandlingSectionPaddingWrapper>
      <MainDiscountsSwipersWrapper>
        <StyledMainDiscountsSwiper {...swiperConfig} direction={"vertical"}>
          {mainDiscountsSectionData.firstSwiperImages.map(
            (image: string, index) => (
              <StyledMainDiscountsSwiperSlide key={index}>
                <CardMedia image={`${image}`} sx={{ ...cardMediaStyle }} />
              </StyledMainDiscountsSwiperSlide>
            )
          )}
        </StyledMainDiscountsSwiper>
        <StyledMainDiscountsSwiper {...swiperConfig} direction={"vertical"}>
          {mainDiscountsSectionData.secondSwiperImages.map(
            (image: string, index) => (
              <StyledMainDiscountsSwiperSlide key={index}>
                <CardMedia image={`${image}`} sx={{ ...cardMediaStyle }} />
              </StyledMainDiscountsSwiperSlide>
            )
          )}
        </StyledMainDiscountsSwiper>
      </MainDiscountsSwipersWrapper>
      <StyledMainDiscountsTitleAndSubtitle>
        <StyledMainDiscountsTitle>
          {mainDiscountsSectionData.title}
        </StyledMainDiscountsTitle>
        <StyledMainDiscountsSubtitle>
          {mainDiscountsSectionData.subTitle}
        </StyledMainDiscountsSubtitle>
      </StyledMainDiscountsTitleAndSubtitle>
      <MainDiscountsSwipersWrapper>
        <StyledMainDiscountsSwiper {...swiperConfig} direction={"vertical"}>
          {mainDiscountsSectionData.thirdSwiperImages.map(
            (image: string, index) => (
              <StyledMainDiscountsSwiperSlide key={index}>
                <CardMedia image={`${image}`} sx={{ ...cardMediaStyle }} />
              </StyledMainDiscountsSwiperSlide>
            )
          )}
        </StyledMainDiscountsSwiper>

        <StyledMainDiscountsSwiper {...swiperConfig} direction={"vertical"}>
          {mainDiscountsSectionData.fourthSwiperImages.map(
            (image: string, index) => (
              <StyledMainDiscountsSwiperSlide key={index}>
                <CardMedia image={`${image}`} sx={{ ...cardMediaStyle }} />
              </StyledMainDiscountsSwiperSlide>
            )
          )}
        </StyledMainDiscountsSwiper>
      </MainDiscountsSwipersWrapper>
    </StyledHandlingSectionPaddingWrapper>
  );
};

export default MainDiscountsSection;
