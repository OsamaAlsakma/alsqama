import {
  ChaletsCardsCardFeaturesWrapper,
  ChaletsCardsCardFeature,
  ChaletsCardsCardFeatureTitle,
  ChaletsCardsCardFeatureIcon,
} from "~/core/chalets/view/cards-section/card/style";
import PlaceIcon from "@mui/icons-material/Place";

type IHallsCardsCardBodyProps = {
  location?: string;
  peopleCapacity?: string;
};

const HallsCardsCardBody = (props: IHallsCardsCardBodyProps) => {
  const { location, peopleCapacity } = props;
  return (
    <ChaletsCardsCardFeaturesWrapper>
      <ChaletsCardsCardFeature>
        <PlaceIcon />
        <ChaletsCardsCardFeatureTitle>{location}</ChaletsCardsCardFeatureTitle>
      </ChaletsCardsCardFeature>
      {peopleCapacity && (
        <ChaletsCardsCardFeature $isLeft>
          <ChaletsCardsCardFeatureIcon src={`/icons/people.svg`} alt="people" />
          <ChaletsCardsCardFeatureTitle>
            {peopleCapacity}
          </ChaletsCardsCardFeatureTitle>
        </ChaletsCardsCardFeature>
      )}
    </ChaletsCardsCardFeaturesWrapper>
  );
};

export default HallsCardsCardBody;
