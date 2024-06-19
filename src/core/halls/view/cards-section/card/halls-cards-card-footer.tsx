import { useTranslation } from "react-i18next";
import { servicesPageEndpoint } from "~/bootstrap/helper/endpoints";
import { CardActionsButtonWithLink } from "~/bootstrap/helper/global-styles";
import langKey from "~/bootstrap/i18n/langKey";
import { ChaletsCardsCardActions } from "~/core/chalets/view/cards-section/card/style";

type IHallsCardsCardFooterProps = {
  hallId: string;
};

const HallsCardsCardFooter = (props: IHallsCardsCardFooterProps) => {
  const { hallId } = props;
  const { t } = useTranslation();

  return (
    <ChaletsCardsCardActions>
      <CardActionsButtonWithLink to={`${servicesPageEndpoint.halls}/${hallId}`}>
        {t(langKey.global.more)}
      </CardActionsButtonWithLink>
      <CardActionsButtonWithLink to={`${servicesPageEndpoint.halls}/${hallId}`}>
        {t(langKey.global.bookNow)}
      </CardActionsButtonWithLink>
    </ChaletsCardsCardActions>
  );
};

export default HallsCardsCardFooter;
