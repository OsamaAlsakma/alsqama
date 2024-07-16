import PlaceIcon from "@mui/icons-material/Place";
import styled from "styled-components";
import {
  ChaletsCardsCardFeature,
  ChaletsCardsCardFeatureIcon,
  ChaletsCardsCardFeatureTitle,
} from "~/core/chalets/view/cards-section/card/style";

type IAppartmentsCardsCardBodyProps = {
  location?: string;
  numberOfRooms?: string;
};

export const AppartmentsCardsCardBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const AppartmentsCardsCardBody = (props: IAppartmentsCardsCardBodyProps) => {
  const { location, numberOfRooms } = props;
  return (
    <AppartmentsCardsCardBodyWrapper>
      {location && (
        <ChaletsCardsCardFeature style={{ width: "100%" }}>
          <PlaceIcon />
          <ChaletsCardsCardFeatureTitle>
            {location}
          </ChaletsCardsCardFeatureTitle>
        </ChaletsCardsCardFeature>
      )}
      {numberOfRooms && (
        <ChaletsCardsCardFeature style={{ width: "100%" }}>
          <ChaletsCardsCardFeatureIcon src={`/icons/rooms.svg`} alt="rooms" />
          <ChaletsCardsCardFeatureTitle>
            {numberOfRooms}
          </ChaletsCardsCardFeatureTitle>
        </ChaletsCardsCardFeature>
      )}
    </AppartmentsCardsCardBodyWrapper>
  );
};

export default AppartmentsCardsCardBody;
