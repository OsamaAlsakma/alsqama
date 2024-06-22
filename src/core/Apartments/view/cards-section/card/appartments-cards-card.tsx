import CardContent from "@mui/material/CardContent/CardContent";
import AppartmentsCardsCardBody from "~/core/Apartments/view/cards-section/card/appartments-cards-card-body";
import { Appartment } from "~/core/Apartments/view/cards-section/wrapper/appartments-cards-wrapper";
import ChaletsCardsCardImages from "~/core/chalets/view/cards-section/card/chalets-cards-card-images";
import {
  StyledChaletsCardsCard,
  StyledChaletsCardsCardMedia,
} from "~/core/chalets/view/cards-section/card/style";
import HallsCardsCardFooter from "~/core/halls/view/cards-section/card/halls-cards-card-footer";
import HallsCardsCardMainTitle from "~/core/halls/view/cards-section/card/halls-cards-card-title";

type IAppartmentsCardsCardProps = {
  appartment: Appartment;
};

const AppartmentsCardsCard = (props: IAppartmentsCardsCardProps) => {
  const { appartment } = props;
  return (
    <StyledChaletsCardsCard>
      <StyledChaletsCardsCardMedia>
        <ChaletsCardsCardImages images={appartment.images} />
      </StyledChaletsCardsCardMedia>
      <CardContent>
        <HallsCardsCardMainTitle
          name={appartment.name}
          pricePerNight={appartment.pricePerNight}
        />
        <AppartmentsCardsCardBody
          location={appartment.location}
          numberOfRooms={appartment.numberOfRooms}
        />
      </CardContent>
      <HallsCardsCardFooter hallId={appartment.id} />
    </StyledChaletsCardsCard>
  );
};

export default AppartmentsCardsCard;
