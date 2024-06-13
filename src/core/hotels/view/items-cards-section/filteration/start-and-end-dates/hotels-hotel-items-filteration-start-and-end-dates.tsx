import TextField from "@mui/material/TextField/TextField";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs, { Dayjs } from "dayjs";
import { SetStateAction } from "react";
import styled from "styled-components";
import {
  mainFontFamily,
  mediumScreenSize,
  primaryColor,
} from "~/bootstrap/helper/global-helper";
import { SetState } from "~/bootstrap/helper/global-types";

/* -------------------------------------------------------------------------- */
/*                                   Styling                                  */
/* -------------------------------------------------------------------------- */
const StyledFilterationStartAndEndDatesDesktopDatePicker = styled(
  DesktopDatePicker
)`
  && {
    border-radius: 32px;
    border: 1px solid black;
    width: 25%;
    @media (max-width: ${mediumScreenSize}) {
      width: 100%;
    }

    && .MuiOutlinedInput-notchedOutline {
      border: none;
    }

    & .MuiInputBase-root {
      flex-direction: row-reverse;
      font-family: ${mainFontFamily};
      max-height: 46px;
    }

    & .MuiInputAdornment-root .MuiSvgIcon-root {
      color: ${primaryColor};
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
const FilterationStartAndEndDates = (
  props: IFilterationStartAndEndDatesProps
) => {
  const { setStartDate, setEndDate } = props;
  const today = dayjs(new Date());
  const tomorrow = dayjs().add(1, "day");

  return (
    <>
      <StyledFilterationStartAndEndDatesDesktopDatePicker
        format="DD/MM/YYYY"
        views={["year", "month", "day"]}
        openTo="day"
        disablePast
        minDate={today}
        onChange={(newValue: SetStateAction<Dayjs | null | undefined>) =>
          setStartDate(newValue)
        }
        slots={{
          textField: (params) => (
            <TextField {...params} placeholder="تاريخ الوصول.." />
          ),
        }}
      />

      <StyledFilterationStartAndEndDatesDesktopDatePicker
        format="DD/MM/YYYY"
        views={["year", "month", "day"]}
        openTo="day"
        disablePast
        minDate={tomorrow}
        onChange={(newValue: SetStateAction<dayjs.Dayjs | null | undefined>) =>
          setEndDate(newValue)
        }
        slots={{
          textField: (params) => (
            <TextField {...params} placeholder="تاريخ الخروج.." />
          ),
        }}
      />
    </>
  );
};

export default FilterationStartAndEndDates;
