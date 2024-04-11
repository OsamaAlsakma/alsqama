import CardContent from "@mui/material/CardContent/CardContent";
import ChaletsCardsCardBody from "~/core/chalets/view/cards-section/card/chalets-cards-card-body";
import ChaletsCardsCardFooter from "~/core/chalets/view/cards-section/card/chalets-cards-card-footer";
import ChaletsCardsCardImages from "~/core/chalets/view/cards-section/card/chalets-cards-card-images";
import ChaletsCardsCardMainTitle from "~/core/chalets/view/cards-section/card/chalets-cards-card-title";
import {
  StyledChaletsCardsCard,
  StyledChaletsCardsCardMedia,
} from "~/core/chalets/view/cards-section/card/style";

const ChaletsCardsCard = () => {
  return (
    <StyledChaletsCardsCard>
      <StyledChaletsCardsCardMedia>
        <ChaletsCardsCardImages />
      </StyledChaletsCardsCardMedia>
      <CardContent>
        <ChaletsCardsCardMainTitle />
        <ChaletsCardsCardBody />
      </CardContent>
      <ChaletsCardsCardFooter />
    </StyledChaletsCardsCard>
  );
};

export default ChaletsCardsCard;
