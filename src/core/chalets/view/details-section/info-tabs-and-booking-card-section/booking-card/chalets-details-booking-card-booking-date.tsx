/* eslint-disable react-hooks/exhaustive-deps */
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ar";
import { SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { getDatesBetweenStartAndEndDates } from "~/bootstrap/helper/global-helper";
import { StyledAppNoteTitleWrapper } from "~/bootstrap/helper/global-styles";
import { ResservedDateType, SetState } from "~/bootstrap/helper/global-types";
import langKey from "~/bootstrap/i18n/langKey";
import {
  DetailsBookingCardErrorMessage,
  DetailsBookingCardInput,
  DetailsBookingCardInputsSection,
  DetailsBookingCardPricePerNightDiv,
} from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/booking-card/style";

interface IChaletsDetailsBookingCardBookingDateProps {
  pricePerNight: number;
  numberOfReservedDays: number;
  reservedDates: ResservedDateType[];
  startDate: dayjs.Dayjs | null;
  setStartDate: SetState<Dayjs | null>;
  endDate: dayjs.Dayjs | null;
  setEndDate: SetState<Dayjs | null>;
}

export const ChaletsDetailsBookingCardBookingDate = (
  props: IChaletsDetailsBookingCardBookingDateProps
) => {
  const {
    pricePerNight,
    numberOfReservedDays,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    reservedDates,
  } = props;
  const { t } = useTranslation();
  // const test = [
  //   {
  //     start_date: "2024-07-01",
  //     end_date: "2024-07-05",
  //   },
  //   {
  //     start_date: "2024-07-14",
  //     end_date: "2024-07-15",
  //   },
  // ];
  // resservedDates logic:
  const datesBlocked: string[] = [];
  reservedDates.forEach((reservedDate) => {
    const datesBetweenStartAndEnd = getDatesBetweenStartAndEndDates(
      dayjs(reservedDate.start_date),
      dayjs(reservedDate.end_date)
    );
    datesBlocked.push(...datesBetweenStartAndEnd);
  });
  0;

  const shouldDisableDate = (date: string | dayjs.Dayjs) => {
    return datesBlocked.includes(dayjs(date).format("YYYY-MM-DD"));
  };

  return (
    <>
      <DetailsBookingCardPricePerNightDiv>
        <StyledAppNoteTitleWrapper>
          موعد الحجز - {pricePerNight}
        </StyledAppNoteTitleWrapper>
        ريال \ يوم
      </DetailsBookingCardPricePerNightDiv>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ar">
        <DetailsBookingCardInputsSection className="inputs">
          <DetailsBookingCardInput className="from-input">
            <span>{t(langKey.detailsPage.bookingStartDate)}</span>
            <DatePicker
              shouldDisableDate={shouldDisableDate}
              openTo="day"
              disablePast
              value={startDate}
              minDate={dayjs(new Date())}
              onChange={(newValue: SetStateAction<dayjs.Dayjs | null>) =>
                setStartDate(newValue)
              }
              slotProps={{
                textField: {
                  error: numberOfReservedDays <= 0 ? true : false,
                },
                day: {
                  sx: {
                    "&.MuiPickersDay-root.Mui-disabled": {
                      backgroundColor: "#ccc",
                      textDecoration: "line-through",
                    },
                  },
                },
              }}
            />
          </DetailsBookingCardInput>
          <DetailsBookingCardInput className="to-input">
            <span>{t(langKey.detailsPage.bookingEndDate)}</span>
            <DatePicker
              shouldDisableDate={shouldDisableDate}
              openTo="day"
              disablePast
              minDate={dayjs().add(1, "day")}
              value={endDate}
              onChange={(newValue: SetStateAction<dayjs.Dayjs | null>) =>
                setEndDate(newValue)
              }
              slotProps={{
                textField: {
                  error: numberOfReservedDays <= 0 ? true : false,
                },
                day: {
                  sx: {
                    "&.MuiPickersDay-root.Mui-disabled": {
                      backgroundColor: "#ccc",
                      textDecoration: "line-through",
                    },
                  },
                },
              }}
            />
          </DetailsBookingCardInput>
        </DetailsBookingCardInputsSection>
        {numberOfReservedDays <= 0 && (
          <DetailsBookingCardErrorMessage>
            يرجى إدخال تاريخ مغادرة بعد تاريخ المجيء
          </DetailsBookingCardErrorMessage>
        )}
      </LocalizationProvider>
    </>
  );
};

export default ChaletsDetailsBookingCardBookingDate;
