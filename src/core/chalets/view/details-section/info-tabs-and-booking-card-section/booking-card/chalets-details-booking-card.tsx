import "dayjs/locale/ar";
import { useState } from "react";
import {
  StyledAppDivider,
  StyledAppSubTitleWrapper,
} from "~/bootstrap/helper/global-styles";
import ChaletsDetailsBookingCardBookingDate from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/booking-card/chalets-details-booking-card-booking-date";
import ChaletsDetailsBookingCardConditionSection from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/booking-card/chalets-details-booking-card-condition-section";
import ChaletsDetailsBookingCardPayTotalMoneySection from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/booking-card/chalets-details-booking-card-pay-total-money-section";
import ChaletsDetailsBookingCardPersonalInfo from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/booking-card/chalets-details-booking-card-personal-info";
import { DetailsBookingCardDiv } from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/booking-card/style";

interface IChaletsDetailsBookingCardProps {
  name: string;
  pricePerNight: number;
}

export type BookingCardPersonalInfo = {
  name: string;
  phoneNumber: string;
};

export const ChaletsDetailsBookingCard = (
  props: IChaletsDetailsBookingCardProps
) => {
  const { name, pricePerNight } = props;

  const [checked, setChecked] = useState(false);
  const [numberOfReservedDays, setNumberOfReservedDays] = useState(0);
  const [personalInfo, setPersonalInfo] = useState<
    BookingCardPersonalInfo | undefined
  >();

  return (
    <DetailsBookingCardDiv>
      <StyledAppSubTitleWrapper>أحجز {name}</StyledAppSubTitleWrapper>
      <StyledAppDivider />
      <ChaletsDetailsBookingCardPersonalInfo
        setPersonalInfo={setPersonalInfo}
      />
      <StyledAppDivider />
      <ChaletsDetailsBookingCardBookingDate
        pricePerNight={pricePerNight}
        setNumberOfReservedDays={setNumberOfReservedDays}
        numberOfReservedDays={numberOfReservedDays}
      />
      <ChaletsDetailsBookingCardConditionSection
        setChecked={setChecked}
        checked={checked}
      />
      <StyledAppDivider />
      <ChaletsDetailsBookingCardPayTotalMoneySection
        checked={checked}
        pricePerNight={pricePerNight}
        numberOfReservedDays={numberOfReservedDays}
        personalInfo={personalInfo}
      />
    </DetailsBookingCardDiv>
  );
};

export default ChaletsDetailsBookingCard;
