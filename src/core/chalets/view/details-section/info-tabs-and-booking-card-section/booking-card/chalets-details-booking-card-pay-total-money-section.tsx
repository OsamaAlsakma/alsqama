import "dayjs/locale/ar";
import { useState } from "react";
import { osamaCommissionRatio } from "~/bootstrap/helper/business-helpers";
import { StyledAppNoteTitleWrapper } from "~/bootstrap/helper/global-styles";
import {
  DetailsBookingCardConfirmConditionMessage,
  DetailsBookingCardPayButton,
  DetailsBookingCardTotalMoneyItemWrapper,
} from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/booking-card/style";
import AlertMessage from "~/generic/components/alert-message/alert-message";

interface IChaletsDetailsBookingCardPayTotalMoneySectionProps {
  checked: boolean;
  pricePerNight: number;
  numberOfReservedDays: number;
}

export const ChaletsDetailsBookingCardPayTotalMoneySection = (
  props: IChaletsDetailsBookingCardPayTotalMoneySectionProps
) => {
  const { checked, pricePerNight, numberOfReservedDays } = props;
  // message
  const [open, setOpen] = useState(false);
  return (
    <>
      <DetailsBookingCardTotalMoneyItemWrapper>
        مجموع جميع الأيام:&nbsp;
        {numberOfReservedDays > 0 ? (
          <StyledAppNoteTitleWrapper>
            {numberOfReservedDays * pricePerNight} ريال
          </StyledAppNoteTitleWrapper>
        ) : (
          " - "
        )}
      </DetailsBookingCardTotalMoneyItemWrapper>

      <DetailsBookingCardTotalMoneyItemWrapper>
        رسوم الخدمة:&nbsp;
        {numberOfReservedDays > 0 ? (
          <StyledAppNoteTitleWrapper>
            {numberOfReservedDays * pricePerNight * osamaCommissionRatio}
            &nbsp;ريال
          </StyledAppNoteTitleWrapper>
        ) : (
          " - "
        )}
      </DetailsBookingCardTotalMoneyItemWrapper>
      <DetailsBookingCardPayButton
        onClick={() => setOpen(true)}
        disabled={!(checked && numberOfReservedDays > 0)}
        sx={{ paddingTop: "9px", paddingBottom: "2px" }}
      >
        أدفع&nbsp;
        {numberOfReservedDays * pricePerNight +
          numberOfReservedDays * pricePerNight * osamaCommissionRatio}
        &nbsp;ريال
      </DetailsBookingCardPayButton>
      <AlertMessage
        durationInMs={4500}
        message="تم إرسال طلبك بنجاح، راجع أيميلك من فضلك"
        open={open}
        setOpen={setOpen}
      />
      {!checked && (
        <DetailsBookingCardConfirmConditionMessage>
          يرجى الموافقة على الشروط قبل الدفع
        </DetailsBookingCardConfirmConditionMessage>
      )}
    </>
  );
};

export default ChaletsDetailsBookingCardPayTotalMoneySection;
