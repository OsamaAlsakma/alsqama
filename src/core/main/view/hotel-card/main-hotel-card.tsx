import CardContent from "@mui/material/CardContent/CardContent";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Typography from "@mui/material/Typography/Typography";
import { useTranslation } from "react-i18next";
import { imagesUrl } from "~/bootstrap/helper/global-helper";
import { CardActionsButtonWithLink } from "~/bootstrap/helper/global-styles";
import langKey from "~/bootstrap/i18n/langKey";
import {
  StyledCard,
  StyledMainHotelCardCardActions,
  StyledMainHotelCardNumberOfHotels,
} from "~/core/main/view/hotel-card/style";
import { MainPageAccommodationsCard } from "~/core/main/view/hotel-cards-wrapper/main-hotel-cards-wrapper";

const MainHotelCard = (props: MainPageAccommodationsCard) => {
  const { description, endpoint, image, length, name } = props;
  const { t } = useTranslation();
  return (
    <StyledCard sx={{ boxShadow: 4 }}>
      <CardMedia
        sx={{ height: 180 }}
        image={`${imagesUrl}/${image}`}
        title={name}
      />
      <CardContent>
        <Typography
          style={{ display: "flex", alignContent: "center" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {name}
          <StyledMainHotelCardNumberOfHotels>
            العدد: {length}{" "}
          </StyledMainHotelCardNumberOfHotels>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <StyledMainHotelCardCardActions>
        <CardActionsButtonWithLink to={`${endpoint}`}>
          {t(langKey.mainPage.surf)} {name}
        </CardActionsButtonWithLink>
      </StyledMainHotelCardCardActions>
    </StyledCard>
  );
};

export default MainHotelCard;
