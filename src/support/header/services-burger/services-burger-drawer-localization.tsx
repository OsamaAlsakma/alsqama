import { useTranslation } from "react-i18next";
import { LANGS } from "~/bootstrap/i18n/init-i18n";
import { StyledHeaderLocalizationIcon } from "~/support/header/localization-select-box/style";
import {
  HeaderDrawerLocalizationButtonWrapper,
  HeaderDrawerLocalizationIconAndText,
  HeaderDrawerLocalizationTextWrapper,
  HeaderDrawerLocalizationKeyword,
  StyledArrowBackIosNewIcon,
} from "~/support/header/services-burger/style";

const ServicesBurgerDrawerLocalization = () => {
  const { i18n } = useTranslation();
  const handleSetLanguage = () => {
    if (i18n.language === LANGS.AR) {
      i18n.changeLanguage(LANGS.EN);
      return;
    }
    i18n.changeLanguage(LANGS.AR);
  };

  return (
    <HeaderDrawerLocalizationButtonWrapper
      disableRipple
      onClick={() => {
        handleSetLanguage();
      }}
    >
      <HeaderDrawerLocalizationIconAndText>
        <StyledHeaderLocalizationIcon />
        {i18n.language === LANGS.EN ? (
          <HeaderDrawerLocalizationTextWrapper>
            تصفح ب
            <HeaderDrawerLocalizationKeyword>
              العربية
            </HeaderDrawerLocalizationKeyword>
          </HeaderDrawerLocalizationTextWrapper>
        ) : (
          <HeaderDrawerLocalizationTextWrapper>
            Browse in
            <HeaderDrawerLocalizationKeyword>
              English
            </HeaderDrawerLocalizationKeyword>
          </HeaderDrawerLocalizationTextWrapper>
        )}
      </HeaderDrawerLocalizationIconAndText>
      <StyledArrowBackIosNewIcon />
    </HeaderDrawerLocalizationButtonWrapper>
  );
};

export default ServicesBurgerDrawerLocalization;
