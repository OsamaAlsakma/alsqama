import styled from "styled-components";
import { HandlingSectionPaddingWrapper } from "~/bootstrap/helper/global-styles";
import MainContactUsForm from "~/core/main/view/contact-us-section/contact-us-form/main-contact-us-form";
import * as palette from "~/bootstrap/helper/global-helper";
import MainContactUsSwiper from "~/core/main/view/contact-us-section/swiper/main-contact-us-swiper";

export const StyledHandlingSectionPaddingWrapper = styled(
  HandlingSectionPaddingWrapper
)`
  background-color: ${palette.primaryColor};
  display: grid;
  gap: 30px;

  grid-template-columns: repeat(2, 1fr);

  @media (max-width: ${palette.largeScreenSize}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const MainContactUsWrapper = () => {
  return (
    <StyledHandlingSectionPaddingWrapper>
      <MainContactUsSwiper />
      <MainContactUsForm />
    </StyledHandlingSectionPaddingWrapper>
  );
};

export default MainContactUsWrapper;
