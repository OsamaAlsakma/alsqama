import "dayjs/locale/ar";
import { osamaCommissionRatio } from "~/bootstrap/helper/business-helpers";
import { StyledAppNoteTitleWrapper } from "~/bootstrap/helper/global-styles";
import {
  DetailsBookingCardPayButton,
  DetailsBookingCardTotalMoneyItemWrapper,
} from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/booking-card/style";

interface IChaletsDetailsBookingCardPayTotalMoneySectionProps {
  checked: boolean;
  pricePerNight: number;
  numberOfReservedDays: number;
}

export const ChaletsDetailsBookingCardPayTotalMoneySection = (
  props: IChaletsDetailsBookingCardPayTotalMoneySectionProps
) => {
  const { checked, pricePerNight, numberOfReservedDays } = props;

  return (
    <>
      <DetailsBookingCardTotalMoneyItemWrapper>
        مجموع جميع الأيام:&nbsp;
        <StyledAppNoteTitleWrapper>
          {numberOfReservedDays * pricePerNight} ريال
        </StyledAppNoteTitleWrapper>
      </DetailsBookingCardTotalMoneyItemWrapper>
      <DetailsBookingCardTotalMoneyItemWrapper>
        رسوم الخدمة:&nbsp;
        <StyledAppNoteTitleWrapper>
          {numberOfReservedDays * pricePerNight * osamaCommissionRatio}
          &nbsp;ريال
        </StyledAppNoteTitleWrapper>
      </DetailsBookingCardTotalMoneyItemWrapper>
      <DetailsBookingCardPayButton
        disabled={!checked}
        sx={{ paddingTop: "9px", paddingBottom: "2px" }}
      >
        أدفع&nbsp;
        {numberOfReservedDays * pricePerNight +
          numberOfReservedDays * pricePerNight * osamaCommissionRatio}
        &nbsp;ريال
      </DetailsBookingCardPayButton>
    </>
  );
};

export default ChaletsDetailsBookingCardPayTotalMoneySection;
