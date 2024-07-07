import PlaceIcon from "@mui/icons-material/Place";
import {
  ChaletsCardsCardFeature,
  ChaletsCardsCardFeatureIcon,
  ChaletsCardsCardFeaturesWrapper,
  ChaletsCardsCardFeatureTitle,
} from "~/core/chalets/view/cards-section/card/style";

type IAppartmentsCardsCardBodyProps = {
  location?: string;
  numberOfRooms?: string;
};

const AppartmentsCardsCardBody = (props: IAppartmentsCardsCardBodyProps) => {
  const { location, numberOfRooms } = props;
  return (
    <ChaletsCardsCardFeaturesWrapper>
      {location && (
        <ChaletsCardsCardFeature>
          <PlaceIcon />
          <ChaletsCardsCardFeatureTitle>
            {location}
          </ChaletsCardsCardFeatureTitle>
        </ChaletsCardsCardFeature>
      )}
      {numberOfRooms && (
        <ChaletsCardsCardFeature $isLeft>
          <ChaletsCardsCardFeatureIcon src={`/icons/rooms.svg`} alt="rooms" />
          <ChaletsCardsCardFeatureTitle>
            {numberOfRooms}
          </ChaletsCardsCardFeatureTitle>
        </ChaletsCardsCardFeature>
      )}
    </ChaletsCardsCardFeaturesWrapper>
  );
};

export default AppartmentsCardsCardBody;
