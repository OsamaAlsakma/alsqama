import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails } from "@mui/material";
import {
  HandlingSectionPaddingWrapper,
  StyledAppTitleWrapper,
} from "~/bootstrap/helper/global-styles";
import { data } from "~/core/main/view/repeated-questions-section/wrapper/data";
import {
  StyledMainRepeatedQuestionsWrapper,
  StyledRepeatedQuestionsAccordionQuestion,
  StyledRepeatedQuestionsAccordionQuestionTitle,
  StyledRepeatedQuestionsListItemIcon,
} from "~/core/main/view/repeated-questions-section/wrapper/style";

export interface IMainRepeatedQuestionsWrapperProps {
  title?: string;
  questionsAndAnswers: { question: string; answer: string; isOpen: boolean }[];
}

const MainRepeatedQuestionsWrapper = () => {
  const repeatedQuestions = data;

  if (!repeatedQuestions.title) return null;
  return (
    <HandlingSectionPaddingWrapper>
      <StyledAppTitleWrapper>{repeatedQuestions.title}</StyledAppTitleWrapper>
      <StyledMainRepeatedQuestionsWrapper>
        {repeatedQuestions.questionsAndAnswers.map((qAndA, index) => (
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
