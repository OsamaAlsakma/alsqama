import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { SetStateAction, useState } from "react";
import styled from "styled-components";
import { primaryColor, secondaryColor } from "~/bootstrap/helper/global-helper";

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

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */
const HotelsHotelItemsFilterationStartAndEndDates = () => {
  const today = dayjs(new Date());
  const tomorrow = dayjs().add(1, "day");
  const [startDate, setStartDate] = useState<Dayjs | null>(today);
  const [endDate, setEndDate] = useState<Dayjs | null>(tomorrow);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ar">
      <DetailsBookingCardInputsSection className="inputs">
        <DetailsBookingCardInput className="from-input">
          <StyledDatePicker
            format="DD/MM/YYYY"
            views={["year", "month", "day"]}
            openTo="year"
            disablePast
            value={startDate}
            minDate={today}
            onChange={(newValue: SetStateAction<dayjs.Dayjs | null>) =>
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
            openTo="year"
            disablePast
            minDate={tomorrow}
            value={endDate}
            onChange={(newValue: SetStateAction<dayjs.Dayjs | null>) =>
              setEndDate(newValue)
            }
          />
        </DetailsBookingCardInput>
      </DetailsBookingCardInputsSection>
    </LocalizationProvider>
  );
};

export default HotelsHotelItemsFilterationStartAndEndDates;
