import {
  ChaletsCardsCardFeaturesWrapper,
  ChaletsCardsCardFeature,
  ChaletsCardsCardFeatureTitle,
  ChaletsCardsCardFeatureIcon,
} from "~/core/chalets/view/cards-section/card/style";
import PlaceIcon from "@mui/icons-material/Place";

type IChaletsCardsCardBodyProps = {
  cardBody: {
    location: string;
    price: number;
    numberOfRooms: string;
    nearestTimeAvailable: string;
  };
};

const ChaletsCardsCardBody = (props: IChaletsCardsCardBodyProps) => {
  const { location, nearestTimeAvailable, numberOfRooms, price } =
    props.cardBody;
  return (
    <ChaletsCardsCardFeaturesWrapper>
      <ChaletsCardsCardFeature>
        <PlaceIcon />
        <ChaletsCardsCardFeatureTitle>{location}</ChaletsCardsCardFeatureTitle>
      </ChaletsCardsCardFeature>
      <ChaletsCardsCardFeature>
        <ChaletsCardsCardFeatureIcon src={`/icons/money.svg`} alt="money" />
        <ChaletsCardsCardFeatureTitle>
          {price}ريال \ ليلة
        </ChaletsCardsCardFeatureTitle>
      </ChaletsCardsCardFeature>
      <ChaletsCardsCardFeature>
        <ChaletsCardsCardFeatureIcon src={`/icons/rooms.svg`} alt="rooms" />
        <ChaletsCardsCardFeatureTitle>
          {numberOfRooms}
        </ChaletsCardsCardFeatureTitle>
      </ChaletsCardsCardFeature>
      <ChaletsCardsCardFeature>
        <ChaletsCardsCardFeatureIcon
          src={`/icons/calender.svg`}
          alt="calender"
        />
        <ChaletsCardsCardFeatureTitle>
          {nearestTimeAvailable}
        </ChaletsCardsCardFeatureTitle>
      </ChaletsCardsCardFeature>
    </ChaletsCardsCardFeaturesWrapper>
  );
};

export default ChaletsCardsCardBody;
