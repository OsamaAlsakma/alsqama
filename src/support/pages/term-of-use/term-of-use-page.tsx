import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { mainPageEndpointsUrl } from "~/bootstrap/helper/endpoints";
import { getTermOfUseAndPrivacyPolicyDTO } from "~/bootstrap/helper/global-helper";
import {
  TermOfUseAndPrivacyResponse,
  TermOfUseAndPrivacyType,
} from "~/bootstrap/helper/global-types";
import langKey from "~/bootstrap/i18n/langKey";
import {
  ChaletsCardsWrapperMessages,
  StyledChaletsCardsWrapper,
} from "~/core/chalets/view/cards-section/wrapper/style";
import { ChaletsDetailsTitle } from "~/core/chalets/view/details-section/title-section/wrapper/style";
import CircularLoader from "~/generic/components/circular-loader/circular-loader";

const JustifiedBody = styled.p`
  text-align: justify;
`;

const TermOfUsePage = () => {
  const [termsOfUse, setTermOfUse] = useState<TermOfUseAndPrivacyType[]>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTermsOfUse = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${mainPageEndpointsUrl.termsOfUse}`);
      if (response.status === 200) {
        const termOfUse: TermOfUseAndPrivacyResponse[] = response.data;
        const termsOfUseDto: TermOfUseAndPrivacyType[] =
          getTermOfUseAndPrivacyPolicyDTO(termOfUse);
        setTermOfUse(termsOfUseDto);
        setIsError(false);
      }
    } catch (errro) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTermsOfUse();
  }, []);
  const { t } = useTranslation();

  if (isLoading) return <CircularLoader />;

  return (
    <StyledChaletsCardsWrapper>
      {isError ? (
        <ChaletsCardsWrapperMessages>
          المعذرة حصل خطأ، يرجى المحاولة لاحقا
        </ChaletsCardsWrapperMessages>
      ) : termsOfUse?.length === 0 ? (
        <ChaletsCardsWrapperMessages>
          لا توجد شروط للاستخدام
        </ChaletsCardsWrapperMessages>
      ) : (
        <>
          <ChaletsDetailsTitle>
            {" "}
            {t(langKey.support.termsOfUse)}
          </ChaletsDetailsTitle>
          {termsOfUse?.map(
            (termOfUse: TermOfUseAndPrivacyType, index: number) => (
              <div key={index}>
                <h4>{termOfUse.title}</h4>
                <JustifiedBody>{termOfUse.body}</JustifiedBody>
              </div>
            )
          )}
        </>
      )}
    </StyledChaletsCardsWrapper>
  );
};

export default TermOfUsePage;
