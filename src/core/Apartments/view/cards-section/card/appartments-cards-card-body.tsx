import {
  ChaletsCardsCardFeaturesWrapper,
  ChaletsCardsCardFeature,
  ChaletsCardsCardFeatureTitle,
  ChaletsCardsCardFeatureIcon,
} from "~/core/chalets/view/cards-section/card/style";
import PlaceIcon from "@mui/icons-material/Place";
import { appBaseUrl } from "~/bootstrap/helper/global-helper";

type IAppartmentsCardsCardBodyProps = {
  location: string;
  numberOfRooms?: number;
};

const AppartmentsCardsCardBody = (props: IAppartmentsCardsCardBodyProps) => {
  const { location, numberOfRooms } = props;
  return (
    <ChaletsCardsCardFeaturesWrapper>
      <ChaletsCardsCardFeature>
        <PlaceIcon />
        <ChaletsCardsCardFeatureTitle>{location}</ChaletsCardsCardFeatureTitle>
      </ChaletsCardsCardFeature>
      {numberOfRooms && (
        <ChaletsCardsCardFeature $isLeft>
          <ChaletsCardsCardFeatureIcon
            src={`/${appBaseUrl}/icons/rooms.svg`}
            alt="rooms"
          />
          <ChaletsCardsCardFeatureTitle>
            {numberOfRooms}
          </ChaletsCardsCardFeatureTitle>
        </ChaletsCardsCardFeature>
      )}
    </ChaletsCardsCardFeaturesWrapper>
  );
};

export default AppartmentsCardsCardBody;
