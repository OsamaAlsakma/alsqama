import { useTranslation } from "react-i18next";
import styled from "styled-components";
import {
  mediumScreenSize,
  secondaryColor,
} from "~/bootstrap/helper/global-helper";
import langKey from "~/bootstrap/i18n/langKey";

const WebisteDescriptionTitle = styled.h3`
  font-size: 28px;
  text-align: center;
`;

const WebisteDescriptionText = styled.p`
  font-size: 20px;
  line-height: 1.5;
  text-align: justify;
`;

const WebisteDescriptionYemen = styled.span`
  color: ${secondaryColor};
`;

const WebisteDescriptionContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 33%;
  @media (max-width: ${mediumScreenSize}) {
    width: 100%;
  }
`;

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
