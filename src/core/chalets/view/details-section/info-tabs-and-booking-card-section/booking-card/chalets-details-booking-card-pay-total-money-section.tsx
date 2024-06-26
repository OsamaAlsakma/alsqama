import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/ar";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import di from "~/bootstrap/di";
import { osamaCommissionRatio } from "~/bootstrap/helper/business-helpers";
import { endpointsUrl } from "~/bootstrap/helper/endpoints";
import { StyledAppNoteTitleWrapper } from "~/bootstrap/helper/global-styles";
import Store from "~/bootstrap/helper/store/store-type";
import useStoreSelector from "~/bootstrap/helper/vm/use-store-selector";
import langKey from "~/bootstrap/i18n/langKey";
import { BookingCardPersonalInfo } from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/booking-card/chalets-details-booking-card";
import {
  DetailsBookingCardConfirmConditionMessage,
  DetailsBookingCardPayButton,
  DetailsBookingCardTotalMoneyItemWrapper,
} from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/booking-card/style";
import AlertMessage from "~/generic/components/alert-message/alert-message";
import OpenLoginSignUpModalCTX from "~/generic/context/open-login-signup-modal-ctx";
import NUserStore from "~/support/login-signup-forms/store/i-user-store";
import { userStoreKey } from "~/support/login-signup-forms/store/user-store";
import { SwitchLoginSignupButton } from "~/support/login-signup-forms/style";

interface IChaletsDetailsBookingCardPayTotalMoneySectionProps {
  checked: boolean;
  pricePerNight: number;
  numberOfReservedDays: number;
  personalInfo: BookingCardPersonalInfo | undefined;
  startAndEndDates: {
    startDate: dayjs.Dayjs | null;
    endDate: dayjs.Dayjs | null;
  };
}

export const ChaletsDetailsBookingCardPayTotalMoneySection = (
  props: IChaletsDetailsBookingCardPayTotalMoneySectionProps
) => {
  const {
    checked,
    pricePerNight,
    numberOfReservedDays,
    personalInfo,
    startAndEndDates,
  } = props;
  const { endDate, startDate } = startAndEndDates;

  // message
  const [open, setOpen] = useState(false);

  // localization
  const { t } = useTranslation();

  // logged in?
  const userStore = di.resolve<Store<NUserStore.IUsernameStore>>(userStoreKey);
  const token = useStoreSelector(userStore, (store) => store.user.token);
  const { setIsOpen } = di.resolve(OpenLoginSignUpModalCTX).useContext();
  const [isLoading, setIsLoading] = useState(false);

  // payment
  const { hotelId, id } = useParams();

  const handleOnPay = async () => {
    setIsLoading(true);
    try {
      // post
      const response = await axios.post(`${endpointsUrl.payEndpoint}`, {
        accommodations_id: hotelId ? hotelId : id,
        sub_accommodations_id: hotelId ? id : null,
        user_id: "",
        name: personalInfo?.name,
        phone_number: personalInfo?.phoneNumber,
        start_date: startDate?.format("YYYY-MM-DD"),
        end_date: endDate?.format("YYYY-MM-DD"),
      });
      if (response.status === 200 || response.status === 201) {
        // console.log("success");
      }
    } catch (error) {
      // console.log("error");
      setOpen(true);
    }
    setIsLoading(false);
  };

  if (isLoading) return <span>جاري الدفع</span>;
  return (
    <>
      <DetailsBookingCardTotalMoneyItemWrapper>
        {t(langKey.detailsPage.totalAllDays)}&nbsp;
        {numberOfReservedDays > 0 ? (
          <StyledAppNoteTitleWrapper>
            {numberOfReservedDays * pricePerNight} ريال
          </StyledAppNoteTitleWrapper>
        ) : (
          " - "
        )}
      </DetailsBookingCardTotalMoneyItemWrapper>

      <DetailsBookingCardTotalMoneyItemWrapper>
        {t(langKey.detailsPage.fees)}&nbsp;
        {numberOfReservedDays > 0 ? (
          <StyledAppNoteTitleWrapper>
            {numberOfReservedDays * pricePerNight * osamaCommissionRatio}
            &nbsp;ريال
          </StyledAppNoteTitleWrapper>
        ) : (
          " - "
        )}
      </DetailsBookingCardTotalMoneyItemWrapper>
      <DetailsBookingCardPayButton
        onClick={() => handleOnPay()}
        disabled={
          !(
            checked &&
            numberOfReservedDays > 0 &&
            personalInfo?.name &&
            personalInfo?.phoneNumber &&
            token
          )
        }
        sx={{ paddingTop: "9px", paddingBottom: "2px" }}
      >
        أدفع&nbsp;
        {numberOfReservedDays * pricePerNight +
          numberOfReservedDays * pricePerNight * osamaCommissionRatio}
        &nbsp;ريال
      </DetailsBookingCardPayButton>
      <AlertMessage
        durationInMs={4500}
        message={t(langKey.detailsPage.successfulPaymentMessage)}
        open={open}
        setOpen={setOpen}
      />
      {!personalInfo?.name || !personalInfo?.phoneNumber ? (
        <DetailsBookingCardConfirmConditionMessage>
          {t(langKey.detailsPage.writeResidentInfoMessage)}
        </DetailsBookingCardConfirmConditionMessage>
      ) : !checked ? (
        <DetailsBookingCardConfirmConditionMessage>
          {t(langKey.detailsPage.confirmConditionsBeforePaying)}
        </DetailsBookingCardConfirmConditionMessage>
      ) : (
        !token && (
          <DetailsBookingCardConfirmConditionMessage>
            <SwitchLoginSignupButton
              disableRipple
              onClick={() => setIsOpen(true)}
            >
              {t(langKey.detailsPage.loginOrSignUpToContinue)}
            </SwitchLoginSignupButton>
          </DetailsBookingCardConfirmConditionMessage>
        )
      )}
    </>
  );
};

export default ChaletsDetailsBookingCardPayTotalMoneySection;
