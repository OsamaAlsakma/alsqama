import {
  ChaletsCardsCardFeature,
  ChaletsCardsCardFeatureTitle,
  ChaletsCardsCardFeatureIcon,
} from "~/core/chalets/view/cards-section/card/style";
import PlaceIcon from "@mui/icons-material/Place";
import styled from "styled-components";

type IHallsCardsCardBodyProps = {
  location?: string;
  peopleCapacity?: string;
};

export const HallsCardsCardBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const HallsCardsCardBody = (props: IHallsCardsCardBodyProps) => {
  const { location, peopleCapacity } = props;
  return (
    <HallsCardsCardBodyWrapper>
      <ChaletsCardsCardFeature style={{ width: "100%" }}>
        <PlaceIcon />
        <ChaletsCardsCardFeatureTitle>{location}</ChaletsCardsCardFeatureTitle>
      </ChaletsCardsCardFeature>
      {peopleCapacity && (
        <ChaletsCardsCardFeature style={{ width: "100%" }}>
          <ChaletsCardsCardFeatureIcon src={`/icons/people.svg`} alt="people" />
          <ChaletsCardsCardFeatureTitle>
            {peopleCapacity}
          </ChaletsCardsCardFeatureTitle>
        </ChaletsCardsCardFeature>
      )}
    </HallsCardsCardBodyWrapper>
  );
};

export default HallsCardsCardBody;
