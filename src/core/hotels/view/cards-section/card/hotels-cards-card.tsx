import CardContent from "@mui/material/CardContent/CardContent";
import ChaletsCardsCardImages from "~/core/chalets/view/cards-section/card/chalets-cards-card-images";
import ChaletsCardsCardMainTitle from "~/core/chalets/view/cards-section/card/chalets-cards-card-title";
import { StyledChaletsCardsCardMedia } from "~/core/chalets/view/cards-section/card/style";
import HotelsCardsCardBody from "~/core/hotels/view/cards-section/card/hotels-cards-card-body";
import HotelsCardsCardFooter from "~/core/hotels/view/cards-section/card/hotels-cards-card-footer";
import { StyledHotelsCardsCard } from "~/core/hotels/view/cards-section/card/style";
import { Hotel } from "~/core/hotels/view/cards-section/wrapper/hotels-cards-wrapper";

type IHotlesCardsCardProps = {
  hotel: Hotel;
};

const HotelsCardsCard = (props: IHotlesCardsCardProps) => {
  const { hotel } = props;
  return (
    <StyledHotelsCardsCard>
      <StyledChaletsCardsCardMedia>
        <ChaletsCardsCardImages images={hotel.images} />
      </StyledChaletsCardsCardMedia>
      <CardContent>
        <ChaletsCardsCardMainTitle
          name={hotel.hotelName}
          numberOfStars={hotel.numberOfStars}
        />
        <HotelsCardsCardBody
          cardBody={{
            location: hotel.location,
            phoneNumber: hotel.phoneNumber,
            description: hotel.description,
          }}
        />
      </CardContent>
      <HotelsCardsCardFooter hotelId={hotel.id} />
    </StyledHotelsCardsCard>
  );
};

export default HotelsCardsCard;
