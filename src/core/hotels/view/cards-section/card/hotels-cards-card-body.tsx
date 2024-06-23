import {
  ChaletsCardsCardFeatureTitle,
  ChaletsCardsCardFeatureIcon,
} from "~/core/chalets/view/cards-section/card/style";
import PlaceIcon from "@mui/icons-material/Place";
import {
  HotelsCardsCardFeature,
  HotlesCardsCardFeaturesWrapper,
} from "~/core/hotels/view/cards-section/card/style";
import { appBaseUrl } from "~/bootstrap/helper/global-helper";

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
          <ChaletsCardsCardFeatureIcon
            src={`/${appBaseUrl}/icons/phone.svg`}
            alt="money"
          />
          <ChaletsCardsCardFeatureTitle>
            {phoneNumber}
          </ChaletsCardsCardFeatureTitle>
        </HotelsCardsCardFeature>
      )}
      <HotelsCardsCardFeature>
        <ChaletsCardsCardFeatureTitle>
          {description}
        </ChaletsCardsCardFeatureTitle>
      </HotelsCardsCardFeature>
    </HotlesCardsCardFeaturesWrapper>
  );
};

export default HotelsCardsCardBody;
