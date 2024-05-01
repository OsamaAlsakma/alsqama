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

  const [checked, setChecked] = useState(false);
  const [numberOfReservedDays, setNumberOfReservedDays] = useState(0);

  return (
    <DetailsBookingCardDiv>
      <StyledAppSubTitleWrapper>
        أحجز الجناح الغربي من شاليه مونتكارلو
      </StyledAppSubTitleWrapper>
      <StyledAppDivider />
      <ChaletsDetailsBookingCardBookingDate
        pricePerNight={pricePerNight}
        setNumberOfReservedDays={setNumberOfReservedDays}
        numberOfReservedDays={numberOfReservedDays}
      />
      <StyledAppDivider />
      <ChaletsDetailsBookingCardConditionSection
        bookingConditionText="الإلغاء إلا بعد مرور 6 ساعات على موعد الحجز
        عملية الحجز تتم بشكل أوتوماتيكي بدون تدخل بشري وعند الحجز لا يمكن
        "
        setChecked={setChecked}
        checked={checked}
      />
      <StyledAppDivider />
      <ChaletsDetailsBookingCardPayTotalMoneySection
        checked={checked}
        pricePerNight={pricePerNight}
        numberOfReservedDays={numberOfReservedDays}
      />
    </DetailsBookingCardDiv>
  );
};

export default ChaletsDetailsBookingCard;
