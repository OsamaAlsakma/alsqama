import CardContent from "@mui/material/CardContent/CardContent";
import ChaletsCardsCardBody from "~/core/chalets/view/cards-section/card/chalets-cards-card-body";
import ChaletsCardsCardFooter from "~/core/chalets/view/cards-section/card/chalets-cards-card-footer";
import ChaletsCardsCardMainTitle from "~/core/chalets/view/cards-section/card/chalets-cards-card-title";
import {
  StyledChaletsCardsCard,
  StyledChaletsCardsCardMedia,
} from "~/core/chalets/view/cards-section/card/style";
import image1 from "../../../../../../public/assets/1.jpg";

const ChaletsCardsCard = () => {
  return (
    <StyledChaletsCardsCard>
      <StyledChaletsCardsCardMedia image={image1} />
      <CardContent>
        <ChaletsCardsCardMainTitle />
        <ChaletsCardsCardBody />
      </CardContent>
      <ChaletsCardsCardFooter />
    </StyledChaletsCardsCard>
  );
};

export default ChaletsCardsCard;
