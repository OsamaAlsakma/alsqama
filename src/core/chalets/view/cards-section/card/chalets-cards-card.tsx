import CardContent from "@mui/material/CardContent/CardContent";
import ChaletsCardsCardBody from "~/core/chalets/view/cards-section/card/chalets-cards-card-body";
import ChaletsCardsCardFooter from "~/core/chalets/view/cards-section/card/chalets-cards-card-footer";
import ChaletsCardsCardImages from "~/core/chalets/view/cards-section/card/chalets-cards-card-images";
import ChaletsCardsCardMainTitle from "~/core/chalets/view/cards-section/card/chalets-cards-card-title";
import {
  StyledChaletsCardsCard,
  StyledChaletsCardsCardMedia,
} from "~/core/chalets/view/cards-section/card/style";
import { Chalet } from "~/core/chalets/view/cards-section/wrapper/chalets-cards-wrapper";

type IChaletsCardsCardProps = {
  chalet: Chalet;
};

const ChaletsCardsCard = (props: IChaletsCardsCardProps) => {
  const { chalet } = props;
  return (
    <StyledChaletsCardsCard>
      <StyledChaletsCardsCardMedia>
        <ChaletsCardsCardImages images={chalet.images} />
      </StyledChaletsCardsCardMedia>
      <CardContent>
        <ChaletsCardsCardMainTitle
          name={chalet.name}
          numberOfStars={chalet.numberOfStars}
        />
        <ChaletsCardsCardBody
          cardBody={{
            location: chalet.location,
            nearestTimeAvailable: chalet.nearestTimeAvailable,
            price: chalet.price,
            numberOfRooms: chalet.numberOfRooms,
          }}
        />
      </CardContent>
      <ChaletsCardsCardFooter />
    </StyledChaletsCardsCard>
  );
};

export default ChaletsCardsCard;
