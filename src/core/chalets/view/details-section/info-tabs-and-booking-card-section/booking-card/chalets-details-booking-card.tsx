import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { SetStateAction, useState } from "react";
import styled from "styled-components";
import * as palette from "~/bootstrap/helper/global-helper";
import {
  StyledAppDivider,
  StyledAppNoteTitleWrapper,
  StyledAppSubTitleWrapper,
  StyledMainAppButton,
} from "~/bootstrap/helper/global-styles";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ar";
import Checkbox from "@mui/material/Checkbox";

interface IChaletsDetailsBookingCardProps {
  pricePerNight: number;
}

const DetailsBookingCardDiv = styled.div`
  width: calc(50% - 20px);
  border-radius: 16px;
  height: fit-content;
  padding: 24px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  @media (max-width: ${palette.mediumScreenSize}) {
    width: 100%;
  }
`;

const DetailsBookingCardInputsSection = styled.div`
  display: flex;
  gap: 8px;
  margin: 16px 0px;
`;

const DetailsBookingCardInput = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 20px);
`;

const DetailsBookingCardPayingButton = styled(StyledMainAppButton)`
  width: 50%;
  &:disabled {
    cursor: not-allowed !important;
    pointer-events: all !important;
  }
`;

const DetailsBookingCardConfirmCondition = styled.span`
  border-bottom: 1px solid black;
  cursor: pointer;
  user-select: none;
`;

export const ChaletsDetailsBookingCard = (
  props: IChaletsDetailsBookingCardProps
) => {
  const { pricePerNight } = props;
  console.log("pricePerNight", pricePerNight);

  const [value, setValue] = useState<Dayjs | null>(dayjs(new Date()));
  const [checked, setChecked] = useState(false);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <DetailsBookingCardDiv>
      <StyledAppSubTitleWrapper>
        أحجز الجناح الغربي من شاليه مونتكارلو
      </StyledAppSubTitleWrapper>
      <div
        className="pricePerNithg"
        style={{ display: "flex", alignItems: "center", gap: "4px" }}
      >
        <StyledAppNoteTitleWrapper> 2000 </StyledAppNoteTitleWrapper>
        ريال \ لليلة
      </div>
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
              value={value}
              onChange={(newValue: SetStateAction<dayjs.Dayjs | null>) =>
                setValue(newValue)
              }
            />
          </DetailsBookingCardInput>
        </DetailsBookingCardInputsSection>
        <StyledAppNoteTitleWrapper>شروط الحجز</StyledAppNoteTitleWrapper>
        <p>
          عملية الحجز تتم بشكل أوتوماتيكي بدون تدخل بشري وعند الحجز لا يمكن
          الإلغاء إلا بعد مرور 6 ساعات على موعد الحجز
        </p>
        <StyledAppDivider />
        {/* Total money calculation */}
        <div style={{ display: "flex", alignItems: "center" }}>
          مجموع جميع الأيام:
          <StyledAppNoteTitleWrapper> 10000 ريال </StyledAppNoteTitleWrapper>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          رسوم الخدمة:
          <StyledAppNoteTitleWrapper> 325 ريال </StyledAppNoteTitleWrapper>
        </div>
        {/* footer */}
        <div
          className="footer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="confirm-conditions">
            <Checkbox
              onChange={handleChange1}
              checked={checked}
              style={{ padding: "0px" }}
              className="#confirm"
            />

            <DetailsBookingCardConfirmCondition
              onClick={() => setChecked((prev) => !prev)}
            >
              أوافق على الشروط
            </DetailsBookingCardConfirmCondition>
          </div>

          <DetailsBookingCardPayingButton
            disabled={!checked}
            sx={{ paddingTop: "9px", paddingBottom: "2px" }}
          >
            أدفع 10325 ريال
          </DetailsBookingCardPayingButton>
        </div>
      </LocalizationProvider>
    </DetailsBookingCardDiv>
  );
};

export default ChaletsDetailsBookingCard;
