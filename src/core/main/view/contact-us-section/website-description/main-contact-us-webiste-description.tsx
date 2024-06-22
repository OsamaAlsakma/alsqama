import { useTranslation } from "react-i18next";
import langKey from "~/bootstrap/i18n/langKey";
import {
  WebisteDescriptionContainer,
  WebisteDescriptionTitle,
  WebisteDescriptionYemen,
  WebisteDescriptionText,
} from "~/core/main/view/contact-us-section/website-description/style";

const MainContactUsWebisteDescription = () => {
  const { t } = useTranslation();
  return (
    <WebisteDescriptionContainer className="description">
      <WebisteDescriptionTitle>
        {t(langKey.mainPage.contactUsDescriptionTitle)}
        <WebisteDescriptionYemen>
          {" "}
          {t(langKey.mainPage.contactUsDescriptionYemen)}{" "}
        </WebisteDescriptionYemen>
      </WebisteDescriptionTitle>
      <WebisteDescriptionText>
        {t(langKey.mainPage.contactUsDescriptionText)}
      </WebisteDescriptionText>
    </WebisteDescriptionContainer>
  );
};

export default MainContactUsWebisteDescription;
