import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ar";
import { SetStateAction, useState } from "react";
import { StyledAppNoteTitleWrapper } from "~/bootstrap/helper/global-styles";
import {
  DetailsBookingCardInput,
  DetailsBookingCardInputsSection,
  DetailsBookingCardPricePerNightDiv,
} from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/booking-card/style";

interface IChaletsDetailsBookingCardBookingDateProps {
  pricePerNight: number;
}

export const ChaletsDetailsBookingCardBookingDate = (
  props: IChaletsDetailsBookingCardBookingDateProps
) => {
  const { pricePerNight } = props;
  console.log("ChaletsDetailsBookingCardBookingDate", pricePerNight);

  const [value, setValue] = useState<Dayjs | null>(dayjs(new Date()));

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
              value={value}
              onChange={(newValue: SetStateAction<dayjs.Dayjs | null>) =>
                setValue(newValue)
              }
            />
          </DetailsBookingCardInput>
          <DetailsBookingCardInput className="to-input">
            <span>ينتهي الحجز في:</span>
            <DatePicker
              format="DD/MM/YYYY"
              views={["year", "month", "day"]}
              openTo="year"
              disablePast
              value={value}
              onChange={(newValue: SetStateAction<dayjs.Dayjs | null>) =>
                setValue(newValue)
              }
            />
          </DetailsBookingCardInput>
        </DetailsBookingCardInputsSection>
      </LocalizationProvider>
    </>
  );
};

export default ChaletsDetailsBookingCardBookingDate;
