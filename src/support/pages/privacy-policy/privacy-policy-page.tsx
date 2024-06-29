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

type PrivacyPolicyType = {
  title: string;
  body: string;
};

const JustifiedBody = styled.p`
  text-align: justify;
`;

const PrivacyPolicyPage = () => {
  const [privacyPolicy, setPrivacyPolicy] =
    useState<TermOfUseAndPrivacyType[]>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPrivacyPolicy = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${mainPageEndpointsUrl.privacyPolicy}`);
      if (response.status === 200) {
        const privacyPolicy: TermOfUseAndPrivacyResponse[] = response.data;
        const privacyPolicyDto: TermOfUseAndPrivacyType[] =
          getTermOfUseAndPrivacyPolicyDTO(privacyPolicy);
        setPrivacyPolicy(privacyPolicyDto);
        setIsError(false);
      }
    } catch (errro) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPrivacyPolicy();
  }, []);

  const { t } = useTranslation();
  if (isLoading) return <CircularLoader />;

  return (
    <StyledChaletsCardsWrapper>
      {isError ? (
        <ChaletsCardsWrapperMessages>
          المعذرة حصل خطأ، يرجى المحاولة لاحقا
        </ChaletsCardsWrapperMessages>
      ) : privacyPolicy?.length === 0 ? (
        <ChaletsCardsWrapperMessages>
          لا توجد شروط للاستخدام
        </ChaletsCardsWrapperMessages>
      ) : (
        <>
          <ChaletsDetailsTitle>
            {t(langKey.support.privacyPolicy)}
          </ChaletsDetailsTitle>
          {privacyPolicy?.map(
            (privacyPolicy: PrivacyPolicyType, index: number) => (
              <div key={index}>
                <h4>{privacyPolicy.title}</h4>
                <JustifiedBody>{privacyPolicy.body}</JustifiedBody>
              </div>
            )
          )}
        </>
      )}
    </StyledChaletsCardsWrapper>
  );
};

export default PrivacyPolicyPage;
