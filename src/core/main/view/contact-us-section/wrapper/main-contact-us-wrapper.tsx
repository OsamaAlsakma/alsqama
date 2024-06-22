import MainContactUsForm from "~/core/main/view/contact-us-section/contact-us-form/main-contact-us-form";
import MainContactUsPictures from "~/core/main/view/contact-us-section/pictures/main-contact-us-pictures";
import MainContactUsWebisteDescription from "~/core/main/view/contact-us-section/website-description/main-contact-us-webiste-description";
import { StyledHandlingSectionPaddingWrapper } from "~/core/main/view/contact-us-section/wrapper/style";

const MainContactUsWrapper = () => {
  return (
    <StyledHandlingSectionPaddingWrapper>
      <MainContactUsPictures />
      <MainContactUsWebisteDescription />
      <MainContactUsForm />
    </StyledHandlingSectionPaddingWrapper>
  );
};

export default MainContactUsWrapper;
