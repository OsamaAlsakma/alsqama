import CardContent from "@mui/material/CardContent/CardContent";
import ChaletsCardsCardImages from "~/core/chalets/view/cards-section/card/chalets-cards-card-images";
import { StyledChaletsCardsCardMedia } from "~/core/chalets/view/cards-section/card/style";
import { StyledHotelsCardsCard } from "~/core/hotels/view/cards-section/card/style";
import HotelItemsCardsCardBody from "~/core/hotels/view/items-cards-section/card/hotel-items-cards-card-body";
import HotelItemsCardsCardFooter from "~/core/hotels/view/items-cards-section/card/hotel-items-cards-card-footer";
import HotelItemsCardsCardMainTitle from "~/core/hotels/view/items-cards-section/card/hotel-items-cards-card-title";
import { HotelItem } from "~/core/hotels/view/items-cards-section/wrapper/hotel-items-cards-wrapper";

type IHotelItemsCardsCardProps = {
  hotelId: string;
  hotelItem: HotelItem;
};

const HotelItemsCardsCard = (props: IHotelItemsCardsCardProps) => {
  const { hotelItem, hotelId } = props;

  return (
    <StyledHotelsCardsCard>
      <StyledChaletsCardsCardMedia>
        <ChaletsCardsCardImages images={hotelItem.images} />
      </StyledChaletsCardsCardMedia>
      <CardContent>
        <HotelItemsCardsCardMainTitle
          name={hotelItem.title}
          roomsNumber={hotelItem.roomsNumber}
        />
        <HotelItemsCardsCardBody
          pricePerNight={hotelItem.pricePerNight}
          bedsNumber={hotelItem.bedsNumber}
        />
      </CardContent>
      <HotelItemsCardsCardFooter hotelId={hotelId} hotelItemId={hotelItem.id} />
    </StyledHotelsCardsCard>
  );
};

export default HotelItemsCardsCard;
