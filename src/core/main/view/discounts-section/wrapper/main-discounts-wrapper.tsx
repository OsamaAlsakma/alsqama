import axios from "axios";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel } from "swiper/modules";
import { mainPageEndpointsUrl } from "~/bootstrap/helper/endpoints";
import { imagesUrl } from "~/bootstrap/helper/global-helper";
// import { mainDiscountsSectionData } from "~/core/main/view/discounts-section/wrapper/data";
import {
  getDiscountsDto,
  MainDiscountsWrapperResponse,
} from "~/core/main/view/discounts-section/wrapper/get-discounts-dto";
import {
  MainDiscountsSwipersWrapper,
  StyledHandlingSectionPaddingWrapper,
  StyledMainDiscountsSubtitle,
  StyledMainDiscountsSwiper,
  StyledMainDiscountsSwiperImage,
  StyledMainDiscountsSwiperSlide,
  StyledMainDiscountsTitle,
  StyledMainDiscountsTitleAndSubtitle,
} from "~/core/main/view/discounts-section/wrapper/style";
import CircularLoader from "~/generic/components/circular-loader/circular-loader";

export interface MainDiscountsWrapperType {
  title: string;
  description: string;
  firstCollumn: string[];
  secondColumn: string[];
  thirdColumn: string[];
  fourthColumn: string[];
}

const MainDiscountsWrapper = () => {
  const swiperConfig = {
    slidesPerView: 1.75,
    spaceBetween: 10,
    mousewheel: true,
    modules: [Mousewheel],
    className: "mySwiper",
  };
  const cardMediaStyle = { width: "100%", height: "240px" };

  // fetching
  const [mainPageDiscounts, setMainPageDiscounts] =
    useState<MainDiscountsWrapperType>();
  const [isLoading, setIsLoading] = useState(false);
  const fetchMainPageSlidesData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${mainPageEndpointsUrl.discounts}`);
      if (response.status === 200) {
        const discountsResponse: MainDiscountsWrapperResponse = response.data;
        const discountsDto: MainDiscountsWrapperType =
          getDiscountsDto(discountsResponse);
        setMainPageDiscounts(discountsDto);
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
  //

  return (
    <StyledHandlingSectionPaddingWrapper>
      {/* Right side */}
      <MainDiscountsSwipersWrapper>
        <StyledMainDiscountsSwiper {...swiperConfig} direction={"vertical"}>
          {mainPageDiscounts?.firstCollumn.map((image: string, index) => (
            <StyledMainDiscountsSwiperSlide key={index}>
              <StyledMainDiscountsSwiperImage
                image={`${imagesUrl}/${image}`}
                sx={{ ...cardMediaStyle }}
              />
            </StyledMainDiscountsSwiperSlide>
          ))}
        </StyledMainDiscountsSwiper>
        <StyledMainDiscountsSwiper {...swiperConfig} direction={"vertical"}>
          {mainPageDiscounts?.secondColumn.map((image: string, index) => (
            <StyledMainDiscountsSwiperSlide key={index}>
              <StyledMainDiscountsSwiperImage
                image={`${imagesUrl}/${image}`}
                sx={{ ...cardMediaStyle }}
              />
            </StyledMainDiscountsSwiperSlide>
          ))}
        </StyledMainDiscountsSwiper>
      </MainDiscountsSwipersWrapper>
      {/* center */}
      <StyledMainDiscountsTitleAndSubtitle>
        <StyledMainDiscountsTitle>
          {mainPageDiscounts?.title}
        </StyledMainDiscountsTitle>
        <StyledMainDiscountsSubtitle>
          {mainPageDiscounts?.description}
        </StyledMainDiscountsSubtitle>
      </StyledMainDiscountsTitleAndSubtitle>
      {/* center */}

      {/* left side */}
      <MainDiscountsSwipersWrapper>
        <StyledMainDiscountsSwiper {...swiperConfig} direction={"vertical"}>
          {mainPageDiscounts?.thirdColumn.map((image: string, index) => (
            <StyledMainDiscountsSwiperSlide key={index}>
              <StyledMainDiscountsSwiperImage
                image={`${imagesUrl}/${image}`}
                sx={{ ...cardMediaStyle }}
              />
            </StyledMainDiscountsSwiperSlide>
          ))}
        </StyledMainDiscountsSwiper>

        <StyledMainDiscountsSwiper {...swiperConfig} direction={"vertical"}>
          {mainPageDiscounts?.fourthColumn.map((image: string, index) => (
            <StyledMainDiscountsSwiperSlide key={index}>
              <StyledMainDiscountsSwiperImage
                image={`${imagesUrl}/${image}`}
                sx={{ ...cardMediaStyle }}
              />
            </StyledMainDiscountsSwiperSlide>
          ))}
        </StyledMainDiscountsSwiper>
      </MainDiscountsSwipersWrapper>
    </StyledHandlingSectionPaddingWrapper>
  );
};

export default MainDiscountsWrapper;
