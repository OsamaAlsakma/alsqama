import { Card, CardMedia } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel } from "swiper/modules";
import { mainDiscountsSectionData } from "~/core/main/view/discounts-section/wrapper/data";
import {
  StyledHandlingSectionPaddingWrapper,
  StyledMainDiscountsSubtitle,
  StyledMainDiscountsSwiper,
  StyledMainDiscountsSwiperSlide,
  StyledMainDiscountsTitle,
  StyledMainDiscountsTitleAndSubtitle,
} from "~/core/main/view/discounts-section/wrapper/style";

const MainDiscountsSection = () => {
  const swiperConfig = {
    direction: "vertical",
    slidesPerView: 1.75,
    spaceBetween: 10,
    mousewheel: true,
    modules: [Mousewheel],
    className: "mySwiper",
  };
  return (
    <StyledHandlingSectionPaddingWrapper>
      {/* first section */}
      <div style={{ display: "flex" }}>
        <StyledMainDiscountsSwiper
          {...swiperConfig}
          direction={"vertical"}
          // slidesPerView={1.75}
          // spaceBetween={10}
          // mousewheel={true}
          // modules={[Mousewheel]}
          // className="mySwiper"
        >
          {mainDiscountsSectionData.map((image: { image: string }, index) => {
            return (
              <StyledMainDiscountsSwiperSlide key={index}>
                <Card>
                  <CardMedia
                    image={`${image.image}`}
                    sx={{ width: "100%", height: "240px" }}
                  />
                </Card>
              </StyledMainDiscountsSwiperSlide>
            );
          })}
        </StyledMainDiscountsSwiper>
        <StyledMainDiscountsSwiper
          direction={"vertical"}
          slidesPerView={1.75}
          spaceBetween={10}
          mousewheel={true}
          modules={[Mousewheel]}
          className="mySwiper"
        >
          {mainDiscountsSectionData.map((image: { image: string }, index) => {
            return (
              <StyledMainDiscountsSwiperSlide key={index}>
                <Card>
                  <CardMedia
                    image={`${image.image}`}
                    sx={{ width: "100%", height: "240px" }}
                  />
                </Card>
              </StyledMainDiscountsSwiperSlide>
            );
          })}
        </StyledMainDiscountsSwiper>
      </div>
      <StyledMainDiscountsTitleAndSubtitle>
        <StyledMainDiscountsTitle>عروض اللحظة الأخيرة</StyledMainDiscountsTitle>
        <StyledMainDiscountsSubtitle>
          من الجَمْعة الدافئة مع الأهل، إلى صحبة الأصدقاء الحلوة، استمتعوا
          بالعروض والخصومات التي تصل الى 50%، عروض رائعة و مستمرة على الشاليهات
          والمخيمات والمزارع والفلل والشقق.
        </StyledMainDiscountsSubtitle>
      </StyledMainDiscountsTitleAndSubtitle>
      {/* Third part */}
      <div style={{ display: "flex" }}>
        <StyledMainDiscountsSwiper
          direction={"vertical"}
          slidesPerView={1.75}
          spaceBetween={10}
          mousewheel={true}
          modules={[Mousewheel]}
          className="mySwiper"
        >
          {mainDiscountsSectionData.map((image: { image: string }, index) => {
            return (
              <StyledMainDiscountsSwiperSlide key={index}>
                <Card>
                  <CardMedia
                    image={`${image.image}`}
                    sx={{ width: "100%", height: "240px" }}
                  />
                </Card>
              </StyledMainDiscountsSwiperSlide>
            );
          })}
        </StyledMainDiscountsSwiper>

        <StyledMainDiscountsSwiper
          direction={"vertical"}
          slidesPerView={1.75}
          spaceBetween={10}
          mousewheel={true}
          modules={[Mousewheel]}
          className="mySwiper"
        >
          {mainDiscountsSectionData.map((image: { image: string }, index) => {
            return (
              <StyledMainDiscountsSwiperSlide key={index}>
                <Card>
                  <CardMedia
                    image={`${image.image}`}
                    sx={{ width: "100%", height: "240px" }}
                  />
                </Card>
              </StyledMainDiscountsSwiperSlide>
            );
          })}
        </StyledMainDiscountsSwiper>
      </div>
    </StyledHandlingSectionPaddingWrapper>
  );
};

export default MainDiscountsSection;
