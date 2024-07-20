import axios from "axios";
import { TFunction } from "i18next";
import {
  mainPageEndpointsUrl,
  servicesPageEndpoint,
} from "~/bootstrap/helper/endpoints";
import { SetState } from "~/bootstrap/helper/global-types";
import langKey from "~/bootstrap/i18n/langKey";
import { MainPageAccommodationsCard } from "~/core/main/view/hotel-cards-wrapper/main-hotel-cards-wrapper";
import { PossibleSelectedTabs } from "~/generic/context/selected-tab-ctx";

type AccommodationOverviewResponse = {
  // counts
  hotels_count: number;
  chalets_count: number;
  halls_count: number;
  appartments_count: number;
  // images
  hotels_image: string;
  chalets_image: string;
  halls_image: string;
  appartments_image: string;
  // description
  hotels_description: string;
  chalets_description: string;
  halls_description: string;
  appartments_description: string;
};

export const fetchAccommodation = async (
  setAccommodations: SetState<MainPageAccommodationsCard[]>,
  t: TFunction<"translation", undefined>
) => {
  const response = await axios.get(`${mainPageEndpointsUrl.sectionsOverview}`);
  if (response.status === 200) {
    const accommodation: AccommodationOverviewResponse = response.data;

    const accommodationOverview: MainPageAccommodationsCard[] = [
      // hotel
      {
        image: accommodation.hotels_image,
        name: t(langKey.global.hotels),
        description: accommodation.hotels_description,
        length: accommodation.hotels_count,
        endpoint: servicesPageEndpoint.hotels,
        tabName: PossibleSelectedTabs.HOTEL,
      },
      // chalet
      {
        image: accommodation.chalets_image,
        name: t(langKey.global.chalets),
        description: accommodation.chalets_description,
        length: accommodation.chalets_count,
        endpoint: servicesPageEndpoint.chalets,
        tabName: PossibleSelectedTabs.CHALET,
      },
      // hall
      {
        image: accommodation.halls_image,
        name: t(langKey.global.halls),
        description: accommodation.halls_description,
        length: accommodation.halls_count,
        endpoint: servicesPageEndpoint.halls,
        tabName: PossibleSelectedTabs.HALL,
      },
      // appartment
      {
        image: accommodation.appartments_image,
        name: t(langKey.global.apartments),
        description: accommodation.appartments_description,
        length: accommodation.appartments_count,
        endpoint: servicesPageEndpoint.appartments,
        tabName: PossibleSelectedTabs.APPARTMENT,
      },
    ];
    setAccommodations(accommodationOverview);
  }
};
