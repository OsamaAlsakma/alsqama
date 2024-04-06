import MainContactUsWrapper from "~/core/main/view/contact-us-section/wrapper/main-contact-us-wrapper";
import MainDiscountsWrapper from "~/core/main/view/discounts-section/wrapper/main-discounts-wrapper";
import MainFooterWrapper from "~/core/main/view/footer-section/wrapper/main-footer-wrapper";
import MainHotelCardsWrapper from "~/core/main/view/hotel-cards-wrapper/main-hotel-cards-wrapper";
import MainOurServicesWrapper from "~/core/main/view/our-services-section/wrapper/main-our-services-wrapper";
import MainRepeatedQuestionsWrapper from "~/core/main/view/repeated-questions-section/wrapper/main-repeated-questions-wrapper";
import MainSlides from "~/core/main/view/slides/main-slides";

const MainPage = () => {
  return (
    <div>
      <MainSlides />
      <MainHotelCardsWrapper />
      <MainOurServicesWrapper />
      <MainDiscountsWrapper />
      <MainRepeatedQuestionsWrapper />
      <MainContactUsWrapper />
      <MainFooterWrapper />
    </div>
  );
};

export default MainPage;
