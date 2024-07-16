import {
  ChaletsCardsCardFeatureTitle,
  ChaletsCardsCardFeatureIcon,
} from "~/core/chalets/view/cards-section/card/style";
import PlaceIcon from "@mui/icons-material/Place";
import {
  HotelsCardsCardDescription,
  HotelsCardsCardFeature,
  HotlesCardsCardFeaturesWrapper,
} from "~/core/hotels/view/cards-section/card/style";

type IHotelsCardsCardBodyProps = {
  cardBody: {
    location: string;
    phoneNumber: string;
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
      {phoneNumber && (
        <HotelsCardsCardFeature>
          <ChaletsCardsCardFeatureIcon src={`/icons/phone.svg`} alt="money" />
          <ChaletsCardsCardFeatureTitle>
            {phoneNumber}
          </ChaletsCardsCardFeatureTitle>
        </HotelsCardsCardFeature>
      )}
      <HotelsCardsCardFeature>
        <HotelsCardsCardDescription>{description}</HotelsCardsCardDescription>
      </HotelsCardsCardFeature>
    </HotlesCardsCardFeaturesWrapper>
  );
};

export default HotelsCardsCardBody;
