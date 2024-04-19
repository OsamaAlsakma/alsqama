import styled from "styled-components";
import { HandlingSectionPaddingWrapper } from "~/bootstrap/helper/global-styles";
import ChaletsDetailsBookingCard from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/booking-card/chalets-details-booking-card";
import ChaletsDetailsInfoTabs from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/info-tabs/chalets-details-info-tabs";
import * as palette from "~/bootstrap/helper/global-helper";

interface IChaletsDetailsInfoTabsAndBookingCardWrapperProps {
  infoTabs: {
    features: string[];
    bookingConditions: string;
    cancelingConditions: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  pricePerNight: number;
}

const InfoTabsAndBookingCardWrapperPadded = styled(
  HandlingSectionPaddingWrapper
)`
  display: flex;
  gap: 16px;
  @media (max-width: ${palette.mediumScreenSize}) {
    flex-direction: column;
  }
`;

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
