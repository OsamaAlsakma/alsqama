import "dayjs/locale/ar";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import di from "~/bootstrap/di";
import { osamaCommissionRatio } from "~/bootstrap/helper/business-helpers";
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
}

export const ChaletsDetailsBookingCardPayTotalMoneySection = (
  props: IChaletsDetailsBookingCardPayTotalMoneySectionProps
) => {
  const { checked, pricePerNight, numberOfReservedDays, personalInfo } = props;
  // message
  const [open, setOpen] = useState(false);
  // localization
  const { t } = useTranslation();

  // logged in?
  const userStore = di.resolve<Store<NUserStore.IUsernameStore>>(userStoreKey);
  const token = useStoreSelector(userStore, (store) => store.user.token);
  const { setIsOpen } = di.resolve(OpenLoginSignUpModalCTX).useContext();

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
        onClick={() => setOpen(true)}
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
        message="تم إرسال طلبك بنجاح، راجع أيميلك من فضلك"
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
              يرجى إنشاء حساب وتسجيل الدخول للمتابعة
            </SwitchLoginSignupButton>
          </DetailsBookingCardConfirmConditionMessage>
        )
      )}
    </>
  );
};

export default ChaletsDetailsBookingCardPayTotalMoneySection;
