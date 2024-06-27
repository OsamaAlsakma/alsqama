import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { mainPageEndpointsUrl } from "~/bootstrap/helper/endpoints";
import {
  HandlingSectionPaddingWrapper,
  StyledAppTitleWrapper,
} from "~/bootstrap/helper/global-styles";
import {
  StyledMainRepeatedQuestionsWrapper,
  StyledRepeatedQuestionsAccordionQuestion,
  StyledRepeatedQuestionsAccordionQuestionTitle,
  StyledRepeatedQuestionsListItemIcon,
} from "~/core/main/view/repeated-questions-section/wrapper/style";
import CircularLoader from "~/generic/components/circular-loader/circular-loader";

export interface MainRepeatedQuestionsType {
  question: string;
  answer: string;
}

const MainRepeatedQuestionsWrapper = () => {
  // get the data
  const [mainRepeatedQuestions, setMainRepeatedQuestions] = useState<
    MainRepeatedQuestionsType[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchMainPageSlidesData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${mainPageEndpointsUrl.mainPageRepeatedQuestions}`
      );
      if (response.status === 200) {
        const repeatedQuestions: MainRepeatedQuestionsType[] = response.data;
        setMainRepeatedQuestions(repeatedQuestions);
      }
    } catch (errro) {
      throw Error("failed to load repeated question..");
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchMainPageSlidesData();
  }, []);

  if (isLoading) return <CircularLoader />;
  if (mainRepeatedQuestions.length === 0) return null;

  return (
    <HandlingSectionPaddingWrapper>
      <StyledAppTitleWrapper>الاسئلة المتكررة</StyledAppTitleWrapper>
      <StyledMainRepeatedQuestionsWrapper>
        {mainRepeatedQuestions.map((qAndA, index) => (
          <Accordion key={index}>
            <StyledRepeatedQuestionsAccordionQuestion
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <StyledRepeatedQuestionsListItemIcon />
              <StyledRepeatedQuestionsAccordionQuestionTitle>
                {qAndA.question}
              </StyledRepeatedQuestionsAccordionQuestionTitle>
            </StyledRepeatedQuestionsAccordionQuestion>
            <AccordionDetails>{qAndA.answer}</AccordionDetails>
          </Accordion>
        ))}
      </StyledMainRepeatedQuestionsWrapper>
    </HandlingSectionPaddingWrapper>
  );
};

export default MainRepeatedQuestionsWrapper;
