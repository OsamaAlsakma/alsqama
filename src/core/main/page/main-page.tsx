import styled from "styled-components";
import MainHotelCardsWrapper from "~/core/main/view/hotel-cards-wrapper/main-hotel-cards-wrapper";
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
      <StyledDiv>salar</StyledDiv>
    </div>
  );
};

export default MainPage;
