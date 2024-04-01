import styled from "styled-components";
import MainContactUsWrapper from "~/core/main/view/contact-us-section/wrapper/main-contact-us-wrapper";
import MainDiscountsWrapper from "~/core/main/view/discounts-section/wrapper/main-discounts-wrapper";
import MainHotelCardsWrapper from "~/core/main/view/hotel-cards-wrapper/main-hotel-cards-wrapper";
import MainOurServicesWrapper from "~/core/main/view/our-services-section/wrapper/main-our-services-wrapper";
import MainRepeatedQuestionsWrapper from "~/core/main/view/repeated-questions-section/wrapper/main-repeated-questions-wrapper";
import MainSlides from "~/core/main/view/slides/main-slides";

// TODO delete this
const StyledDiv = styled.div`
  width: 200px;
  height: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 9.1);
  background-color: red;
  margin: 16px;
`;

const MainPage = () => {
  return (
    <div>
      <MainSlides />
      <MainHotelCardsWrapper />
      <MainOurServicesWrapper />
      <MainDiscountsWrapper />
      <MainRepeatedQuestionsWrapper />
      <MainContactUsWrapper />
      <StyledDiv>salar</StyledDiv>
    </div>
  );
};

export default MainPage;
