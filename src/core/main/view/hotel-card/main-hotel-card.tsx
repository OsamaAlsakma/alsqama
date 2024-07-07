import CardContent from "@mui/material/CardContent/CardContent";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Typography from "@mui/material/Typography/Typography";
import { useTranslation } from "react-i18next";
import di from "~/bootstrap/di";
import { imagesUrl, mainFontFamily } from "~/bootstrap/helper/global-helper";
import { CardActionsButtonWithLink } from "~/bootstrap/helper/global-styles";
import langKey from "~/bootstrap/i18n/langKey";
import {
  StyledCard,
  StyledMainHotelCardCardActions,
  StyledMainHotelCardNumberOfHotels,
} from "~/core/main/view/hotel-card/style";
import { MainPageAccommodationsCard } from "~/core/main/view/hotel-cards-wrapper/main-hotel-cards-wrapper";
import SelectedTabCTX from "~/generic/context/selected-tab-ctx";

const MainHotelCard = (props: MainPageAccommodationsCard) => {
  const { description, endpoint, image, length, name, tabName } = props;
  const { t } = useTranslation();
  const { changeSelectedTab } = di.resolve(SelectedTabCTX).useContext();
  return (
    <StyledCard sx={{ boxShadow: 4 }}>
      <CardMedia
        sx={{ height: 180 }}
        image={`${imagesUrl}/${image}`}
        title={name}
        style={{ fontFamily: `${mainFontFamily}` }}
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
            {t(langKey.mainPage.count)} {length}{" "}
          </StyledMainHotelCardNumberOfHotels>
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ fontFamily: `${mainFontFamily}` }}
        >
          {description}
        </Typography>
      </CardContent>
      <StyledMainHotelCardCardActions>
        <CardActionsButtonWithLink
          to={`${endpoint}`}
          onClick={() => changeSelectedTab(tabName)}
        >
          {t(langKey.mainPage.surf)} {name}
        </CardActionsButtonWithLink>
      </StyledMainHotelCardCardActions>
    </StyledCard>
  );
};

export default MainHotelCard;
