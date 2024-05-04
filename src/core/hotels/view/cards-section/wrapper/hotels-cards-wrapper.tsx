import axios from "axios";
import { useEffect, useState } from "react";
import { endpointsUrl } from "~/bootstrap/helper/endpoints";
import {
  ChaletsCardsWrapperMessages,
  StyledChaletsCardsWrapper,
} from "~/core/chalets/view/cards-section/wrapper/style";
import HotelsCardsCard from "~/core/hotels/view/cards-section/card/hotels-cards-card";
import HotelsFilterationWrapper from "~/core/hotels/view/filtration-section/wrapper/hotels-filteration-wrapper";
import CircularLoader from "~/generic/components/circular-loader/circular-loader";

export type Hotel = {
  id: string;
  images: string[];
  hotelName: string;
  location: string;
  phoneNumber: number;
  description: string;
  numberOfStars: number;
};

const HotelsCardsWrapper = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchChaletsData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${endpointsUrl.allHotels}`);
      if (response.status === 200) {
        const chalets: Hotel[] = response.data;
        setHotels(chalets);
        setIsError(false);
      }
    } catch (errro) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchChaletsData();
  }, []);
  if (isLoading) return <CircularLoader />;
  return (
    <StyledChaletsCardsWrapper>
      <HotelsFilterationWrapper
        setFilteredHotels={setFilteredHotels}
        hotels={hotels}
      />
      {isError ? (
        <ChaletsCardsWrapperMessages>
          المعذرة حصل خطأ، يرجى المحاولة لاحقا
        </ChaletsCardsWrapperMessages>
      ) : hotels.length === 0 ? (
        <ChaletsCardsWrapperMessages>
          لم يتم العثور على أية شاليه
        </ChaletsCardsWrapperMessages>
      ) : (
        filteredHotels.map((hotel: Hotel, index: number) => (
          <HotelsCardsCard key={index} hotel={hotel} />
        ))
      )}
    </StyledChaletsCardsWrapper>
  );
};

export default HotelsCardsWrapper;
