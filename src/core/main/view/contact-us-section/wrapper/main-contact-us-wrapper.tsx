import MainContactUsForm from "~/core/main/view/contact-us-section/contact-us-form/main-contact-us-form";
import MainContactUsTestimonials from "~/core/main/view/contact-us-section/testimonials/main-contact-us-testimonials";
import { StyledHandlingSectionPaddingWrapper } from "~/core/main/view/contact-us-section/wrapper/style";

const MainContactUsWrapper = () => {
  return (
    <StyledHandlingSectionPaddingWrapper>
      <MainContactUsTestimonials />
      <MainContactUsForm />
    </StyledHandlingSectionPaddingWrapper>
  );
};

export default MainContactUsWrapper;
