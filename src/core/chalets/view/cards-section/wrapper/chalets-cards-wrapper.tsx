import axios from "axios";
import { useEffect, useState } from "react";
import ChaletsCardsCard from "~/core/chalets/view/cards-section/card/chalets-cards-card";
import {
  ChaletsCardsWrapperMessages,
  StyledChaletsCardsWrapper,
} from "~/core/chalets/view/cards-section/wrapper/style";
import CircularLoader from "~/generic/components/circular-loader/circular-loader";

export type Chalet = {
  id: string;
  images: string[];
  name: string;
  numberOfStars: number;
  location: string;
  price: string;
  numberOfRooms: number;
  nearestTimeAvailable: string;
};

const ChaletsCardsWrapper = () => {
  const [chalets, setChalets] = useState<Chalet[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchChaletsData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://run.mocky.io/v3/055c2231-9637-4222-9378-2edec88cbf60"
      );
      if (response.status === 200) {
        const chalets: Chalet[] = response.data;
        setChalets(chalets);
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
      {isError ? (
        <ChaletsCardsWrapperMessages>
          المعذرة حصل خطأ، يرجى المحاولة لاحقا
        </ChaletsCardsWrapperMessages>
      ) : chalets.length === 0 ? (
        <ChaletsCardsWrapperMessages>
          لم يتم العثور على أية شاليه
        </ChaletsCardsWrapperMessages>
      ) : (
        chalets.map((chalet: Chalet, index: number) => (
          <ChaletsCardsCard key={index} chalet={chalet} />
        ))
      )}
    </StyledChaletsCardsWrapper>
  );
};

export default ChaletsCardsWrapper;
