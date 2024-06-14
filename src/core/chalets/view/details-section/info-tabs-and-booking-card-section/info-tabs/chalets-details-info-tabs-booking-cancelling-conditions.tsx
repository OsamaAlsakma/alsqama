import { appBaseUrl } from "~/bootstrap/helper/global-helper";
import {
  StyledAppDivider,
  StyledAppSubTitleWrapper,
} from "~/bootstrap/helper/global-styles";
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
  return (
    <>
      <StyledAppSubTitleWrapper>شروط الحجز والإلغاء</StyledAppSubTitleWrapper>
      {!bookingConditions && !cancellingConditions && (
        <BookingCancelingConditionsEdgeCase>
          لا يوجد شروط للحجز و الإلغاء
        </BookingCancelingConditionsEdgeCase>
      )}
      {bookingConditions && (
        <div className="booking">
          <StyledBookingCancelingConditionsTitle>
            <StyledBookingCancellingConditionsIcon
              src={`/${appBaseUrl}/icons/booking-conditions.svg`}
            />
            شروط الحجز
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
            شروط الإلغاء
          </StyledBookingCancelingConditionsTitle>
          <p>{cancellingConditions}</p>
        </div>
      )}
    </>
  );
};

export default ChaletsDetailsInfoTabsBookingCancellingConditions;
