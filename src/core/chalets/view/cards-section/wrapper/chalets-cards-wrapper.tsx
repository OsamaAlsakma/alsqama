import axios from "axios";
import { useEffect, useState } from "react";
import ChaletsCardsCard from "~/core/chalets/view/cards-section/card/chalets-cards-card";
import { StyledChaletsCardsWrapper } from "~/core/chalets/view/cards-section/wrapper/style";

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
  const fetchIconsData = async () => {
    const response = await axios.get(
      "https://run.mocky.io/v3/055c2231-9637-4222-9378-2edec88cbf60"
    );
    const chalets: Chalet[] = response.data;
    setChalets(chalets);
  };
  useEffect(() => {
    fetchIconsData();
  }, []);

  return (
    <StyledChaletsCardsWrapper>
      {chalets.map((chalet: Chalet, index: number) => (
        <ChaletsCardsCard key={index} chalet={chalet} />
      ))}
    </StyledChaletsCardsWrapper>
  );
};

export default ChaletsCardsWrapper;
