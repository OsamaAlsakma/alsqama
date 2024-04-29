import "dayjs/locale/ar";
import { useState } from "react";
import {
  StyledAppDivider,
  StyledAppSubTitleWrapper,
} from "~/bootstrap/helper/global-styles";
import ChaletsDetailsBookingCardBookingDate from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/booking-card/chalets-details-booking-card-booking-date";
import ChaletsDetailsBookingCardConditionSection from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/booking-card/chalets-details-booking-card-condition-section";
import ChaletsDetailsBookingCardPayTotalMoneySection from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/booking-card/chalets-details-booking-card-pay-total-money-section";
import { DetailsBookingCardDiv } from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/booking-card/style";

interface IChaletsDetailsBookingCardProps {
  pricePerNight: number;
}

export const ChaletsDetailsBookingCard = (
  props: IChaletsDetailsBookingCardProps
) => {
  const { pricePerNight } = props;
  console.log("pricePerNight", pricePerNight);

  const [checked, setChecked] = useState(false);

  return (
    <DetailsBookingCardDiv>
      <StyledAppSubTitleWrapper>
        أحجز الجناح الغربي من شاليه مونتكارلو
      </StyledAppSubTitleWrapper>
      <StyledAppDivider />
      <ChaletsDetailsBookingCardBookingDate pricePerNight={pricePerNight} />
      <StyledAppDivider />
      <ChaletsDetailsBookingCardConditionSection
        bookingConditionText="anything"
        setChecked={setChecked}
        checked={checked}
      />
      <StyledAppDivider />
      <ChaletsDetailsBookingCardPayTotalMoneySection checked={checked} />
    </DetailsBookingCardDiv>
  );
};

export default ChaletsDetailsBookingCard;
