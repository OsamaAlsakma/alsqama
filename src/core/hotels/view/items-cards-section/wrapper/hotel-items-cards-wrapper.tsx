/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ReviewType } from "~/core/chalets/page/chalet-details-page";
import {
  ChaletsCardsWrapperMessages,
  StyledChaletsCardsWrapper,
} from "~/core/chalets/view/cards-section/wrapper/style";
import HotelItemsCardsCard from "~/core/hotels/view/items-cards-section/card/hotel-items-cards-card";
import HotelsHotelItemsFilterationWrapper from "~/core/hotels/view/items-cards-section/filteration/hotels-hotel-items-filteration-wrapper";
import {
  HotelItemResponse,
  getHotelItemsDTO,
} from "~/core/hotels/view/items-cards-section/wrapper/get-hotel-items-dto";
import CircularLoader from "~/generic/components/circular-loader/circular-loader";

export type HotelItem = {
  id: string;
  title: string;
  reservedDates: string[];
  bedsNumber?: string;
  roomsNumber?: string;
  pricePerNight: number;
  images: string[];

  description?: string;
  coordinates?: string;
  videos?: string[];
  bookingCondition?: string;
  cancellingCondition?: string;
  hotelPhoneNumber?: number;
  features?: string[];
  reviews?: ReviewType[];
};

export type HotelItems = {
  hotelId: string;
  hotelItems: HotelItem[];
};

/**
 * This wrapper contains all the items of an hotel
 */
const HotelItemsCardsWrapper = () => {
  const [hotelItems, setHotelItems] = useState<HotelItem[]>();
  const [filteredHotelItems, setFilteredHotelItems] = useState<HotelItem[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { hotelId } = useParams();

  const fetchHotelItemsData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://frontiertech.dev/saqama/public/api/accommodations/${hotelId}/rooms`
      );
      if (response.status === 200) {
        const hotelItemsResponse: HotelItemResponse[] = response.data;
        const hotelItems = getHotelItemsDTO(hotelItemsResponse);
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
      <HotelsHotelItemsFilterationWrapper
        setFilteredHotelItems={setFilteredHotelItems}
        hotelItems={hotelItems ? hotelItems : []}
      />
      {isError ? (
        <ChaletsCardsWrapperMessages>
          المعذرة حصل خطأ، يرجى المحاولة لاحقا
        </ChaletsCardsWrapperMessages>
      ) : hotelItems?.length === 0 ? (
        <ChaletsCardsWrapperMessages>
          لم يتم العثور على أية غرفة
        </ChaletsCardsWrapperMessages>
      ) : (
        filteredHotelItems.map((hotelItem: HotelItem, index: number) => (
          <HotelItemsCardsCard
            key={index}
            hotelId={hotelId || ""}
            hotelItem={hotelItem}
          />
        ))
      )}
    </StyledChaletsCardsWrapper>
  );
};

export default HotelItemsCardsWrapper;
