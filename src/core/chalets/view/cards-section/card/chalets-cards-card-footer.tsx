import { useTranslation } from "react-i18next";
import { servicesPageEndpoint } from "~/bootstrap/helper/endpoints";
import { CardActionsButtonWithLink } from "~/bootstrap/helper/global-styles";
import langKey from "~/bootstrap/i18n/langKey";
import { ChaletsCardsCardActions } from "~/core/chalets/view/cards-section/card/style";

type IChaletsCardsCardFooterProps = {
  chaletId: string;
};

const ChaletsCardsCardFooter = (props: IChaletsCardsCardFooterProps) => {
  const { chaletId } = props;
  const { t } = useTranslation();

  return (
    <ChaletsCardsCardActions>
      <CardActionsButtonWithLink
        to={`${servicesPageEndpoint.chalets}/${chaletId}`}
      >
        {t(langKey.global.more)}
      </CardActionsButtonWithLink>
      <CardActionsButtonWithLink
        to={`${servicesPageEndpoint.chalets}/${chaletId}`}
      >
        {t(langKey.global.bookNow)}
      </CardActionsButtonWithLink>
    </ChaletsCardsCardActions>
  );
};

export default ChaletsCardsCardFooter;
