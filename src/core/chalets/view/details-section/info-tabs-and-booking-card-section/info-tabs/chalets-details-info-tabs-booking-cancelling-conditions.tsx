import { useTranslation } from "react-i18next";
import { appBaseUrl } from "~/bootstrap/helper/global-helper";
import {
  StyledAppDivider,
  StyledAppSubTitleWrapper,
} from "~/bootstrap/helper/global-styles";
import langKey from "~/bootstrap/i18n/langKey";
import {
  BookingCancelingConditionsEdgeCase,
  StyledBookingCancelingConditionsTitle,
  StyledBookingCancellingConditionsIcon,
} from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/info-tabs/style";

interface IChaletsDetailsInfoTabsBookingCancellingConditionsProps {
  bookingConditions: string;
  cancellingConditions: string;
}

const ChaletsDetailsInfoTabsBookingCancellingConditions = (
  props: IChaletsDetailsInfoTabsBookingCancellingConditionsProps
) => {
  const { bookingConditions, cancellingConditions } = props;
  const { t } = useTranslation();

  return (
    <>
      <StyledAppSubTitleWrapper>
        {t(langKey.detailsPage.bookingAndCancelingConditions)}
      </StyledAppSubTitleWrapper>
      {!bookingConditions && !cancellingConditions && (
        <BookingCancelingConditionsEdgeCase>
          {t(langKey.detailsPage.noBookingAndCancelingConditions)}
        </BookingCancelingConditionsEdgeCase>
      )}
      {bookingConditions && (
        <div className="booking">
          <StyledBookingCancelingConditionsTitle>
            <StyledBookingCancellingConditionsIcon
              src={`/${appBaseUrl}/icons/booking-conditions.svg`}
            />
            {t(langKey.detailsPage.bookingConditions)}
          </StyledBookingCancelingConditionsTitle>
          <p>{bookingConditions}</p>
        </div>
      )}
      {bookingConditions && cancellingConditions && <StyledAppDivider />}
      {cancellingConditions && (
        <div className="canceling">
          <StyledBookingCancelingConditionsTitle>
            <StyledBookingCancellingConditionsIcon
              src={`/${appBaseUrl}/icons/cancelling-conditions.svg`}
            />
            {t(langKey.detailsPage.cancelingConditions)}
          </StyledBookingCancelingConditionsTitle>
          <p>{cancellingConditions}</p>
        </div>
      )}
    </>
  );
};

export default ChaletsDetailsInfoTabsBookingCancellingConditions;
