import ChaletsDetailsBookingCard from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/booking-card/chalets-details-booking-card";
import ChaletsDetailsInfoTabs from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/info-tabs/chalets-details-info-tabs";
import { ReviewType } from "~/core/chalets/page/chalet-details-page";
import { InfoTabsAndBookingCardWrapperPadded } from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/wrapper/style";
import { ResservedDateType } from "~/bootstrap/helper/global-types";

interface IChaletsDetailsInfoTabsAndBookingCardWrapperProps {
  infoTabs: {
    features: string[];
    bookingConditions: string;
    cancellingConditions: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    reviews: ReviewType[];
  };
  pricePerNight: number;
  name: string;
  reservedDates: ResservedDateType[];
}

const ChaletsDetailsInfoTabsAndBookingCardWrapper = (
  props: IChaletsDetailsInfoTabsAndBookingCardWrapperProps
) => {
  const { infoTabs, pricePerNight, name, reservedDates } = props;
  return (
    <InfoTabsAndBookingCardWrapperPadded>
      <ChaletsDetailsInfoTabs infoTabs={infoTabs} />
      <ChaletsDetailsBookingCard
        name={name}
        pricePerNight={pricePerNight}
        reservedDates={reservedDates}
      />
    </InfoTabsAndBookingCardWrapperPadded>
  );
};

export default ChaletsDetailsInfoTabsAndBookingCardWrapper;
