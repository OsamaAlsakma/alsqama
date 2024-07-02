/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  endpointsUrl,
  servicesPageEndpoint,
} from "~/bootstrap/helper/endpoints";
import {
  HandlingSectionPaddingWrapper,
  StyledAppTitleWrapper,
} from "~/bootstrap/helper/global-styles";
import langKey from "~/bootstrap/i18n/langKey";
import MainHotelCard from "~/core/main/view/hotel-card/main-hotel-card";
import { fetchAccommodation } from "~/core/main/view/hotel-cards-wrapper/get-main-page-accommodations-card-dto";
import CircularLoader from "~/generic/components/circular-loader/circular-loader";
import { PossibleSelectedTabs } from "~/generic/context/selected-tab-ctx";

export type MainPageAccommodationsCard = {
  image: string;
  name: string;
  description: string;
  length: number;
  endpoint: string;
  tabName?: PossibleSelectedTabs;
};

const MainHotelCardsWrapper = () => {
  const { t, i18n } = useTranslation();
  const [accommodations, setAccommodations] = useState<
    MainPageAccommodationsCard[]
  >([]);

  const [isLoading, setIsLoading] = useState(false);
  const accommodationsToBeFetched = [
    {
      endpointsUrl: endpointsUrl.allHotels,
      endpoint: servicesPageEndpoint.hotels,
      name: t(langKey.global.hotels),
      tabName: PossibleSelectedTabs.HOTEL,
    },
    {
      endpointsUrl: endpointsUrl.allChalets,
      endpoint: servicesPageEndpoint.chalets,
      name: t(langKey.global.chalets),
      tabName: PossibleSelectedTabs.CHALET,
    },
    {
      endpointsUrl: endpointsUrl.allHalls,
      endpoint: servicesPageEndpoint.halls,
      name: t(langKey.global.halls),
      tabName: PossibleSelectedTabs.HALL,
    },
    {
      endpointsUrl: endpointsUrl.allAppartments,
      endpoint: servicesPageEndpoint.apartments,
      name: t(langKey.global.apartments),
      tabName: PossibleSelectedTabs.APPARTMENT,
    },
  ];
  useEffect(() => {
    setAccommodations([]);
    setIsLoading(true);
    accommodationsToBeFetched.map((accommodation) =>
      fetchAccommodation(
        setAccommodations,
        accommodation.endpointsUrl,
        accommodation.endpoint,
        accommodation.name,
        accommodation.tabName
      )
    );
    setIsLoading(false);
  }, [i18n.language]);

  if (isLoading) return <CircularLoader />;
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
        {accommodations.map(
          (accommodation: MainPageAccommodationsCard, index) => {
            return (
              <SwiperSlide key={index}>
                <MainHotelCard
                  image={accommodation.image}
                  description={accommodation.description}
                  name={accommodation.name}
                  endpoint={accommodation.endpoint}
                  length={accommodation.length}
                  tabName={accommodation.tabName}
                />
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </HandlingSectionPaddingWrapper>
  );
};

export default MainHotelCardsWrapper;
