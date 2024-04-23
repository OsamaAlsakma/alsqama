import { DetailsInfoTabsBookingCancelingConditions } from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/info-tabs/style";

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
      <DetailsInfoTabsBookingCancelingConditions>
        {bookingConditions}
      </DetailsInfoTabsBookingCancelingConditions>
      <div>{cancelingConditions}</div>
    </>
  );
};

export default ChaletsDetailsInfoTabsBookingCancellingConditions;
