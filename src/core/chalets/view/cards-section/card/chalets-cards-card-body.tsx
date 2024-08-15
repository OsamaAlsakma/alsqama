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
  const { location, numberOfRooms, price } = props.cardBody;
  return (
    <ChaletsCardsCardFeaturesWrapper>
      <ChaletsCardsCardFeature style={{ width: "100%" }}>
        <PlaceIcon />
        <ChaletsCardsCardFeatureTitle>{location}</ChaletsCardsCardFeatureTitle>
      </ChaletsCardsCardFeature>
      <ChaletsCardsCardFeature style={{ width: "100%" }}>
        <ChaletsCardsCardFeatureIcon src={`/icons/money.svg`} alt="money" />
        <ChaletsCardsCardFeatureTitle>
          {price} ريال \ ليلة
        </ChaletsCardsCardFeatureTitle>
      </ChaletsCardsCardFeature>
      <ChaletsCardsCardFeature style={{ width: "100%" }}>
        <ChaletsCardsCardFeatureIcon src={`/icons/rooms.svg`} alt="rooms" />
        <ChaletsCardsCardFeatureTitle>
          {numberOfRooms}
        </ChaletsCardsCardFeatureTitle>
      </ChaletsCardsCardFeature>
    </ChaletsCardsCardFeaturesWrapper>
  );
};

export default ChaletsCardsCardBody;
