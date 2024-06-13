import dayjs, { Dayjs } from "dayjs";
import { SetStateAction } from "react";
import { SetState } from "~/bootstrap/helper/global-types";
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

  return (
    <>
      <StyledFilterationStartAndEndDatesDesktopDatePicker
        openTo="day"
        disablePast
        minDate={today}
        onChange={(newValue: SetStateAction<Dayjs | null | undefined>) =>
          setStartDate(newValue)
        }
        slotProps={{
          textField: {
            placeholder: "تاريخ الوصول..",
          },
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
            placeholder: "تاريخ الخروج..",
          },
        }}
      />
    </>
  );
};

export default FilterationStartAndEndDates;
