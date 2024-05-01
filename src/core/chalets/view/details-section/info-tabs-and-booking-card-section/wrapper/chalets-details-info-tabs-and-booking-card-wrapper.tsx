import ChaletsDetailsBookingCard from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/booking-card/chalets-details-booking-card";
import ChaletsDetailsInfoTabs from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/info-tabs/chalets-details-info-tabs";
import { ReviewType } from "~/core/chalets/page/chalet-details-page";
import { InfoTabsAndBookingCardWrapperPadded } from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/wrapper/style";

interface IChaletsDetailsInfoTabsAndBookingCardWrapperProps {
  infoTabs: {
    features: string[];
    bookingConditions: string;
    cancelingConditions: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    reviews: ReviewType[];
  };
  pricePerNight: number;
}

const ChaletsDetailsInfoTabsAndBookingCardWrapper = (
  props: IChaletsDetailsInfoTabsAndBookingCardWrapperProps
) => {
  const { infoTabs, pricePerNight } = props;
  return (
    <InfoTabsAndBookingCardWrapperPadded>
      <ChaletsDetailsInfoTabs infoTabs={infoTabs} />
      <ChaletsDetailsBookingCard pricePerNight={pricePerNight} />
    </InfoTabsAndBookingCardWrapperPadded>
  );
};

export default ChaletsDetailsInfoTabsAndBookingCardWrapper;