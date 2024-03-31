import AccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary/AccordionSummary";
import styled from "styled-components";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import * as palette from "../../../../../bootstrap/helper/global-helper";

export const StyledMainRepeatedQuestionsWrapper = styled.div`
  background-color: "#F9F9F9";
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;
export const StyledRepeatedQuestionsAccordionQuestion = styled(
  AccordionSummary
)<AccordionSummaryProps>`
  && {
    font-weight: bold;
    font-size: 18px;
    color: ${palette.primaryColor};
    display: flex;
  }
`;

export const StyledRepeatedQuestionsListItemIcon = styled(ContactSupportIcon)`
  && {
    color: ${palette.primaryColor};
    width: 30px;
    height: 30px;
    margin-left: 10px;
    align-self: center;
  }
`;

export const StyledRepeatedQuestionsAccordionQuestionTitle = styled.span`
  padding-top: 8px;
`;
