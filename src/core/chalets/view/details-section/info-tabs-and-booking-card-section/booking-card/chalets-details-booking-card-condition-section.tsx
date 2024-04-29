import "dayjs/locale/ar";
import { StyledAppNoteTitleWrapper } from "~/bootstrap/helper/global-styles";
import { SetState } from "~/bootstrap/helper/global-types";
import {
  DetailsBookingCardConditionText,
  DetailsBookingCardConfirmConditionCheckbox,
  DetailsBookingCardConfirmConditionSpan,
} from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/booking-card/style";

interface IChaletsDetailsBookingCardConditionSectionProps {
  bookingConditionText: string;
  setChecked: SetState<boolean>;
  checked: boolean;
}

export const ChaletsDetailsBookingCardConditionSection = (
  props: IChaletsDetailsBookingCardConditionSectionProps
) => {
  const { bookingConditionText, setChecked, checked } = props;
  console.log(
    "ChaletsDetailsBookingCardConditionSection",
    bookingConditionText
  );

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <StyledAppNoteTitleWrapper>شروط الحجز</StyledAppNoteTitleWrapper>
      <DetailsBookingCardConditionText>
        عملية الحجز تتم بشكل أوتوماتيكي بدون تدخل بشري وعند الحجز لا يمكن
        الإلغاء إلا بعد مرور 6 ساعات على موعد الحجز
      </DetailsBookingCardConditionText>
      <DetailsBookingCardConfirmConditionCheckbox
        onChange={handleChange1}
        checked={checked}
      />

      <DetailsBookingCardConfirmConditionSpan
        onClick={() => setChecked((prev) => !prev)}
      >
        أوافق على الشروط
      </DetailsBookingCardConfirmConditionSpan>
    </>
  );
};

export default ChaletsDetailsBookingCardConditionSection;
