import "dayjs/locale/ar";
import { useTranslation } from "react-i18next";
import { SetState } from "~/bootstrap/helper/global-types";
import langKey from "~/bootstrap/i18n/langKey";
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
  const { t } = useTranslation();

  return (
    <div>
      <DetailsBookingCardConfirmConditionCheckbox
        onChange={handleChange1}
        checked={checked}
      />
      <DetailsBookingCardConfirmConditionSpan
        onClick={() => setChecked((prev) => !prev)}
      >
        {t(langKey.detailsPage.readAndConfirmConditions)}
      </DetailsBookingCardConfirmConditionSpan>
    </div>
  );
};

export default ChaletsDetailsBookingCardConditionSection;
