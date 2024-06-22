import dayjs, { Dayjs } from "dayjs";
import { SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { FilterationTwoInputsWrapper } from "~/bootstrap/helper/global-styles";
import { SetState } from "~/bootstrap/helper/global-types";
import langKey from "~/bootstrap/i18n/langKey";
import { StyledFilterationStartAndEndDatesDesktopDatePicker } from "~/generic/components/filteration/start-and-end-dates/styles";

interface IFilterationStartAndEndDatesProps {
  setStartDate: SetState<Dayjs | null | undefined>;
  setEndDate: SetState<Dayjs | null | undefined>;
}

// MM.DD.YYYY
const FilterationStartAndEndDates = (
  props: IFilterationStartAndEndDatesProps
) => {
  const { setStartDate, setEndDate } = props;
  const today = dayjs(new Date());
  const tomorrow = dayjs().add(1, "day");
  const { t } = useTranslation();
  return (
    <FilterationTwoInputsWrapper>
      <StyledFilterationStartAndEndDatesDesktopDatePicker
        openTo="day"
        disablePast
        minDate={today}
        onChange={(newValue: SetStateAction<Dayjs | null | undefined>) =>
          setStartDate(newValue)
        }
        slotProps={{
          textField: {
            placeholder: `${t(langKey.search.arriveDate)}`,
          },
          popper: { placement: "bottom-end" },
        }}
      />

      <StyledFilterationStartAndEndDatesDesktopDatePicker
        openTo="day"
        disablePast
        minDate={tomorrow}
        onChange={(newValue: SetStateAction<dayjs.Dayjs | null | undefined>) =>
          setEndDate(newValue)
        }
        slotProps={{
          textField: {
            placeholder: `${t(langKey.search.leaveDate)}`,
          },
          popper: { placement: "bottom-end" },
        }}
      />
    </FilterationTwoInputsWrapper>
  );
};

export default FilterationStartAndEndDates;
