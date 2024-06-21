/* eslint-disable react-hooks/exhaustive-deps */
import "dayjs/locale/ar";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { smallScreenSize } from "~/bootstrap/helper/global-helper";
import { StyledAppNoteTitleWrapper } from "~/bootstrap/helper/global-styles";
import { SetState } from "~/bootstrap/helper/global-types";
import langKey from "~/bootstrap/i18n/langKey";
import { BookingCardPersonalInfo } from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/booking-card/chalets-details-booking-card";
import { LoginSignUpInput } from "~/support/login-signup-forms/style";

interface IChaletsDetailsBookingCardPersonalInfoProps {
  setPersonalInfo: SetState<BookingCardPersonalInfo | undefined>;
}

const BookingCardPersonalInfoWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin: 16px 0px;
  @media (max-width: ${smallScreenSize}) {
    flex-direction: column;
  }
`;

const BookingCardPersonalInfoIten = styled.div`
  width: 50%;
  @media (max-width: ${smallScreenSize}) {
    width: 100%;
  }
`;

const BookingCardPersonalInfoInput = styled(LoginSignUpInput)`
  border-radius: 4px !important;
`;

export const ChaletsDetailsBookingCardPersonalInfo = (
  props: IChaletsDetailsBookingCardPersonalInfoProps
) => {
  const { setPersonalInfo } = props;

  const { t } = useTranslation();
  return (
    <>
      <BookingCardPersonalInfoWrapper>
        <BookingCardPersonalInfoIten>
          <StyledAppNoteTitleWrapper>
            {t(langKey.detailsPage.residentName)}
          </StyledAppNoteTitleWrapper>
          <BookingCardPersonalInfoInput
            style={{ borderColor: "rgba(0, 0, 0, 0.3)" }}
            disableUnderline
            type="text"
            placeholder={`${t(langKey.detailsPage.residentName)}*`}
            onChange={(e) => {
              setPersonalInfo((prev) => ({
                phoneNumber: prev ? prev.phoneNumber : "",
                name: e.target.value,
              }));
            }}
          />
        </BookingCardPersonalInfoIten>
        <BookingCardPersonalInfoIten>
          <StyledAppNoteTitleWrapper>
            {t(langKey.detailsPage.residentPhoneNumber)}
          </StyledAppNoteTitleWrapper>
          <BookingCardPersonalInfoInput
            style={{ borderColor: "rgba(0, 0, 0, 0.3)" }}
            disableUnderline
            type="phone"
            onChange={(e) => {
              setPersonalInfo((prev) => ({
                name: prev ? prev.name : "",
                phoneNumber: e.target.value,
              }));
            }}
            placeholder={`${t(langKey.detailsPage.residentPhoneNumber)}*`}
            required
          />
        </BookingCardPersonalInfoIten>
      </BookingCardPersonalInfoWrapper>
    </>
  );
};

export default ChaletsDetailsBookingCardPersonalInfo;
