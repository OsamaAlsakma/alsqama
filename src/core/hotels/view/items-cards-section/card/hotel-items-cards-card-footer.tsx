import { useTranslation } from "react-i18next";
import { servicesPageEndpoint } from "~/bootstrap/helper/endpoints";
import { CardActionsButtonWithLink } from "~/bootstrap/helper/global-styles";
import langKey from "~/bootstrap/i18n/langKey";
import { ChaletsCardsCardActions } from "~/core/chalets/view/cards-section/card/style";

type IHotelsCardsCardFooterProps = {
  hotelId: string;
  hotelItemId: string;
};

const HotelItemsCardsCardFooter = (props: IHotelsCardsCardFooterProps) => {
  const { hotelId, hotelItemId } = props;
  const { t } = useTranslation();

  return (
    <ChaletsCardsCardActions>
      <CardActionsButtonWithLink
        to={`${servicesPageEndpoint.hotels}/${hotelId}/${hotelItemId}`}
      >
        {t(langKey.global.more)}
      </CardActionsButtonWithLink>
      <CardActionsButtonWithLink
        to={`${servicesPageEndpoint.hotels}/${hotelId}/${hotelItemId}`}
      >
        {t(langKey.global.bookNow)}
      </CardActionsButtonWithLink>
    </ChaletsCardsCardActions>
  );
};

export default HotelItemsCardsCardFooter;
