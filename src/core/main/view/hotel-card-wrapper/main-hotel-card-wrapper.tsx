import {
  HandlingSectionPaddingWrapper,
  StyledAppTitleWrapper,
} from "~/bootstrap/helper/global-styles";
import MainHotelCard from "~/core/main/view/hotel-card/main-hotel-card";
import MainHotelCardVM from "~/core/main/view/hotel-card/main-hotel-card-vm";

const MainHotelCardWrapper = () => {
  const vm = new MainHotelCardVM("one").useVM();
  return (
    <HandlingSectionPaddingWrapper>
      <StyledAppTitleWrapper>
        أكثر من 94,000 من بيوت العطلات في كافة المدن حول اليمن
      </StyledAppTitleWrapper>
      <MainHotelCard vm={vm} />
      <MainHotelCard vm={vm} />
      <MainHotelCard vm={vm} />
    </HandlingSectionPaddingWrapper>
  );
};

export default MainHotelCardWrapper;
