import styled from "styled-components";
import * as palette from "~/bootstrap/helper/global-helper";
import { StyledAppSubTitleWrapper } from "~/bootstrap/helper/global-styles";

interface IChaletsDetailsBookingCardProps {
  pricePerNight: number;
}

const DetailsBookingCardDiv = styled.div`
  width: calc(50% - 20px);
  border-radius: 16px;
  height: fit-content;
  padding: 24px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  @media (max-width: ${palette.mediumScreenSize}) {
    width: 100%;
  }
`;

const ChaletsDetailsBookingCard = (props: IChaletsDetailsBookingCardProps) => {
  const { pricePerNight } = props;
  console.log("pricePerNight", pricePerNight);
  return (
    <DetailsBookingCardDiv>
      <StyledAppSubTitleWrapper>
        أحجز الجناح الغربي من شاليع مونتكارلو
      </StyledAppSubTitleWrapper>
      <div>
        <span>200</span> ريال لليلة الواحدة
      </div>
    </DetailsBookingCardDiv>
  );
};

export default ChaletsDetailsBookingCard;
