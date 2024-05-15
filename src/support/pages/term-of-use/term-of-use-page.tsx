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

type TermsOfUseType = {
  title: string;
  body: string;
};

const JustifiedBody = styled.p`
  text-align: justify;
`;

const TermOfUsePage = () => {
  const [termsOfUse, setTermOfUse] = useState<TermsOfUseType[]>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTermsOfUse = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${endpointsUrl.termsOfUse}`);
      if (response.status === 200) {
        const termOfUse: TermsOfUseType[] = response.data;
        setTermOfUse(termOfUse);
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
          <ChaletsDetailsTitle>شروط الإستخدام</ChaletsDetailsTitle>
          {termsOfUse?.map((termOfUse: TermsOfUseType, index: number) => (
            <div key={index}>
              <h4>{termOfUse.title}</h4>
              <JustifiedBody>{termOfUse.body}</JustifiedBody>
            </div>
          ))}
        </>
      )}
    </StyledChaletsCardsWrapper>
  );
};

export default TermOfUsePage;
