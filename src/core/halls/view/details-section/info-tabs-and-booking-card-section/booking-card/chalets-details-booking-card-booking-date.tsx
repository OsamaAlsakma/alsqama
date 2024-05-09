/* eslint-disable react-hooks/exhaustive-deps */
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ar";
import { SetStateAction, useEffect, useState } from "react";
import { StyledAppNoteTitleWrapper } from "~/bootstrap/helper/global-styles";
import { SetState } from "~/bootstrap/helper/global-types";
import {
  DetailsBookingCardErrorMessage,
  DetailsBookingCardInput,
  DetailsBookingCardInputsSection,
  DetailsBookingCardPricePerNightDiv,
} from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/booking-card/style";

interface IChaletsDetailsBookingCardBookingDateProps {
  pricePerNight: number;
  numberOfReservedDays: number;
  setNumberOfReservedDays: SetState<number>;
}

export const ChaletsDetailsBookingCardBookingDate = (
  props: IChaletsDetailsBookingCardBookingDateProps
) => {
  const { pricePerNight, numberOfReservedDays, setNumberOfReservedDays } =
    props;

  const today = dayjs(new Date());
  const tomorrow = dayjs().add(1, "day");

  const [startDate, setStartDate] = useState<Dayjs | null>(today);
  const [endDate, setEndDate] = useState<Dayjs | null>(tomorrow);

  useEffect(() => {
    if (!(startDate && endDate)) {
      setNumberOfReservedDays(-1);
      return;
    }
    const numberOfReservedDays = endDate.diff(startDate, "day");
    if (numberOfReservedDays <= 0) {
      setNumberOfReservedDays(-1);
      return;
    }
    setNumberOfReservedDays(numberOfReservedDays);
  }, [startDate, endDate]);

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
            <span>يبدأ الحجز من:</span>
            <DatePicker
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
                textField: {
                  error: numberOfReservedDays <= 0 ? true : false,
                },
              }}
            />
          </DetailsBookingCardInput>
          <DetailsBookingCardInput className="to-input">
            <span>ينتهي الحجز في:</span>
            <DatePicker
              format="DD/MM/YYYY"
              views={["year", "month", "day"]}
              openTo="year"
              disablePast
              minDate={tomorrow}
              value={endDate}
              onChange={(newValue: SetStateAction<dayjs.Dayjs | null>) =>
                setEndDate(newValue)
              }
              slotProps={{
                textField: {
                  error: numberOfReservedDays <= 0 ? true : false,
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
