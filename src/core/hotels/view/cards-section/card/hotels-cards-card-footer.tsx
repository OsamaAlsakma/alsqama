import { useTranslation } from "react-i18next";
import { servicesPageEndpoint } from "~/bootstrap/helper/endpoints";
import { CardActionsButtonWithLink } from "~/bootstrap/helper/global-styles";
import langKey from "~/bootstrap/i18n/langKey";
import { ChaletsCardsCardActions } from "~/core/chalets/view/cards-section/card/style";

type IHotelsCardsCardFooterProps = {
  hotelId: string;
};

const HotelsCardsCardFooter = (props: IHotelsCardsCardFooterProps) => {
  const { hotelId } = props;
  const { t } = useTranslation();

  return (
    <ChaletsCardsCardActions>
      <CardActionsButtonWithLink
        to={`${servicesPageEndpoint.hotels}/${hotelId}`}
      >
        {t(langKey.global.more)}
      </CardActionsButtonWithLink>
    </ChaletsCardsCardActions>
  );
};

export default HotelsCardsCardFooter;
