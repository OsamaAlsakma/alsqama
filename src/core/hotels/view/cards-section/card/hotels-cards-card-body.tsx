import {
  ChaletsCardsCardFeatureTitle,
  ChaletsCardsCardFeatureIcon,
} from "~/core/chalets/view/cards-section/card/style";
import PlaceIcon from "@mui/icons-material/Place";
import {
  HotelsCardsCardFeature,
  HotlesCardsCardFeaturesWrapper,
} from "~/core/hotels/view/cards-section/card/style";

type IHotelsCardsCardBodyProps = {
  cardBody: {
    location: string;
    phoneNumber: number;
    description: string;
  };
};

const HotelsCardsCardBody = (props: IHotelsCardsCardBodyProps) => {
  const { location, phoneNumber, description } = props.cardBody;
  return (
    <HotlesCardsCardFeaturesWrapper>
      <HotelsCardsCardFeature>
        <PlaceIcon />
        <ChaletsCardsCardFeatureTitle>{location}</ChaletsCardsCardFeatureTitle>
      </HotelsCardsCardFeature>
      <HotelsCardsCardFeature>
        <ChaletsCardsCardFeatureIcon src="./icons/phone.svg" alt="money" />
        <ChaletsCardsCardFeatureTitle>
          {phoneNumber}
        </ChaletsCardsCardFeatureTitle>
      </HotelsCardsCardFeature>
      <HotelsCardsCardFeature>
        <ChaletsCardsCardFeatureTitle>
          {description}
        </ChaletsCardsCardFeatureTitle>
      </HotelsCardsCardFeature>
    </HotlesCardsCardFeaturesWrapper>
  );
};

export default HotelsCardsCardBody;
