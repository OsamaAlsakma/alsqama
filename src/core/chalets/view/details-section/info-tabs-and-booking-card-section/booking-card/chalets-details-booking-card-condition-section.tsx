import "dayjs/locale/ar";
import { SetState } from "~/bootstrap/helper/global-types";
import {
  DetailsBookingCardConfirmConditionCheckbox,
  DetailsBookingCardConfirmConditionSpan,
} from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/booking-card/style";

interface IChaletsDetailsBookingCardConditionSectionProps {
  setChecked: SetState<boolean>;
  checked: boolean;
}

export const ChaletsDetailsBookingCardConditionSection = (
  props: IChaletsDetailsBookingCardConditionSectionProps
) => {
  const { setChecked, checked } = props;

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <DetailsBookingCardConfirmConditionCheckbox
        onChange={handleChange1}
        checked={checked}
      />
      <DetailsBookingCardConfirmConditionSpan
        onClick={() => setChecked((prev) => !prev)}
      >
        يرجى قراءة الشروط والموافقة عليها
      </DetailsBookingCardConfirmConditionSpan>
    </div>
  );
};

export default ChaletsDetailsBookingCardConditionSection;
