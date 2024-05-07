import axios from "axios";
import { useEffect, useState } from "react";
import { endpointsUrl } from "~/bootstrap/helper/endpoints";
import { ReviewType } from "~/core/chalets/page/chalet-details-page";
import {
  ChaletsCardsWrapperMessages,
  StyledChaletsCardsWrapper,
} from "~/core/chalets/view/cards-section/wrapper/style";
import HotelItemsCardsCard from "~/core/hotels/view/items-cards-section/card/hotel-items-cards-card";
import CircularLoader from "~/generic/components/circular-loader/circular-loader";

export type HotelItem = {
  id: string;
  title: string;
  description: string;
  pricePerNight: number;
  coordinates: string;
  images: string[];
  videos: string[];
  bookingCondition: string;
  cancellingCondition: string;
  hotelPhoneNumber: number;
  features: string[];
  reviews: ReviewType[];
  availableTimes: string[];
  bedsNumber?: string;
  roomsNumber?: string;
};

export type HotelItems = {
  hotelId: string;
  hotelItems: HotelItem[];
};

/**
 * This wrapper contains all the items of an hotel
 */
const HotelItemsCardsWrapper = () => {
  const [hotelItems, setHotelItems] = useState<HotelItems>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchHotelItemsData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${endpointsUrl.anHotelItems}`);
      if (response.status === 200) {
        const hotelItems: HotelItems = response.data;
        setHotelItems(hotelItems);
        setIsError(false);
      }
    } catch (errro) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchHotelItemsData();
  }, []);

  if (isLoading) return <CircularLoader />;
  return (
    <StyledChaletsCardsWrapper>
      {isError ? (
        <ChaletsCardsWrapperMessages>
          المعذرة حصل خطأ، يرجى المحاولة لاحقا
        </ChaletsCardsWrapperMessages>
      ) : hotelItems?.hotelItems.length === 0 ? (
        <ChaletsCardsWrapperMessages>
          لم يتم العثور على أية شاليه
        </ChaletsCardsWrapperMessages>
      ) : (
        hotelItems?.hotelItems.map((hotelItem: HotelItem, index: number) => (
          <HotelItemsCardsCard
            key={index}
            hotelId={hotelItems.hotelId}
            hotelItem={hotelItem}
          />
        ))
      )}
    </StyledChaletsCardsWrapper>
  );
};

export default HotelItemsCardsWrapper;
