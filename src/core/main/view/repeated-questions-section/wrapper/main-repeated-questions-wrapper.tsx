import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  ListItemTextProps,
  ListProps,
} from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import {
  HandlingSectionPaddingWrapper,
  StyledAppTitleWrapper,
} from "~/bootstrap/helper/global-styles";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import * as palette from "../../../../../bootstrap/helper/global-helper";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IMainRepeatedQuestionsWrapperProps {
  title?: string;
  questionsAndAnswers: { question: string; answer: string; isOpen: boolean }[];
}

const data: IMainRepeatedQuestionsWrapperProps = {
  title: "الاسئلة المتكررة",
  questionsAndAnswers: [
    {
      question: "ما هي أهمية تقييمات النزلاء في فنادق السياحة؟",
      answer: `
      تقييمات النزلاء تساعد المسافرين على اتخاذ قراراتهم بناءً على تجارب الآخرين،
       وتوفر معلومات دقيقة حول جودة الخدمة والراحة والنظافة في الفنادق.
      `,
      isOpen: false,
    },
    {
      question:
        "ما هي أبرز الميزات التي يبحث عنها المسافرون عند اختيار فندق لإقامتهم؟",
      answer: `
      يبحث المسافرون عادة عن موقع مركزي، ووجود خدمات مثل الإنترنت اللاسلكي المجاني،
       ومرافق الترفيه والرياضة، وخدمة الغرف على مدار الساعة، ووجود مطاعم ومقاهي داخل الفندق.`,
      isOpen: false,
    },
    {
      question: "ما هي أهمية تصنيف الفنادق وفقًا لنجمات التصنيف؟",
      answer: `
      يساعد تصنيف الفنادق وفقًا لعدد النجمات في توجيه المسافرين إلى
       الخيارات التي تتناسب مع ميزانيتهم وتوقعاتهم. كلما كانت نجوم الفندق أكثر، كانت المرافق وجودتها أفضل.`,
      isOpen: false,
    },
    {
      question: "ما هي أهم العوامل التي تؤثر على أسعار الغرف في الفنادق؟",
      answer: `
      تؤثر العديد من العوامل على أسعار الغرف في الفنادق، 
      مثل الموسم والطلب، والموقع،
       ومستوى الفخامة والخدمات المقدمة، وحجم الغرفة والإطلالة عليها.`,
      isOpen: false,
    },
    {
      question: "ما هي الخطوات الأساسية لحجز فندق عبر الإنترنت؟",
      answer: `
      الخطوات تتضمن تحديد الموقع والتواريخ المطلوبة للإقامة، ثم البحث عن الفنادق المتاحة`,
      isOpen: false,
    },
  ],
};

export const StyledMainRepeatedQuestionsWrapper = styled.div`
  background-color: "#F9F9F9";
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;

export const StyledRepeatedQuestionsList = styled(List)<ListProps>`
  && {
  }
`;

export const StyledRepeatedQuestionsListItemTextQuestion = styled(
  ListItemText
)<ListItemTextProps>`
  && .MuiTypography-root {
    font-weight: bold;
    text-align: right;
    font-size: 18px;
    color: ${palette.primaryColor};
    background-color: inherit;
  }
`;

export const StyledRepeatedQuestionsListItemText = styled(
  ListItemText
)<ListItemTextProps>`
  text-align: right;
`;

export const StyledRepeatedQuestionsListItemIcon = styled(ContactSupportIcon)`
  && {
    color: ${palette.primaryColor};
    width: 30px;
    height: 30px;
    margin-left: 10px;
  }
`;

const MainRepeatedQuestionsWrapper = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const repeatedQuestions = data;

  if (!repeatedQuestions.title) return null;
  return (
    <HandlingSectionPaddingWrapper>
      <StyledAppTitleWrapper>{repeatedQuestions.title}</StyledAppTitleWrapper>
      <StyledMainRepeatedQuestionsWrapper>
        {repeatedQuestions.questionsAndAnswers.map((qAndA, index) => (
          <StyledRepeatedQuestionsList
            key={index}
            sx={{ width: "100%", bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={handleClick}>
              <StyledRepeatedQuestionsListItemIcon />
              <StyledRepeatedQuestionsListItemTextQuestion
                primary={qAndA.question}
              />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={qAndA.isOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <StyledRepeatedQuestionsListItemText primary={qAndA.answer} />
                </ListItemButton>
              </List>
            </Collapse>
          </StyledRepeatedQuestionsList>
        ))}
      </StyledMainRepeatedQuestionsWrapper>
      {/*  */}
      <StyledMainRepeatedQuestionsWrapper>
        {repeatedQuestions.questionsAndAnswers.map((qAndA, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <StyledRepeatedQuestionsListItemIcon />
              {qAndA.question}
            </AccordionSummary>
            <AccordionDetails>{qAndA.answer}</AccordionDetails>
          </Accordion>
        ))}
      </StyledMainRepeatedQuestionsWrapper>
    </HandlingSectionPaddingWrapper>
  );
};

export default MainRepeatedQuestionsWrapper;
