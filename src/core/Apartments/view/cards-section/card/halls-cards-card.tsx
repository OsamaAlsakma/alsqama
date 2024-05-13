import CardContent from "@mui/material/CardContent/CardContent";
import ChaletsCardsCardImages from "~/core/chalets/view/cards-section/card/chalets-cards-card-images";
import {
  StyledChaletsCardsCard,
  StyledChaletsCardsCardMedia,
} from "~/core/chalets/view/cards-section/card/style";
import HallsCardsCardBody from "~/core/halls/view/cards-section/card/halls-cards-card-body";
import HallsCardsCardFooter from "~/core/halls/view/cards-section/card/halls-cards-card-footer";
import HallsCardsCardMainTitle from "~/core/halls/view/cards-section/card/halls-cards-card-title";
import { Hall } from "~/core/halls/view/cards-section/wrapper/halls-cards-wrapper";

type IHallsCardsCardProps = {
  hall: Hall;
};

const HallsCardsCard = (props: IHallsCardsCardProps) => {
  const { hall } = props;
  return (
    <StyledChaletsCardsCard>
      <StyledChaletsCardsCardMedia>
        <ChaletsCardsCardImages images={hall.images} />
      </StyledChaletsCardsCardMedia>
      <CardContent>
        <HallsCardsCardMainTitle
          name={hall.name}
          pricePerNight={hall.pricePerNight}
        />
        <HallsCardsCardBody
          location={hall.location}
          peopleCapacity={hall.peopleCapacity}
        />
      </CardContent>
      <HallsCardsCardFooter hallId={hall.id} />
    </StyledChaletsCardsCard>
  );
};

export default HallsCardsCard;
