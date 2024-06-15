import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { endpointsUrl } from "~/bootstrap/helper/endpoints";
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
  const [privacyPolicy, setPrivacyPolicy] = useState<PrivacyPolicyType[]>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPrivacyPolicy = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${endpointsUrl.privacyPolicy}`);
      if (response.status === 200) {
        const privacyPolicy: PrivacyPolicyType[] = response.data;
        setPrivacyPolicy(privacyPolicy);
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
          <ChaletsDetailsTitle>سياسة الخصوصية</ChaletsDetailsTitle>
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
