import styled from "styled-components";
import * as palette from "~/bootstrap/helper/global-helper";

interface IChaletsDetailsBookingCardProps {
  pricePerNight: number;
}

const DetailsBookingCardDiv = styled.div`
  width: calc(50% - 20px);
  border-radius: 16px;
  border: 1px solid black;
  height: fit-content;
  @media (max-width: ${palette.mediumScreenSize}) {
    width: 100%;
  }
`;

const ChaletsDetailsBookingCard = (props: IChaletsDetailsBookingCardProps) => {
  const { pricePerNight } = props;
  console.log("pricePerNight", pricePerNight);
  return (
    <DetailsBookingCardDiv>chalets-details-booking-card</DetailsBookingCardDiv>
  );
};

export default ChaletsDetailsBookingCard;
