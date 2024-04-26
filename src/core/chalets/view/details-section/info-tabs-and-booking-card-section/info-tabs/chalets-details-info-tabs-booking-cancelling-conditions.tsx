import { StyledAppDivider } from "~/bootstrap/helper/global-styles";
import {
  StyledInfoTabTitle,
  BookingCancelingConditionsEdgeCase,
  StyledBookingCancelingConditionsTitle,
  StyledBookingCancellingConditionsIcon,
} from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/info-tabs/style";

interface IChaletsDetailsInfoTabsBookingCancellingConditionsProps {
  bookingConditions: string;
  cancelingConditions: string;
}

const ChaletsDetailsInfoTabsBookingCancellingConditions = (
  props: IChaletsDetailsInfoTabsBookingCancellingConditionsProps
) => {
  const { bookingConditions, cancelingConditions } = props;
  return (
    <>
      <StyledInfoTabTitle>شروط الحجز والإلغاء</StyledInfoTabTitle>
      {!bookingConditions && !cancelingConditions && (
        <BookingCancelingConditionsEdgeCase>
          لا يوجد شروط للحجز و الإلغاء
        </BookingCancelingConditionsEdgeCase>
      )}
      {bookingConditions && (
        <div className="booking">
          <StyledBookingCancelingConditionsTitle>
            <StyledBookingCancellingConditionsIcon src="/icons/booking-conditions.svg" />
            شروط الحجز
          </StyledBookingCancelingConditionsTitle>
          <p>{bookingConditions}</p>
        </div>
      )}
      {bookingConditions && cancelingConditions && <StyledAppDivider />}
      {cancelingConditions && (
        <div className="canceling">
          <StyledBookingCancelingConditionsTitle>
            <StyledBookingCancellingConditionsIcon src="/icons/cancelling-conditions.svg" />
            شروط الإلغاء
          </StyledBookingCancelingConditionsTitle>
          <p>{cancelingConditions}</p>
        </div>
      )}
    </>
  );
};

export default ChaletsDetailsInfoTabsBookingCancellingConditions;
