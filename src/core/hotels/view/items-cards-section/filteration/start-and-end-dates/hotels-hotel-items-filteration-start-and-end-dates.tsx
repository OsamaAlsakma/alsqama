import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { SetStateAction } from "react";
import styled from "styled-components";
import { primaryColor, secondaryColor } from "~/bootstrap/helper/global-helper";
import { SetState } from "~/bootstrap/helper/global-types";

/* -------------------------------------------------------------------------- */
/*                                   Styling                                  */
/* -------------------------------------------------------------------------- */
const DetailsBookingCardInputsSection = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;

const DetailsBookingCardInput = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${secondaryColor};
  border-radius: 32px;
  width: 49%;
`;

const StyledDatePicker = styled(DatePicker)`
  && {
    && .MuiOutlinedInput-notchedOutline {
      border: none;
    }
  }
`;

interface IFilterationStartAndEndDatesProps {
  setStartDate: SetState<Dayjs | null | undefined>;
  setEndDate: SetState<Dayjs | null | undefined>;
}

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */
// MM.DD.YYYY
const HotelsHotelItemsFilterationStartAndEndDates = (
  props: IFilterationStartAndEndDatesProps
) => {
  const { setStartDate, setEndDate } = props;
  const today = dayjs(new Date());
  const tomorrow = dayjs().add(1, "day");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ar">
      <DetailsBookingCardInputsSection className="inputs">
        <DetailsBookingCardInput className="from-input">
          <StyledDatePicker
            format="DD/MM/YYYY"
            views={["year", "month", "day"]}
            openTo="day"
            disablePast
            minDate={today}
            onChange={(newValue: SetStateAction<Dayjs | null | undefined>) =>
              setStartDate(newValue)
            }
            slotProps={{
              day: {
                sx: {
                  "&.MuiPickersDay-root.Mui-selected": {
                    backgroundColor: `${primaryColor}`,
                    color: "white",
                  },
                },
              },
            }}
          />
        </DetailsBookingCardInput>
        <DetailsBookingCardInput className="to-input">
          <StyledDatePicker
            format="DD/MM/YYYY"
            views={["year", "month", "day"]}
            openTo="day"
            disablePast
            minDate={tomorrow}
            onChange={(
              newValue: SetStateAction<dayjs.Dayjs | null | undefined>
            ) => setEndDate(newValue)}
            slotProps={{
              day: {
                sx: {
                  "&.MuiPickersDay-root.Mui-selected": {
                    backgroundColor: `${primaryColor}`,
                    color: "white",
                  },
                },
              },
            }}
          />
        </DetailsBookingCardInput>
      </DetailsBookingCardInputsSection>
    </LocalizationProvider>
  );
};

export default HotelsHotelItemsFilterationStartAndEndDates;
