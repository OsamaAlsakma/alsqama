import axios from "axios";
import { useEffect, useState } from "react";
import { endpointsUrl } from "~/bootstrap/helper/endpoints";
import {
  ChaletsCardsWrapperMessages,
  StyledChaletsCardsWrapper,
} from "~/core/chalets/view/cards-section/wrapper/style";
import HallsCardsCard from "~/core/halls/view/cards-section/card/halls-cards-card";
import HallsFilterationWrapper from "~/core/halls/view/filtration-section/wrapper/halls-filteration-wrapper";
import CircularLoader from "~/generic/components/circular-loader/circular-loader";

export type Hall = {
  id: string;
  images: string[];
  name: string;
  location: string;
  pricePerNight: number;
  peopleCapacity?: number;
};

const RetreatsCardsWrapper = () => {
  const [halls, setHalls] = useState<Hall[]>([]);

  const [filteredHalls, setFilteredHalls] = useState<Hall[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchHallsData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${endpointsUrl.allHalls}`);
      if (response.status === 200) {
        const halls: Hall[] = response.data;

        setHalls(halls);
        setIsError(false);
      }
    } catch (errro) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchHallsData();
  }, []);

  if (isLoading) return <CircularLoader />;
  return (
    <StyledChaletsCardsWrapper>
      <HallsFilterationWrapper
        setFilteredHalls={setFilteredHalls}
        halls={halls}
      />
      {isError ? (
        <ChaletsCardsWrapperMessages>
          المعذرة حصل خطأ، يرجى المحاولة لاحقا
        </ChaletsCardsWrapperMessages>
      ) : halls.length === 0 ? (
        <ChaletsCardsWrapperMessages>
          لم يتم العثور على أية شاليه
        </ChaletsCardsWrapperMessages>
      ) : (
        filteredHalls.map((hall: Hall, index: number) => (
          <HallsCardsCard key={index} hall={hall} />
        ))
      )}
    </StyledChaletsCardsWrapper>
  );
};

export default RetreatsCardsWrapper;
