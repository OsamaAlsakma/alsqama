import {
  ChaletsCardsCardFeatureTitle,
  ChaletsCardsCardFeatureIcon,
} from "~/core/chalets/view/cards-section/card/style";
import {
  HotleItemsCardsCardFeature,
  HotleItemsCardsCardFeaturesWrapper,
} from "~/core/hotels/view/items-cards-section/card/style";

interface IHotelItemsCardsCardBodyProps {
  bedsNumber?: string;
  pricePerNight: number;
}

const HotelItemsCardsCardBody = (props: IHotelItemsCardsCardBodyProps) => {
  const { bedsNumber, pricePerNight } = props;
  return (
    <HotleItemsCardsCardFeaturesWrapper>
      <HotleItemsCardsCardFeature>
        <ChaletsCardsCardFeatureIcon src="./icons/money.svg" alt="money" />
        <ChaletsCardsCardFeatureTitle>
          {pricePerNight}
        </ChaletsCardsCardFeatureTitle>
      </HotleItemsCardsCardFeature>
      {bedsNumber && (
        <HotleItemsCardsCardFeature style={{ justifyContent: "left" }}>
          <ChaletsCardsCardFeatureIcon src="./icons/bed-icon.svg" alt="bed" />
          <ChaletsCardsCardFeatureTitle>
            {bedsNumber}
          </ChaletsCardsCardFeatureTitle>
        </HotleItemsCardsCardFeature>
      )}
    </HotleItemsCardsCardFeaturesWrapper>
  );
};

export default HotelItemsCardsCardBody;
