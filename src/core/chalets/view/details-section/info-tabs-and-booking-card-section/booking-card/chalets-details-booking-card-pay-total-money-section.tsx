import "dayjs/locale/ar";
import { StyledAppNoteTitleWrapper } from "~/bootstrap/helper/global-styles";
import {
  DetailsBookingCardPayButton,
  DetailsBookingCardTotalMoneyItemWrapper,
} from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/booking-card/style";

interface IChaletsDetailsBookingCardPayTotalMoneySectionProps {
  checked: boolean;
}

export const ChaletsDetailsBookingCardPayTotalMoneySection = (
  props: IChaletsDetailsBookingCardPayTotalMoneySectionProps
) => {
  const { checked } = props;
  console.log("pricePerNight", checked);

  return (
    <>
      <DetailsBookingCardTotalMoneyItemWrapper>
        مجموع جميع الأيام:
        <StyledAppNoteTitleWrapper> 10000 ريال </StyledAppNoteTitleWrapper>
      </DetailsBookingCardTotalMoneyItemWrapper>
      <DetailsBookingCardTotalMoneyItemWrapper>
        رسوم الخدمة:
        <StyledAppNoteTitleWrapper> 325 ريال </StyledAppNoteTitleWrapper>
      </DetailsBookingCardTotalMoneyItemWrapper>
      <DetailsBookingCardPayButton
        disabled={!checked}
        sx={{ paddingTop: "9px", paddingBottom: "2px" }}
      >
        أدفع 10325 ريال
      </DetailsBookingCardPayButton>
    </>
  );
};

export default ChaletsDetailsBookingCardPayTotalMoneySection;
